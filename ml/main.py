"""
Skrip Utama untuk Proyek CoReer (CV-Job Matcher)

Tujuan Utama:
-------------
Skrip ini berfungsi sebagai pusat untuk melatih, menguji, dan menyimpan model pencocokan
lowongan pekerjaan dengan CV. Skrip ini berisi kelas `CVJobMatcher` yang mengelola
seluruh alur kerja machine learning, mulai dari pemrosesan data hingga penyimpanan model.

Alur Kerja yang Dijalankan:
---------------------------
1.  Inisialisasi: Menyiapkan semua komponen yang diperlukan seperti vectorizer dan stemmer.
2.  Pemuatan Data: Memuat dataset lowongan pekerjaan yang sudah dibersihkan.
3.  Pemrosesan Teks: Menggabungkan dan membersihkan kolom teks dari dataset.
4.  Vectorisasi: Mengubah data teks menjadi representasi numerik (vektor) menggunakan TF-IDF.
5.  Pembuatan Model: Membangun arsitektur model Neural Network dengan TensorFlow/Keras.
6.  Pencocokan (Inferensi): Menggunakan metode hybrid (Cosine Similarity + Model NN) untuk
    mencari pekerjaan yang paling relevan dengan CV yang diberikan.
7.  Penyimpanan & Pemuatan: Menyimpan semua artefak model yang terlatih (vectorizer, data, model NN)
    dan menyediakan fungsi untuk memuatnya kembali.

Cara Menjalankan:
-----------------
Skrip ini dapat dijalankan langsung dari terminal (`python main.py`) untuk melakukan
seluruh proses dari awal hingga akhir dan menyimpan model ke dalam folder 'ml/models'.
"""

# ==============================================================================
# 1. Impor Library
# ==============================================================================
import pandas as pd
import numpy as np
import joblib
import os
import re
import math
import warnings

# Library untuk NLP dan Machine Learning
import nltk
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.neighbors import NearestNeighbors
from sklearn.model_selection import train_test_split
import tensorflow as tf
from tensorflow.keras.models import Model
from tensorflow.keras.layers import Input, Dense, Dropout, concatenate
from tensorflow.keras.callbacks import EarlyStopping
from tensorflow.keras.optimizers import Adam
from tensorflow.keras.regularizers import l2

# Library untuk Ekstraksi Teks dari PDF
import PyPDF2

# Mengabaikan warning yang tidak krusial
warnings.filterwarnings('ignore')

# Mengunduh resource NLTK yang diperlukan
try:
    nltk.download('punkt', quiet=True)
    nltk.download('stopwords', quiet=True)
except Exception as e:
    print(f"Peringatan: Gagal mengunduh paket NLTK. Error: {e}")
    
# Membuat path menjadi dinamis berdasarkan lokasi file
BASE_DIR = os.path.dirname(os.path.abspath(__file__))


# ==============================================================================
# 2. Fungsi Helper
# ==============================================================================

def replace_nan_with_none(data):
    """
    Mengganti nilai float NaN dengan None secara rekursif agar data JSON serializable.
    """
    if isinstance(data, dict):
        return {k: replace_nan_with_none(v) for k, v in data.items()}
    elif isinstance(data, list):
        return [replace_nan_with_none(elem) for elem in data]
    elif isinstance(data, float) and math.isnan(data):
        return None
    else:
        return data

# ==============================================================================
# 3. Kelas Utama Aplikasi
# ==============================================================================

