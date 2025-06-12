# CoReer - CV Job Matching System

CoReer adalah sistem pencocokan CV dengan lowongan kerja yang menggunakan Machine Learning untuk menganalisis CV dan merekomendasikan pekerjaan yang sesuai. Sistem ini terdiri dari backend API yang dibangun dengan Hapi.js dan layanan ML menggunakan Flask dengan TensorFlow.

## Fitur Utama

- **Analisis CV Otomatis**: Upload CV dalam format PDF untuk dianalisis
- **Pencocokan Pekerjaan**: Algoritma ML mencocokkan CV dengan database lowongan kerja
- **Riwayat Analisis**: Simpan dan kelola riwayat analisis CV
- **Autentikasi JWT**: Sistem login dan registrasi yang aman
- **Manajemen Profil**: Update profil dan ganti password
- **RESTful API**: API yang terstruktur dan mudah digunakan


## Teknologi yang Digunakan

CoReer dibangun menggunakan kombinasi teknologi modern di tiga lapisan utama: Frontend, Backend, dan Machine Learning Service.
  🎨 Frontend
  Teknologi	Deskripsi
  Vanilla JavaScript	Membangun UI interaktif dan responsif tanpa framework berat.
  Webpack	Mengelola dan membundel modul JavaScript serta aset frontend lainnya.
  Bootstrap	Framework CSS untuk mempercepat styling dan mendukung desain responsif.
  
  🔧 Backend
  Teknologi	Deskripsi
  Node.js	Runtime environment untuk menjalankan JavaScript di sisi server.
  Hapi.js	Framework backend yang kuat untuk membuat RESTful API, menangani autentikasi, dan routing.
  Axios	Klien HTTP berbasis Promise untuk komunikasi antar layanan, terutama ke ML Service.
  
  🤖 Machine Learning Service
  Teknologi	Deskripsi
  Python	Bahasa pemrograman utama untuk logika Machine Learning dan integrasi backend.
  Flask	Microframework Python untuk membuat REST API ringan yang menyajikan model ML.
  TensorFlow	Library utama untuk pemodelan dan inferensi CV parsing & job matching.
  scikit-learn	Untuk preprocessing data, klasifikasi, dan tugas ML tradisional lainnya.
  pdfminer.six	Untuk mengekstrak teks dari file CV berformat PDF.

## Struktur Proyek

Repositori CoReer ini terdiri dari tiga komponen utama: frontend, backend, dan ml. Setiap komponen memiliki lingkungan dan dependensinya sendiri.

CoReer/
├── 📦 backend/                  # 🌐 Hapi.js RESTful API server
│   ├── 📂 src/
│   │   ├── 📁 config/
│   │   │   └── 📄 db.js         # 🔐 Database
│   │   ├── 📁 controllers/      # 🧠 Logika bisnis & 🔗 integrasi DB + ML
│   │   ├── 📁 models/           # 🧠 🔗 integrasi DB + ML
│   │   └── 🧩 server.js         # 🚀 Inisialisasi server Hapi.js
│   ├── 📁 node_modules/
│   ├── 📄 package.json          # 📌 Dependensi & script backend
│   └── 🔐 .env                  # ⚙️ Variabel lingkungan (PORT, DB_URI, JWT, DLL)
│
├── 🖥️ frontend/                 # 💻 SPA berbasis Vanilla JavaScript
│   ├── 📄 index.html            # 📄 Entry point HTML utama
│   ├── 📁 src/
│   │   ├── 🖼️ assets/           # 🖌️ Gambar, ikon, logo
│   │   ├── 🧩 components/       # 🔄 Komponen UI: Navbar, Card, Modal, dll.
│   │   ├── 📄 pages/            # 📲 Halaman utama: Login, Dashboard, dll.
│   │   ├── 🧠 scripts/          # 🧩 Logika utama, interaksi API
│   │   └── 🎨 styles/           # 🎀 Styling CSS (Bootstrap & custom)
│   ├── 📁 node_modules/
│   ├── 📄 package.json          # 📌 Dependensi & script frontend
│   ├── ⚙️ webpack.config.js     # 🔧 Konfigurasi Webpack
│   └── 📜 .babelrc              # 🔄 Transpilasi ES6+ via Babel
│
├── 🤖 ml-service/               # 🧠 Layanan Machine Learning (Python + Flask)
│   ├── 🧩 app.py                # 🚀 API endpoint untuk parsing & rekomendasi CV
│   ├── 🧩 ml_service.py         # 🔌 Setup utama aplikasi Flask
│   ├── 📁 models/               # 📊 Model ML terlatih (TensorFlow, Sklearn)
│   ├── 📄 requirements.txt      # 📦 Dependensi Python (Flask, TensorFlow, dll.)
│   └── 📁 dataset/              # 🧪 Dataset contoh & data preprocessed
│
├── 🚫 .gitignore                # 📂 File & folder yang dikecualikan Git
├── 📄 LICENSE                   # 📜 Lisensi open-source
└── 📘 README.md                 # 📝 Dokumentasi proyek (file ini!)
