import os
from flask import Flask, request, jsonify
from werkzeug.utils import secure_filename
from main import CVJobMatcher, replace_nan_with_none # Mengimpor kelas dan fungsi helper dari main.py

# Inisialisasi Aplikasi Flask
app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = 'uploads/' # Folder untuk menyimpan CV sementara

# Pastikan folder uploads ada
if not os.path.exists(app.config['UPLOAD_FOLDER']):
    os.makedirs(app.config['UPLOAD_FOLDER'])

# --- Inisialisasi Model ---
# Model dimuat hanya sekali saat server dimulai untuk efisiensi.
print("Memuat model pencocokan CV...")
matcher = CVJobMatcher()
# Ganti nama model jika Anda menyimpannya dengan nama lain
if matcher.load_model("cv_job_matcher_model"):
    print("Model berhasil dimuat!")
else:
    print("GAGAL memuat model. Pastikan file model ada di folder 'ml/'.")
    # Anda bisa memilih untuk menghentikan aplikasi jika model gagal dimuat
    # exit()

# --- Definisi Endpoint API ---
@app.route('/match', methods=['POST'])
def match_cv_endpoint():
    """
    Endpoint untuk menerima file CV (PDF), memprosesnya, dan mengembalikan
    pekerjaan yang cocok.
    """
    # 1. Validasi permintaan: Pastikan file ada dalam request
    if 'cv_pdf' not in request.files:
        return jsonify({"error": "File 'cv_pdf' tidak ditemukan dalam permintaan"}), 400

    file = request.files['cv_pdf']

    # Jika pengguna tidak memilih file, browser mungkin mengirim part kosong
    if file.filename == '':
        return jsonify({"error": "Tidak ada file yang dipilih"}), 400

    # 2. Proses File
    filepath = None # Inisialisasi filepath di luar try
    if file:
        filename = secure_filename(file.filename)
        filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(filepath)

        try:
            # 3. Ekstrak teks dan cari pekerjaan yang cocok
            print(f"Memproses file: {filepath}")
            cv_text = matcher.extract_text_from_pdf(filepath)

            if not cv_text:
                return jsonify({"error": "Gagal mengekstrak teks dari PDF"}), 500

            # Cari 10 pekerjaan teratas
            matching_jobs = matcher.find_matching_jobs(cv_text, top_k=10)

            # --- Perbaikan: Bersihkan NaN dari hasil sebelum dikirim ---
            cleaned_matching_jobs = replace_nan_with_none(matching_jobs)
            # --- Akhir Perbaikan ---

            # 4. Kirim hasil kembali sebagai JSON
            print(f"Menemukan {len(cleaned_matching_jobs)} pekerjaan yang cocok.")
            return jsonify({
                "status": "success",
                "message": "Pekerjaan berhasil dicocokkan",
                "data": cleaned_matching_jobs # Gunakan data yang sudah dibersihkan
            })

        except Exception as e:
            print(f"Terjadi error: {e}")
            return jsonify({"error": f"Terjadi kesalahan internal: {e}"}), 500

        finally:
            # 5. Hapus file sementara setelah diproses
            if filepath and os.path.exists(filepath): # Pastikan filepath sudah diinisialisasi
                os.remove(filepath)
                print(f"File sementara dihapus: {filepath}")

    return jsonify({"error": "File tidak valid"}), 400

@app.route('/')
def index():
    return {
        "message": "CoReer CV Matching API is running!",
        "available_endpoints": ["/match (POST)"]
    }

# Menjalankan server
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)