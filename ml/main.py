import pandas as pd
import numpy as np
import pickle
import joblib
import os
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.model_selection import train_test_split
import PyPDF2
import re
import nltk
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
from nltk.stem import PorterStemmer
import tensorflow as tf
from tensorflow.keras.models import Model
from tensorflow.keras.layers import Input, Dense, Embedding, LSTM, Dropout
from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing.sequence import pad_sequences
import warnings
import math
warnings.filterwarnings('ignore')

try:
    nltk.download('punkt')
    nltk.download('stopwords')
    nltk.download('punkt_tab')
except:
    pass

def replace_nan_with_none(data):
    """
    Recursively replaces NaN float values with None in dictionaries and lists.
    This makes the data JSON serializable.
    """
    if isinstance(data, dict):
        return {k: replace_nan_with_none(v) for k, v in data.items()}
    elif isinstance(data, list):
        return [replace_nan_with_none(elem) for elem in data]
    elif isinstance(data, float) and math.isnan(data):
        return None
    else:
        return data

class CVJobMatcher:
    def __init__(self):
        self.tfidf_vectorizer = TfidfVectorizer(
            max_features=5000,
            ngram_range=(1, 2),
            stop_words='english',
            lowercase=True
        )
        self.stemmer = PorterStemmer()
        self.stop_words = set(stopwords.words('english'))
        self.job_data = None
        self.job_vectors = None
        self.model = None
        self.tokenizer = None
        
    def extract_text_from_pdf(self, pdf_path):
        """
        Ekstrak teks dari file PDF CV
        """
        try:
            with open(pdf_path, 'rb') as file:
                pdf_reader = PyPDF2.PdfReader(file)
                text = ""
                
                for page in pdf_reader.pages:
                    text += page.extract_text() + " "
                
                return text.strip()
        except Exception as e:
            print(f"Error extracting PDF: {e}")
            return ""
    
    def preprocess_text(self, text):
        """
        Preprocessing teks dengan cleaning dan normalisasi
        """
        text = text.lower()
        text = re.sub(r'[^a-zA-Z\s]', '', text)
        text = re.sub(r'\s+', ' ', text)
        tokens = word_tokenize(text)
        
        processed_tokens = []
        for token in tokens:
            if token not in self.stop_words and len(token) > 2:
                stemmed_token = self.stemmer.stem(token)
                processed_tokens.append(stemmed_token)
        
        return ' '.join(processed_tokens)
    
    def load_job_dataset(self, dataset_path):
        """
        Load dataset lowongan kerja
        Expected columns: ['Title', 'Company', 'Location', 'Country', 'Job Description', 'Job Requirements', 'Link']
        """
        try:
            self.job_data = pd.read_csv(dataset_path)
            
            expected_columns = ['Title', 'Company', 'Location', 'Country', 'Job Description', 'Job Requirements', 'Link']
            missing_columns = [col for col in expected_columns if col not in self.job_data.columns]
            
            if missing_columns:
                print(f"Warning: Missing columns: {missing_columns}")
                print(f"Available columns: {list(self.job_data.columns)}")
            
            self.job_data['combined_text'] = (
                self.job_data['Title'].fillna('') + ' ' +
                self.job_data['Company'].fillna('') + ' ' +
                self.job_data['Job Description'].fillna('') + ' ' +
                self.job_data['Job Requirements'].fillna('') + ' ' +
                self.job_data['Location'].fillna('')
            )
            
            self.job_data['processed_text'] = self.job_data['combined_text'].apply(
                self.preprocess_text
            )
            
            print(f"Loaded {len(self.job_data)} job records")
            print(f"Dataset columns: {list(self.job_data.columns)}")
            return True
            
        except Exception as e:
            print(f"Error loading dataset: {e}")
            return False
    
    def build_job_vectors(self, texts=None):
        """
        Build TF-IDF vectors untuk dataset lowongan kerja
        """
        if texts is None:
            if self.job_data is None:
                print("Please load job dataset first")
                return False
            job_texts = self.job_data['processed_text'].tolist()
            self.job_vectors = self.tfidf_vectorizer.fit_transform(job_texts)
            print(f"Built job vectors with shape: {self.job_vectors.shape}")
        else:
            return self.tfidf_vectorizer.transform(texts)
            
        return True
            
    def create_neural_model(self):
        """
        Create neural network model untuk similarity scoring
        """
        input_layer = Input(shape=(5000,))
        
        dense1 = Dense(512, activation='relu')(input_layer)
        dropout1 = Dropout(0.3)(dense1)
        
        dense2 = Dense(256, activation='relu')(dropout1)
        dropout2 = Dropout(0.3)(dense2)
        
        dense3 = Dense(128, activation='relu')(dropout2)
        dropout3 = Dropout(0.2)(dense3)
        
        output = Dense(1, activation='sigmoid')(dropout3)
        
        self.model = Model(inputs=input_layer, outputs=output)
        self.model.compile(
            optimizer='adam',
            loss='binary_crossentropy',
            metrics=['accuracy']
        )
        
        return self.model
    
    def find_matching_jobs(self, cv_text, top_k=10):
        """
        Cari lowongan kerja yang paling cocok dengan CV
        """
        if self.job_data is None or self.job_vectors is None:
            print("Please load and build job vectors first")
            return []
        
        try:
            processed_cv = self.preprocess_text(cv_text)
            cv_vector = self.tfidf_vectorizer.transform([processed_cv])
            similarities = cosine_similarity(cv_vector, self.job_vectors).flatten()
            top_indices = similarities.argsort()[-top_k:][::-1]
            
            results = []
            for idx in top_indices:
                job_info = self.job_data.iloc[idx].copy()
                job_info['similarity_score'] = similarities[idx]
                results.append(job_info.to_dict())
            
            cleaned_results = replace_nan_with_none(results)
            return cleaned_results
            
        except Exception as e:
            print(f"Error finding matching jobs: {e}")
            return []
    
    def save_model(self, model_name):
        """
        Simpan model dalam folder ml/
        """
        try:
            ml_folder = "ml"
            if not os.path.exists(ml_folder):
                os.makedirs(ml_folder)
                print(f"Created folder: {ml_folder}")
            
            base_path = os.path.join(ml_folder, model_name)
            
            joblib.dump(self.tfidf_vectorizer, f"{base_path}_tfidf_vectorizer.pkl")
            joblib.dump(self.job_data, f"{base_path}_job_data.pkl")
            joblib.dump(self.job_vectors, f"{base_path}_job_vectors.pkl")
            
            model_components = {
                'stemmer': self.stemmer,
                'stop_words': self.stop_words
            }
            joblib.dump(model_components, f"{base_path}_components.pkl")
            
            if self.model is not None:
                self.model.save(f"{base_path}_neural_model.h5")
            
            print(f"Model saved successfully to {ml_folder}/{model_name}")
            print(f"Files saved:")
            print(f"  - {base_path}_tfidf_vectorizer.pkl")
            print(f"  - {base_path}_job_data.pkl")
            print(f"  - {base_path}_job_vectors.pkl")
            print(f"  - {base_path}_components.pkl")
            if self.model is not None:
                print(f"  - {base_path}_neural_model.h5")
            
            return True
            
        except Exception as e:
            print(f"Error saving model: {e}")
            return False
    
    def load_model(self, model_name):
        """
        Load model dari folder ml/models
        """
        try:
            ml_folder = os.path.join("models")
            base_path = os.path.join(ml_folder, model_name)
            
            required_files = [
                f"{base_path}_tfidf_vectorizer.pkl",
                f"{base_path}_job_data.pkl", 
                f"{base_path}_job_vectors.pkl",
                f"{base_path}_components.pkl"
            ]
            
            for file_path in required_files:
                if not os.path.exists(file_path):
                    print(f"Error: Required file not found: {file_path}")
                    return False
            
            self.tfidf_vectorizer = joblib.load(f"{base_path}_tfidf_vectorizer.pkl")
            self.job_data = joblib.load(f"{base_path}_job_data.pkl")
            self.job_vectors = joblib.load(f"{base_path}_job_vectors.pkl")
            
            components = joblib.load(f"{base_path}_components.pkl")
            self.stemmer = components['stemmer']
            self.stop_words = components['stop_words']
            
            neural_model_path = f"{base_path}_neural_model.h5"
            if os.path.exists(neural_model_path):
                try:
                    self.model = tf.keras.models.load_model(neural_model_path)
                    print("Neural model loaded successfully")
                except Exception as e:
                    print(f"Warning: Could not load neural model: {e}")
                    self.model = None
            else:
                print("Neural model file not found, skipping...")
                self.model = None
            
            print(f"Model loaded successfully from {ml_folder}/{model_name}")
            return True
            
        except Exception as e:
            print(f"Error loading model: {e}")
            return False

