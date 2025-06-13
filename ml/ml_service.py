"""
Layanan API untuk Model Pencocokan CV (CoReer)

Tujuan Utama:
-------------
Skrip ini menggunakan Flask untuk membuat sebuah web server sederhana yang berfungsi sebagai
antarmuka (API) untuk model machine learning kita. Ini memungkinkan aplikasi lain
(seperti frontend) untuk mengirim file CV dan menerima daftar pekerjaan yang cocok sebagai
respons dalam format JSON.

Endpoint yang Tersedia:
-----------------------
- GET  /     : Menampilkan pesan status bahwa API sedang berjalan.
- POST /match: Menerima unggahan file PDF (CV), memprosesnya dengan model, dan
               mengembalikan daftar pekerjaan yang relevan.
"""

# ==============================================================================
# 1. Impor Library dan Modul
# ==============================================================================
import os
from flask import Flask, request, jsonify
from werkzeug.utils import secure_filename
from main import CVJobMatcher, replace_nan_with_none # Mengimpor kelas dan fungsi dari main.py

# ==============================================================================
# 2. Inisialisasi Aplikasi Flask dan Konfigurasi
# ==============================================================================
app = Flask(__name__)

# Mengatur folder untuk menyimpan file CV yang diunggah sementara
UPLOAD_FOLDER = 'uploads/'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# Memastikan folder untuk unggahan sudah ada, jika belum maka dibuat
if not os.path.exists(app.config['UPLOAD_FOLDER']):
    os.makedirs(app.config['UPLOAD_FOLDER'])
    print(f"Folder '{app.config['UPLOAD_FOLDER']}' berhasil dibuat.")


# ==============================================================================
# 3. Pemuatan Model (Singleton Pattern)
# ==============================================================================
# Model dimuat hanya sekali saat server pertama kali dijalankan.
# Ini adalah praktik terbaik untuk efisiensi agar tidak perlu memuat model
# berulang kali setiap ada permintaan (request) baru.

print("="*50)
print("--- MEMUAT MODEL MACHINE LEARNING ---")
matcher = CVJobMatcher()
model_folder_name = "models"  # Nama folder tempat model disimpan oleh main.py

if matcher.load_model(model_folder_name):
    print("--- MODEL BERHASIL DIMUAT ---")
else:
    print("\n[!!! KESALAHAN KRITIS !!!]")
    print(f"--- GAGAL MEMUAT MODEL DARI FOLDER 'ml/{model_folder_name}' ---")
    print("Pastikan telah menjalankan 'python main.py' untuk melatih dan menyimpan model terlebih dahulu.")
    # Jika model adalah komponen vital, bisa menghentikan server jika gagal dimuat.
    # exit()
print("="*50)


# ==============================================================================
# 4. Definisi Endpoint API
# ==============================================================================

# ---------------------------
# ENDPOINT: / (Index)
# ---------------------------
@app.route('/')
def index():
    """
    Endpoint root untuk mengecek status API.
    Mengembalikan pesan sederhana bahwa layanan sedang berjalan.
    """
    return jsonify({
        "status": "online",
        "message": "CoReer CV Matching API is running!",
        "documentation": "Kirim request POST dengan file PDF ke /match untuk mendapatkan rekomendasi."
    })

# ---------------------------
# ENDPOINT: /match (Pencocokan CV)
# ---------------------------
@app.route('/match', methods=['POST'])
def match_cv_endpoint():
    """
    Endpoint utama untuk menerima file CV (PDF), memprosesnya, dan 
    mengembalikan daftar pekerjaan yang cocok dalam format JSON.
    """
    # Langkah 1: Validasi Permintaan
    # Memastikan ada file yang dikirim dengan key 'cv_pdf'
    if 'cv_pdf' not in request.files:
        return jsonify({"status": "error", "message": "File 'cv_pdf' tidak ditemukan dalam permintaan."}), 400

    file = request.files['cv_pdf']

    # Memastikan nama file tidak kosong
    if file.filename == '':
        return jsonify({"status": "error", "message": "Tidak ada file yang dipilih."}), 400

    filepath = None
    if file:
        try:
            # Langkah 2: Simpan File CV Sementara
            # secure_filename memastikan nama file aman untuk disimpan di sistem.
            filename = secure_filename(file.filename)
            filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
            file.save(filepath)
            print(f"\n[INFO] Menerima dan memproses file: {filepath}")

            # Langkah 3: Ekstrak Teks dan Jalankan Inferensi
            cv_text = matcher.extract_text_from_pdf(filepath)
            if not cv_text:
                return jsonify({"status": "error", "message": "Gagal mengekstrak teks dari PDF. File mungkin rusak atau kosong."}), 500

            matching_jobs = matcher.find_matching_jobs(cv_text, top_k=10)
            
            # Membersihkan nilai NaN sebelum mengirim respons JSON
            cleaned_matching_jobs = replace_nan_with_none(matching_jobs)

            # Langkah 4: Kirim Hasil Sukses
            print(f"[SUCCESS] Menemukan {len(cleaned_matching_jobs)} pekerjaan yang cocok untuk {filename}.")
            return jsonify({
                "status": "success",
                "message": "Pekerjaan berhasil dicocokkan",
                "data": cleaned_matching_jobs
            })

        except Exception as e:
            # Penanganan jika terjadi error tak terduga
            print(f"[ERROR] Terjadi kesalahan internal: {e}")
            return jsonify({"status": "error", "message": f"Terjadi kesalahan internal: {e}"}), 500

        finally:
            # Langkah 5: Hapus File CV Sementara
            # Blok 'finally' akan selalu dijalankan, baik sukses maupun error.
            if filepath and os.path.exists(filepath):
                os.remove(filepath)
                print(f"[CLEANUP] File sementara dihapus: {filepath}")

    return jsonify({"status": "error", "message": "Terjadi kesalahan pada file yang diunggah."}), 400

# ==============================================================================
# 5. Menjalankan Server
# ==============================================================================
if __name__ == '__main__':
    # Menjalankan server Flask agar dapat diakses dari luar (0.0.0.0)
    app.run(host='0.0.0.0', port=5000, debug=True)