class CVJobMatcher:
    """
    Kelas utama yang mengelola semua fungsionalitas untuk mencocokkan CV dan pekerjaan.
    """
    # ---------------------------
    # FUNGSI INISIALISASI
    # ---------------------------
    def __init__(self):
        """
        Inisialisasi semua komponen yang dibutuhkan oleh kelas.
        """
        self.tfidf_vectorizer = TfidfVectorizer(
            max_features=5000, ngram_range=(1, 2), stop_words='english', lowercase=True
        )
        self.stemmer = nltk.stem.PorterStemmer()
        self.stop_words = set(stopwords.words('english'))
        self.job_data = None
        self.job_vectors = None
        self.model = None

    # ---------------------------
    # FUNGSI EKSTRAKSI PDF
    # ---------------------------
    def extract_text_from_pdf(self, pdf_path):
        """
        Mengekstrak seluruh teks dari sebuah file PDF.
        """
        try:
            with open(pdf_path, 'rb') as file:
                pdf_reader = PyPDF2.PdfReader(file)
                text = "".join(page.extract_text() for page in pdf_reader.pages if page.extract_text())
                return text.strip()
        except Exception as e:
            print(f"Error saat mengekstrak PDF di '{pdf_path}': {e}")
            return ""
    
    # ---------------------------
    # FUNGSI PRA-PEMROSESAN TEKS
    # ---------------------------
    def preprocess_text(self, text):
        """
        Membersihkan dan menormalisasi teks mentah.
        """
        text = str(text).lower()
        text = re.sub(r'[^a-zA-Z\s]', '', text)
        tokens = nltk.tokenize.word_tokenize(text)
        
        processed_tokens = [
            self.stemmer.stem(word) for word in tokens 
            if word not in self.stop_words and len(word) > 2
        ]
        
        return ' '.join(processed_tokens)
    
    # ---------------------------
    # FUNGSI PEMUATAN DATASET
    # ---------------------------
    def load_job_dataset(self, dataset_path):
        """
        Memuat dataset lowongan pekerjaan dari file CSV dan memprosesnya.
        """
        try:
            full_path = os.path.join(BASE_DIR, dataset_path)
            self.job_data = pd.read_csv(full_path)
            
            text_columns = ['Title', 'Company', 'Job Description', 'Job Requirements', 'Location']
            for col in text_columns:
                self.job_data[col] = self.job_data[col].fillna('')
            
            self.job_data['combined_text'] = self.job_data[text_columns].apply(lambda row: ' '.join(row.values.astype(str)), axis=1)
            self.job_data['processed_text'] = self.job_data['combined_text'].apply(self.preprocess_text)
            
            print(f"Berhasil memuat dan memproses {len(self.job_data)} data pekerjaan dari {full_path}.")
            return True
        except Exception as e:
            print(f"Error saat memuat dataset: {e}")
            return False
    
    # ---------------------------
    # FUNGSI PEMBUATAN VEKTOR
    # ---------------------------
    def build_job_vectors(self):
        """
        Membangun matriks vektor TF-IDF dari data pekerjaan.
        """
        if self.job_data is None:
            print("Dataset belum dimuat.")
            return False
            
        job_texts = self.job_data['processed_text'].tolist()
        self.job_vectors = self.tfidf_vectorizer.fit_transform(job_texts)
        print(f"Vektor TF-IDF untuk pekerjaan berhasil dibuat dengan shape: {self.job_vectors.shape}")
        return True
            
    # ---------------------------
    # FUNGSI PEMBUATAN MODEL NN (DIPERBAIKI)
    # ---------------------------
    def create_neural_model(self):
        """
        Membuat arsitektur model NN yang lebih sederhana dengan regularisasi
        dan metrik evaluasi yang lebih baik.
        """
        input_shape = self.tfidf_vectorizer.max_features
        
        input_cv = Input(shape=(input_shape,), name='cv_input')
        input_job = Input(shape=(input_shape,), name='job_input')

        merged_vector = concatenate([input_cv, input_job])
        
        # Model lebih sederhana dan ditambah L2 regularizer untuk mencegah overfitting
        x = Dense(64, activation='relu', kernel_regularizer=l2(0.001))(merged_vector)
        x = Dropout(0.5)(x)
        x = Dense(32, activation='relu', kernel_regularizer=l2(0.001))(x)
        output = Dense(1, activation='sigmoid', name='similarity_score')(x)
        
        self.model = Model(inputs=[input_cv, input_job], outputs=output)
        optimizer = Adam(learning_rate=0.0001)
        
        # Menambahkan metrik AUC untuk evaluasi yang lebih baik
        self.model.compile(
            optimizer=optimizer, 
            loss='binary_crossentropy', 
            metrics=['accuracy', tf.keras.metrics.AUC(name='auc')]
        )
        
        print("Arsitektur model Neural Network (DIPERBAIKI) berhasil dibuat.")
        self.model.summary()

    # ---------------------------
    # FUNGSI TRAINING MODEL NN (DIPERBAIKI)
    # ---------------------------
    def train_neural_model(self, epochs=25, batch_size=32):
        """
        Melatih model NN dengan set validasi yang terpisah secara bersih
        dan data augmentasi sederhana untuk pasangan positif.
        """
        if self.job_vectors is None or self.model is None:
            print("Vektor pekerjaan atau model belum dibuat.")
            return

        job_vectors_dense = self.job_vectors.toarray()
        num_jobs = job_vectors_dense.shape[0]
        job_indices = np.arange(num_jobs)

        # Membagi indeks data untuk training dan validasi SEBELUM membuat pasangan
        train_indices, val_indices = train_test_split(job_indices, test_size=0.2, random_state=42)
        print(f"\nData dibagi menjadi {len(train_indices)} sampel training dan {len(val_indices)} sampel validasi.")

        # --- Fungsi Helper untuk Membuat Pasangan Data ---
        def create_pairs(indices):
            pairs_cv, pairs_job, labels = [], [], []
            
            # 1. Pasangan Positif (Mirip tapi tidak identik)
            # Augmentasi sederhana dengan menambahkan noise kecil
            # Ini memaksa model belajar fitur, bukan sekadar membandingkan identitas
            noise = np.random.normal(0, 0.01, job_vectors_dense.shape)
            augmented_vectors = job_vectors_dense + noise
            
            positive_cvs = job_vectors_dense[indices]
            positive_jobs = np.clip(augmented_vectors[indices], 0, 1) # clip agar nilai tetap valid
            
            pairs_cv.extend(positive_cvs)
            pairs_job.extend(positive_jobs)
            labels.extend(np.ones(len(indices)))

            # 2. Hard Negative Mining
            nbrs = NearestNeighbors(n_neighbors=5, algorithm='brute', metric='cosine').fit(self.job_vectors)
            _, neighbor_indices = nbrs.kneighbors(self.job_vectors)
            
            negative_cvs = job_vectors_dense[indices]
            # Ambil tetangga terdekat (bukan diri sendiri) sebagai hard negative
            hard_negative_jobs = job_vectors_dense[neighbor_indices[indices, 1]]

            pairs_cv.extend(negative_cvs)
            pairs_job.extend(hard_negative_jobs)
            labels.extend(np.zeros(len(indices)))
            
            return np.array(pairs_cv), np.array(pairs_job), np.array(labels)

        # --- Membuat Data Latih dan Validasi ---
        print("\nMembuat pasangan data untuk training...")
        train_cv_pairs, train_job_pairs, train_labels = create_pairs(train_indices)
        
        print("Membuat pasangan data untuk validasi...")
        val_cv_pairs, val_job_pairs, val_labels = create_pairs(val_indices)

        # Gabungkan input untuk model
        X_train = [train_cv_pairs, train_job_pairs]
        y_train = train_labels
        X_val = [val_cv_pairs, val_job_pairs]
        y_val = val_labels

        # --- Menambahkan Callback EarlyStopping ---
        early_stopping_callback = EarlyStopping(
            monitor='val_auc', # Monitor val_auc, bukan val_loss, karena lebih andal
            mode='max',       # Mode 'max' karena kita ingin AUC setinggi mungkin
            patience=5,       # Beri sedikit lebih banyak kesabaran
            restore_best_weights=True,
            verbose=1
        )

        print(f"\nMemulai training model dengan {len(y_train)} sampel training dan {len(y_val)} sampel validasi...")
        
        # Menggunakan validation_data, bukan validation_split
        self.model.fit(
            X_train, y_train,
            epochs=epochs,
            batch_size=batch_size,
            shuffle=True,
            validation_data=(X_val, y_val), # Ini cara yang benar untuk validasi
            verbose=1,
            callbacks=[early_stopping_callback] 
        )
        print("Training model selesai.")

    # ---------------------------
    # FUNGSI PENCARIAN/INFERENSI
    # ---------------------------
    def find_matching_jobs(self, cv_text, top_k=10):
        """
        Mencari pekerjaan yang cocok menggunakan metode hybrid (Cosine Similarity + NN Re-ranking).
        """
        if self.job_data is None or self.model is None:
            return []

        try:
            # --- TAHAP 1: FILTER CEPAT DENGAN COSINE SIMILARITY ---
            processed_cv = self.preprocess_text(cv_text)
            cv_vector = self.tfidf_vectorizer.transform([processed_cv])
            
            # Hitung kemiripan kosinus untuk semua pekerjaan
            cosine_scores = cosine_similarity(cv_vector, self.job_vectors).flatten()
            
            # Ambil 30 kandidat teratas (atau kurang jika total pekerjaan lebih sedikit)
            num_candidates = min(30, self.job_vectors.shape[0])
            candidate_indices = cosine_scores.argsort()[-num_candidates:][::-1]

            # --- TAHAP 2: RE-RANKING DENGAN MODEL TENSORFLOW ---
            cv_vector_dense = cv_vector.toarray()
            
            # Siapkan data kandidat untuk diprediksi oleh model TF
            candidate_job_vectors = self.job_vectors[candidate_indices].toarray()
            cv_vector_tiled = np.tile(cv_vector_dense, (num_candidates, 1))

            # Dapatkan skor prediksi dari model TensorFlow untuk para kandidat
            # model.predict akan menghasilkan skor antara 0 (tidak cocok) hingga 1 (sangat cocok)
            combined_input = [cv_vector_tiled, candidate_job_vectors]
            nn_scores = self.model.predict(combined_input, verbose=0).flatten()

            # Gabungkan kandidat dengan skor NN-nya
            ranked_candidates = sorted(zip(nn_scores, candidate_indices), key=lambda x: x[0], reverse=True)

            # --- MENYUSUN HASIL AKHIR ---
            results = []
            # Ambil top_k dari kandidat yang sudah di-ranking ulang
            for score, idx in ranked_candidates[:top_k]:
                job_info = self.job_data.iloc[idx].copy()
                job_info['similarity_score'] = score # Skor akhir berasal dari model TensorFlow
                results.append(job_info.to_dict())
                
            cleaned_results = replace_nan_with_none(results)
            return cleaned_results
            
        except Exception as e:
            print(f"Error finding matching jobs: {e}")
            return []
    
    # ---------------------------
    # FUNGSI PENYIMPANAN MODEL
    # ---------------------------
    def save_model(self, model_folder="models"):
        """
        Menyimpan semua komponen model ke dalam sub-folder yang ditentukan.
        Menggunakan format .keras untuk model NN.
        """
        try:
            models_dir = os.path.join(BASE_DIR, model_folder)
            if not os.path.exists(models_dir):
                os.makedirs(models_dir)
            
            base_path = os.path.join(models_dir, "cv_job_matcher_model")
            
            joblib.dump(self.tfidf_vectorizer, f"{base_path}_tfidf_vectorizer.pkl")
            joblib.dump(self.job_data, f"{base_path}_job_data.pkl")
            
            if self.model:
                # Menggunakan format .keras yang direkomendasikan
                self.model.save(f"{base_path}_neural_model.keras") 
            
            print(f"\nModel berhasil disimpan di folder: {models_dir}")
            return True
        except Exception as e:
            print(f"Error saat menyimpan model: {e}")
            return False
    
    # ---------------------------
    # FUNGSI PEMUATAN MODEL
    # ---------------------------
    def load_model(self, model_folder="models"):
        """
        Memuat semua komponen model dari sub-folder yang ditentukan.
        Memuat model NN dari format .keras.
        """
        try:
            models_dir = os.path.join(BASE_DIR, model_folder)
            base_path = os.path.join(models_dir, "cv_job_matcher_model")
            
            print(f"Mencoba memuat model dari: {models_dir}")
            
            self.tfidf_vectorizer = joblib.load(f"{base_path}_tfidf_vectorizer.pkl")
            self.job_data = joblib.load(f"{base_path}_job_data.pkl")
            
            # Memuat model dari format .keras, pastikan untuk memuat custom objects jika ada
            self.model = tf.keras.models.load_model(f"{base_path}_neural_model.keras")

            # Langkah penting: bangun ulang vektor dari data yang dimuat
            self.build_job_vectors()

            print("Semua komponen model berhasil dimuat.")
            return True
        except Exception as e:
            print(f"Error saat memuat model: {e}")
            return False

# ==============================================================================
# 4. Fungsi Eksekusi Utama (jika skrip dijalankan langsung)
# ==============================================================================

def main():
    """
    Fungsi utama untuk menjalankan alur kerja training dan penyimpanan model.
    """
    matcher = CVJobMatcher()
    
    print("--- 1. Memuat Dataset ---")
    if not matcher.load_job_dataset(os.path.join("dataset", "jobs_cleaned.csv")):
        return
    
    print("\n--- 2. Membangun Vektor Pekerjaan ---")
    if not matcher.build_job_vectors():
        return
    
    print("\n--- 3. Membuat & Melatih Model Neural Network ---")
    matcher.create_neural_model()
    # Anda bisa mengurangi epoch karena model belajar lebih cepat
    matcher.train_neural_model(epochs=15) 
    
    print("\n--- 4. Menyimpan Model dan Komponennya ---")
    if matcher.save_model("models"):
        print("\nProses training dan penyimpanan model selesai!")
    else:
        print("\nGagal menyimpan model.")

if __name__ == "__main__":
    main()