def main():
    matcher = CVJobMatcher()
    
    print("Loading job dataset...")
    if not matcher.load_job_dataset("dataset/jobs_cleaned.csv"):
        print("Failed to load dataset")
        return
    
    print("Building job vectors...")
    if not matcher.build_job_vectors():
        print("Failed to build vectors")
        return
    
    print("Creating neural model...")
    matcher.create_neural_model()
    
    print("\nTesting with sample CV...")
    
    cv_text = matcher.extract_text_from_pdf("CV.pdf")
    matches = matcher.find_matching_jobs(cv_text, top_k=5)
    
    print(f"\nFound {len(matches)} matching jobs:")
    for i, match in enumerate(matches, 1):
        print(f"\n{i}. {match.get('Title', 'N/A')} at {match.get('Company', 'N/A')}")
        print(f"   Location: {match.get('Location', 'N/A')}")
        print(f"   Country: {match.get('Country', 'N/A')}")
        print(f"   Similarity Score: {match.get('similarity_score', 0.0):.4f}")
        print(f"   Description: {match.get('Job Description', 'N/A')[:100]}...")
        print(f"   Link: {match.get('Link', 'N/A')}")
    
    print("\nSaving model...")
    if matcher.save_model("cv_job_matcher_model"):
        print("Model saved successfully!")
    
    print("\nTesting model loading...")
    new_matcher = CVJobMatcher()
    if new_matcher.load_model("cv_job_matcher_model"):
        print("Model loaded successfully!")
        
        test_matches = new_matcher.find_matching_jobs(cv_text, top_k=3)
        print(f"Test with loaded model: {len(test_matches)} matches found")

if __name__ == "__main__":
    main()