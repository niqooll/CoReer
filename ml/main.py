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
warnings.filterwarnings('ignore')

# Download required NLTK data
try:
    nltk.download('punkt')
    nltk.download('stopwords')
    nltk.download('punkt_tab')
except:
    pass

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
        # Convert to lowercase
        text = text.lower()
        
        # Remove special characters and numbers (keep only letters and spaces)
        text = re.sub(r'[^a-zA-Z\s]', '', text)
        
        # Remove extra whitespaces
        text = re.sub(r'\s+', ' ', text)
        
        # Tokenize
        tokens = word_tokenize(text)
        
        # Remove stopwords and stem
        processed_tokens = []
        for token in tokens:
            if token not in self.stop_words and len(token) > 2:
                stemmed_token = self.stemmer.stem(token)
                processed_tokens.append(stemmed_token)
        
        return ' '.join(processed_tokens)
    
    def load_job_dataset(self, dataset_path):
        """
        Load dataset lowongan kerja
        Expected columns: ['Title', 'Company', 'Location', 'Country', 'Job Description', 'Job Requirements', 'Link', 'City', 'Region']
        """
        try:
            self.job_data = pd.read_csv(dataset_path)
            
            # Pastikan kolom ada dengan nama yang benar
            expected_columns = ['Title', 'Company', 'Location', 'Country', 'Job Description', 'Job Requirements', 'Link', 'City', 'Region']
            missing_columns = [col for col in expected_columns if col not in self.job_data.columns]
            
            if missing_columns:
                print(f"Warning: Missing columns: {missing_columns}")
                print(f"Available columns: {list(self.job_data.columns)}")
            
            # Gabungkan semua informasi job menjadi satu teks untuk matching
            self.job_data['combined_text'] = (
                self.job_data['Title'].fillna('') + ' ' +
                self.job_data['Company'].fillna('') + ' ' +
                self.job_data['Job Description'].fillna('') + ' ' +
                self.job_data['Job Requirements'].fillna('') + ' ' +
                self.job_data['Location'].fillna('') + ' ' +
                self.job_data['City'].fillna('') + ' ' +
                self.job_data['Region'].fillna('')
            )
            
            # Preprocess job texts
            self.job_data['processed_text'] = self.job_data['combined_text'].apply(
                self.preprocess_text
            )
            
            print(f"Loaded {len(self.job_data)} job records")
            print(f"Dataset columns: {list(self.job_data.columns)}")
            return True
            
        except Exception as e:
            print(f"Error loading dataset: {e}")
            return False
    
    def build_job_vectors(self):
        """
        Build TF-IDF vectors untuk dataset lowongan kerja
        """
        if self.job_data is None:
            print("Please load job dataset first")
            return False
        
        try:
            # Fit TF-IDF vectorizer pada job texts
            job_texts = self.job_data['processed_text'].tolist()
            self.job_vectors = self.tfidf_vectorizer.fit_transform(job_texts)
            
            print(f"Built job vectors with shape: {self.job_vectors.shape}")
            return True
            
        except Exception as e:
            print(f"Error building job vectors: {e}")
            return False
    
    def create_neural_model(self):
        """
        Create neural network model untuk similarity scoring
        """
        # Input layer
        input_layer = Input(shape=(5000,))
        
        # Dense layers
        dense1 = Dense(512, activation='relu')(input_layer)
        dropout1 = Dropout(0.3)(dense1)
        
        dense2 = Dense(256, activation='relu')(dropout1)
        dropout2 = Dropout(0.3)(dense2)
        
        dense3 = Dense(128, activation='relu')(dropout2)
        dropout3 = Dropout(0.2)(dense3)
        
        # Output layer for similarity score
        output = Dense(1, activation='sigmoid')(dropout3)
        
        # Create model
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
            # Preprocess CV text
            processed_cv = self.preprocess_text(cv_text)
            
            # Transform CV text menggunakan TF-IDF vectorizer yang sama
            cv_vector = self.tfidf_vectorizer.transform([processed_cv])
            
            # Hitung cosine similarity
            similarities = cosine_similarity(cv_vector, self.job_vectors).flatten()
            
            # Get top K matching jobs
            top_indices = similarities.argsort()[-top_k:][::-1]
            
            # Prepare results
            results = []
            for idx in top_indices:
                job_info = self.job_data.iloc[idx].copy()
                job_info['similarity_score'] = similarities[idx]
                results.append(job_info.to_dict())
            
            return results
            
        except Exception as e:
            print(f"Error finding matching jobs: {e}")
            return []
    
    def save_model(self, model_name):
        """
        Simpan model dalam folder ml/
        """
        try:
            # Pastikan folder ml exists
            ml_folder = "ml"
            if not os.path.exists(ml_folder):
                os.makedirs(ml_folder)
                print(f"Created folder: {ml_folder}")
            
            # Define file paths dalam folder ml
            base_path = os.path.join(ml_folder, model_name)
            
            # Save TF-IDF vectorizer
            joblib.dump(self.tfidf_vectorizer, f"{base_path}_tfidf_vectorizer.pkl")
            
            # Save job data dan vectors
            joblib.dump(self.job_data, f"{base_path}_job_data.pkl")
            joblib.dump(self.job_vectors, f"{base_path}_job_vectors.pkl")
            
            # Save preprocessing components
            model_components = {
                'stemmer': self.stemmer,
                'stop_words': self.stop_words
            }
            joblib.dump(model_components, f"{base_path}_components.pkl")
            
            # Save neural model
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
        Load model dari folder ml/
        """
        try:
            # Define file paths dalam folder ml
            ml_folder = "ml"
            base_path = os.path.join(ml_folder, model_name)
            
            # Check if files exist
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
            
            # Load TF-IDF vectorizer
            self.tfidf_vectorizer = joblib.load(f"{base_path}_tfidf_vectorizer.pkl")
            
            # Load job data dan vectors
            self.job_data = joblib.load(f"{base_path}_job_data.pkl")
            self.job_vectors = joblib.load(f"{base_path}_job_vectors.pkl")
            
            # Load preprocessing components
            components = joblib.load(f"{base_path}_components.pkl")
            self.stemmer = components['stemmer']
            self.stop_words = components['stop_words']
            
            # Load neural model
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

# Contoh penggunaan
def main():
    # Initialize matcher
    matcher = CVJobMatcher()
    
    # Load job dataset
    print("Loading job dataset...")
    if not matcher.load_job_dataset("ml/dataset/jobs_cleaned.csv"):
        print("Failed to load dataset")
        return
    
    # Build job vectors
    print("Building job vectors...")
    if not matcher.build_job_vectors():
        print("Failed to build vectors")
        return
    
    # Create neural model
    print("Creating neural model...")
    matcher.create_neural_model()
    
    # Testing penggunaan dengan CV
    print("\nTesting with sample CV...")
    
    # Extract text from CV PDF
    cv_text = matcher.extract_text_from_pdf("CV.pdf")  #  path CV
    
    # Find matching jobs
    matches = matcher.find_matching_jobs(cv_text, top_k=5)
    
    print(f"\nFound {len(matches)} matching jobs:")
    for i, match in enumerate(matches, 1):
        print(f"\n{i}. {match['Title']} at {match['Company']}")
        print(f"   Location: {match['Location']}, {match['City']}, {match['Region']}")
        print(f"   Country: {match['Country']}")
        print(f"   Similarity Score: {match['similarity_score']:.4f}")
        print(f"   Description: {match['Job Description'][:100]}...")
        print(f"   Link: {match['Link']}")
    
    # Save model ke folder ml/
    print("\nSaving model...")
    if matcher.save_model("cv_job_matcher_model"):
        print("Model saved successfully!")
    
    # Test loading model
    print("\nTesting model loading...")
    new_matcher = CVJobMatcher()
    if new_matcher.load_model("cv_job_matcher_model"):
        print("Model loaded successfully!")
        
        # Test dengan loaded model
        test_matches = new_matcher.find_matching_jobs(cv_text, top_k=3)
        print(f"Test with loaded model: {len(test_matches)} matches found")

if __name__ == "__main__":
    main()