"""
Proses Inferensi (Pencocokan)

Tujuan Utama:
-------------
Skrip ini didedikasikan untuk menguji alur kerja inferensi model secara lokal.
Ia akan memuat model yang sudah dilatih, menerima sebuah file CV sebagai input,
dan menampilkan daftar pekerjaan yang paling cocok di terminal.

Cara Menjalankan:
-----------------
1. Pastikan sudah menjalankan `python main.py` untuk menghasilkan artefak model.
2. Tempatkan file CV (misalnya 'CV.pdf') di dalam folder 'ml/'.
3. Jalankan skrip ini dari terminal: `python inference.py`
"""

# ==============================================================================
# 1. Impor Library
# ==============================================================================
import os
import warnings
# Mengimpor kelas utama dari skrip main.py
from main import CVJobMatcher 

# Mengabaikan warning yang tidak relevan
warnings.filterwarnings('ignore')

# Mendeteksi path absolut ke direktori tempat skrip ini berada (folder 'ml')
BASE_DIR = os.path.dirname(os.path.abspath(__file__))


# ==============================================================================
# 2. Fungsi Utama untuk Inferensi
# ==============================================================================

# ---------------------------------
# FUNGSI RUN_INFERENCE
# ---------------------------------
def run_inference(cv_filename="CV.pdf"):
    """
    Fungsi utama untuk menjalankan seluruh alur proses inferensi pada satu file CV.

    Args:
        cv_filename (str): Nama file CV (PDF) yang berada di dalam folder 'ml'.
    """
    print("=" * 60)
    print(" ROZES - Job Matching Inference Engine ".center(60, '='))
    print("=" * 60)

    # --- Langkah 1: Inisialisasi CVJobMatcher ---
    print("\n[1/5] Menginisialisasi CV Job Matcher...")
    matcher = CVJobMatcher()
    print("[OK] Matcher berhasil diinisialisasi.")

    # --- Langkah 2: Memuat Model yang Sudah Dilatih ---
    print("\n[2/5] Memuat model yang telah dilatih...")
    # Nama folder tempat model disimpan oleh main.py
    model_folder = "models" 
    if not matcher.load_model(model_folder):
        print("\n[GAGAL] Pemuatan model gagal.")
        print(f"Pastikan folder 'ml/{model_folder}' dan isinya sudah ada.")
        print("Jalankan 'python main.py' terlebih dahulu untuk melatih dan menyimpan model.")
        return

    print("[OK] Model berhasil dimuat.")

    # --- Langkah 3: Memuat dan Memproses File CV ---
    print("\n[3/5] Memproses file CV...")
    cv_full_path = os.path.join(BASE_DIR, cv_filename)
    
    if not os.path.exists(cv_full_path):
        print(f"\n[GAGAL] File CV tidak ditemukan di '{cv_full_path}'.")
        print("Pastikan file CV berada di folder yang sama dengan skrip ini.")
        return
        
    cv_text = matcher.extract_text_from_pdf(cv_full_path)
    if not cv_text:
        print("\n[GAGAL] Tidak dapat mengekstrak teks dari file PDF.")
        return
        
    print(f"[OK] Teks dari '{cv_filename}' berhasil diekstrak.")

    # --- Langkah 4: Menjalankan Proses Pencocokan (Inferensi) ---
    print("\n[4/5] Menjalankan inferensi untuk mencari pekerjaan yang cocok...")
    # Mencari 5 pekerjaan teratas
    matching_jobs = matcher.find_matching_jobs(cv_text, top_k=5) 
    print("[OK] Proses inferensi selesai.")

    # --- Langkah 5: Menampilkan Hasil ---
    print("\n" + "=" * 60)
    print(" ✨ HASIL REKOMENDASI PEKERJAAN ✨ ".center(60, '-'))
    print("=" * 60)

    if not matching_jobs:
        print("\nTidak ada pekerjaan yang cocok ditemukan untuk CV ini.")
    else:
        print(f"\nMenampilkan {len(matching_jobs)} pekerjaan yang paling cocok untuk CV ini:\n")
        for i, job in enumerate(matching_jobs, 1):
            score = job.get('similarity_score', 0.0)
            print(f"  ({i}) Judul\t: {job.get('Title', 'N/A')}")
            print(f"      Perusahaan\t: {job.get('Company', 'N/A')}")
            print(f"      Lokasi\t: {job.get('Location', 'N/A')}")
            print(f"      SKOR KECOCOKAN : {score:.2%}")
            print(f"      Link\t: {job.get('Link', 'N/A')}\n")
            
    print("=" * 60)

# ==============================================================================
# 3. Titik Masuk Eksekusi
# ==============================================================================
if __name__ == "__main__":
    # Bisa mengganti nama file CV di sini jika perlu.
    # Pastikan file tersebut ada di dalam folder 'ml/'.
    run_inference(cv_filename="CV.pdf")
