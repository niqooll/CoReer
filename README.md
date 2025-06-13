# 🚀 CoReer - AI-Powered CV Job Matching System

**CoReer** adalah platform cerdas yang menghubungkan pencari kerja dengan lowongan pekerjaan yang tepat menggunakan kekuatan **Machine Learning** dan **AI** 🤖. Sistem ini menganalisis CV secara otomatis dan memberikan rekomendasi pekerjaan yang paling sesuai berdasarkan keahlian, pengalaman, dan preferensi kandidat.

---

## ✨ Fitur Unggulan

- 📄 **Analisis CV Otomatis**: Upload CV dalam format PDF dan dapatkan analisis mendalam
- 🎯 **Pencocokan Cerdas**: Algoritma hybrid menggunakan Cosine Similarity + Neural Network
- 📊 **Dashboard Analytics**: Visualisasi hasil analisis dan rekomendasi pekerjaan
- 🔐 **Autentikasi JWT**: Sistem keamanan dengan JSON Web Tokens
- 📈 **Riwayat Analisis**: Simpan dan kelola hasil analisis sebelumnya
- 👤 **Manajemen Profil**: Update profil dan preferensi pekerjaan
- 🔌 **RESTful API**: Arsitektur yang scalable dan mudah dikembangkan

---

## 🛠️ Tech Stack

### 🎨 Frontend

| Teknologi              | Badge                                                                                                  | Deskripsi                                                              |
| ---------------------- | ------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------- |
| **Vanilla JavaScript** | ![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E.svg?logo=javascript&logoColor=black) | Membangun UI interaktif dan responsif tanpa framework berat            |
| **Webpack**            | ![Webpack](https://img.shields.io/badge/Webpack-5.x-8DD6F9.svg?logo=webpack&logoColor=black)           | Mengelola dan membundel modul JavaScript serta aset frontend lainnya   |
| **Bootstrap**          | ![Bootstrap](https://img.shields.io/badge/Bootstrap-5.x-7952B3.svg?logo=bootstrap&logoColor=white)     | Framework CSS untuk mempercepat styling dan mendukung desain responsif |

### 🔧 Backend

| Teknologi   | Badge                                                                                                 | Deskripsi                                                                                 |
| ----------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| **Node.js** | ![Node.js](https://img.shields.io/badge/Node.js-18+-339933.svg?logo=node.js&logoColor=white)          | Runtime environment untuk menjalankan JavaScript di sisi server                           |
| **Hapi.js** | ![Hapi.js](https://img.shields.io/badge/Hapi.js-21+-FF6B35.svg?logo=hapi&logoColor=white)             | Framework backend yang kuat untuk membuat RESTful API, menangani autentikasi, dan routing |
| **Axios**   | ![Axios](https://img.shields.io/badge/Axios-1.x-5A29E4.svg?logo=axios&logoColor=white)                | Klien HTTP berbasis Promise untuk komunikasi antar layanan, terutama ke ML Service        |
| **JWT**     | ![JWT](https://img.shields.io/badge/JWT-Authentication-000000.svg?logo=jsonwebtokens&logoColor=white) | Token-based authentication                                                                |

### 🤖 Machine Learning Service

| Teknologi        | Badge                                                                                                         | Deskripsi                                                                    |
| ---------------- | ------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| **Python**       | ![Python](https://img.shields.io/badge/Python-3.9+-3776AB.svg?logo=python&logoColor=white)                    | Bahasa pemrograman utama untuk logika Machine Learning dan integrasi backend |
| **Flask**        | ![Flask](https://img.shields.io/badge/Flask-2.x-000000.svg?logo=flask&logoColor=white)                        | Microframework Python untuk membuat REST API ringan yang menyajikan model ML |
| **TensorFlow**   | ![TensorFlow](https://img.shields.io/badge/TensorFlow-2.x-FF6F00.svg?logo=tensorflow&logoColor=white)         | Library utama untuk pemodelan dan inferensi CV parsing & job matching        |
| **scikit-learn** | ![Scikit-learn](https://img.shields.io/badge/scikit--learn-1.0+-F7931E.svg?logo=scikit-learn&logoColor=white) | Untuk preprocessing data, klasifikasi, dan tugas ML tradisional lainnya      |
| **pdfminer.six** | ![PDF](https://img.shields.io/badge/pdfminer.six-20231228-red.svg)                                            | Untuk mengekstrak teks dari file CV berformat PDF                            |
| **Pandas**       | ![Pandas](https://img.shields.io/badge/Pandas-2.x-150458.svg?logo=pandas&logoColor=white)                     | Data manipulation dan analysis                                               |
| **NumPy**        | ![NumPy](https://img.shields.io/badge/NumPy-1.24+-013243.svg?logo=numpy&logoColor=white)                      | Scientific computing                                                         |
| **NLTK**         | ![NLTK](https://img.shields.io/badge/NLTK-3.8+-green.svg)                                                     | Natural Language Processing toolkit                                          |

---

## 📂 Struktur Proyek

```
CoReer/
├── 📦 backend/                          # 🌐 Hapi.js API Server
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js                    # 🔐 Database configuration
│   │   ├── controllers/                 # 🧠 Business logic controllers
│   │   │   ├── analyzeController.js     # 📊 CV analysis endpoints
│   │   │   ├── authController.js        # 🔐 Authentication logic
│   │   │   └── historyController.js     # 📜 Analysis history
│   │   ├── middlewares/                 # 🛡️ Custom middlewares
│   │   │   └── authMiddleware.js        # 🔒 JWT authentication
│   │   ├── models/                      # 📝 Database models
│   │   │   ├── AnalysisHistory.js       # 📊 Analysis history schema
│   │   │   └── userModel.js             # 👤 User data schema
│   │   ├── routes/                      # 🛣️ API route definitions
│   │   │   ├── analyzeRoutes.js         # 📊 Analysis endpoints
│   │   │   ├── authRoutes.js            # 🔐 Auth endpoints
│   │   │   ├── historyRoutes.js         # 📜 History endpoints
│   │   │   ├── index.js                 # 🎯 Route aggregator
│   │   │   └── profileRoutes.js         # 👤 Profile management
│   │   ├── utils/                       # 🛠️ Utility functions
│   │   │   └── dummyModel.js            # 🎭 Mock data helpers
│   │   └── validations/                 # ✅ Input validation
│   │       └── authValidation.js        # 🔍 Auth input validation
│   ├── server.js                        # 🚀 Main server entry point
│   ├── package.json                     # 📦 Dependencies & scripts
│   └── .env                             # ⚙️ Environment variables
│
├── 🖥️ frontend/                         # 💻 Vanilla JS SPA
│   ├── src/
│   │   ├── public/                      # 🖼️ Static assets
│   │   │   ├── icons/                   # 🎨 Application icons
│   │   │   └── image/                   # 🖼️ Images and graphics
│   │   ├── script/
│   │   │   ├── models/                  # 🔗 API communication layer
│   │   │   │   ├── auth-model.js        # 🔐 Authentication API calls
│   │   │   │   ├── history-model.js     # 📜 History API calls
│   │   │   │   ├── predict-model.js     # 🤖 ML prediction API calls
│   │   │   │   └── user-model.js        # 👤 User management API calls
│   │   │   ├── presenters/              # 🎬 Presentation logic
│   │   │   │   ├── edit-profile-presenter.js    # ✏️ Profile editing
│   │   │   │   ├── faq-presenter.js             # ❓ FAQ page logic
│   │   │   │   ├── history-presenter.js         # 📊 History display
│   │   │   │   ├── landing-presenter.js         # 🏠 Landing page
│   │   │   │   ├── login-presenter.js           # 🔑 Login logic
│   │   │   │   ├── main-presenter.js            # 🎯 Main dashboard
│   │   │   │   └── register-presenter.js        # 📝 Registration
│   │   │   ├── utils/                   # 🛠️ Helper utilities
│   │   │   │   ├── form-validation.js   # ✅ Client-side validation
│   │   │   │   └── index.js             # 🔧 Utility aggregator
│   │   │   └── views/                   # 🖼️ UI components & templates
│   │   │       ├── edit-profile-view.js # ✏️ Profile edit UI
│   │   │       ├── faq-view.js          # ❓ FAQ display
│   │   │       ├── history-view.js      # 📊 History visualization
│   │   │       ├── landing-view.js      # 🏠 Landing page UI
│   │   │       ├── login-view.js        # 🔑 Login form
│   │   │       ├── main-view.js         # 🎯 Dashboard UI
│   │   │       └── register-view.js     # 📝 Registration form
│   │   └── styles/                      # 🎨 Custom styling
│   │       └── styles.css               # 💅 Main stylesheet
│   ├── app.js                           # 🚦 Application entry point
│   ├── config.js                        # ⚙️ Frontend configuration
│   ├── index.js                         # 🎯 Main application bootstrap
│   ├── index.html                       # 📄 HTML template
│   ├── package.json                     # 📦 Frontend dependencies
│   ├── webpack.common.js                # ⚙️ Webpack base config
│   ├── webpack.dev.js                   # 🔧 Development config
│   └── webpack.prod.js                  # 🏗️ Production config
│
├── 🤖 ml/                               # 🧠 Machine Learning Service
│   ├── dataset/                         # 📊 Training & test datasets
│   │   ├── jobs_cleaned.csv             # ✨ Preprocessed job data
│   │   ├── jobs_dataset_LENGKAP.csv     # 📚 Complete job dataset
│   │   └── jobs_dataset.csv             # 🔢 Raw job dataset
│   ├── models/                          # 💾 Trained ML models
│   │   ├── cv_job_matcher_model_components.pkl    # 🧩 Model components
│   │   ├── cv_job_matcher_model_job_data.pkl      # 💼 Job data embeddings
│   │   ├── cv_job_matcher_model_job_vectors.pkl   # 🎯 Job feature vectors
│   │   ├── cv_job_matcher_model_neural_model.h5   # 🧠 Neural network model
│   │   └── cv_job_matcher_model_tfidf_vectorizer.pkl # 📝 TF-IDF vectorizer
│   ├── cleaning_jobs.ipynb              # 🧹 Data cleaning notebook
│   ├── CV.pdf                           # 📄 Sample CV for testing
│   ├── extract_jobs.ipynb               # 📥 Data extraction notebook
│   ├── inference.py                     # 🔮 Model inference script
│   ├── main.py                          # 🏃 Training pipeline
│   ├── ml_service.py                    # 🌐 Flask API service
│   └── requirements.txt                 # 📦 Python dependencies
│
├── .gitignore                           # 🚫 Git ignore rules
└── README.md                            # 📖 Project documentation
```

---

## 🚀 Panduan Instalasi & Replikasi

### Prasyarat 📋

- **Node.js** v18+ ([Download](https://nodejs.org/))
- **Python** v3.9+ ([Download](https://python.org/))
- **Git** ([Download](https://git-scm.com/))
- **npm** (included with Node.js)
- **pip** (included with Python)

### 🔄 Clone Repository

```bash
git clone https://github.com/your-username/coreer.git
cd coreer
```

---

### 1️⃣ 🤖 Setup Machine Learning Service

**Langkah ini WAJIB dilakukan pertama kali!**

```bash
# Navigate to ML directory
cd ml

# Create virtual environment (recommended)
python -m venv venv

# Activate virtual environment
# Windows
venv\Scripts\activate
# macOS/Linux
source venv/bin/activate

# Install Python dependencies
pip install -r requirements.txt
```

#### 🎯 Train Model

```bash
# Train and save ML models
python main.py
```

> ⚠️ **Penting**: Pastikan training berhasil sebelum melanjutkan!

#### 🌐 Start ML API Service

```bash
# Start Flask ML service (port 5000)
python ml_service.py
```

✅ **ML Service berjalan di**: `http://localhost:5000`

---

### 2️⃣ 🔧 Setup Backend API

**Buka terminal baru:**

```bash
cd backend

# Install Node.js dependencies
npm install

# Copy environment configuration
cp .env.example .env

# Edit .env file with your configurations:
# - PORT=3000
# - JWT_SECRET=your-secret-key
# - ML_SERVICE_URL=http://localhost:5000
```

#### 🚀 Start Backend Server

```bash
# Start Hapi.js server
npm start

# or for development with auto-reload
npm run dev
```

✅ **Backend API berjalan di**: `http://localhost:3000`

---

### 3️⃣ 🎨 Setup Frontend

**Buka terminal baru:**

```bash
cd frontend

# Install frontend dependencies
npm install
```

#### 🌐 Start Development Server

```bash
# Start webpack dev server
npm run start:dev
```

✅ **Frontend berjalan di**: `http://localhost:8080`

---

## 🔧 Langkah-Langkah Replikasi Detail

### A. Persiapan Environment

1. **Clone repository** dari GitHub
2. **Pastikan semua prasyarat terinstall** (Node.js, Python, Git)
3. **Buat virtual environment** untuk Python dependencies
4. **Install dependencies** untuk setiap layer (ML, Backend, Frontend)

### B. Konfigurasi ML Service

1. **Train model** dengan menjalankan `python main.py`
2. **Verifikasi model files** tersimpan di folder `models/`
3. **Test inference** dengan sample CV
4. **Start Flask service** dan test endpoint

### C. Konfigurasi Backend

1. **Setup environment variables** di file `.env`
2. **Konfigurasi koneksi** ke ML service
3. **Test API endpoints** dengan tools seperti Postman
4. **Verifikasi JWT authentication** berfungsi

### D. Konfigurasi Frontend

1. **Build webpack configuration** untuk development/production
2. **Test koneksi** ke Backend API
3. **Verifikasi file upload** dan UI components
4. **Test end-to-end flow** dari login hingga CV analysis

### E. Testing & Validation

1. **Unit testing** untuk setiap component
2. **Integration testing** antar services
3. **End-to-end testing** complete user flow
4. **Performance testing** untuk handling multiple requests

---

## 🧪 Testing & Usage

### 📄 Test CV Analysis

1. Buka browser ke `http://localhost:8080`
2. Register akun baru atau login
3. Upload CV dalam format PDF
4. Lihat hasil analisis dan rekomendasi pekerjaan

### 🔌 Test API Endpoints

```bash
# Health check ML service
curl http://localhost:5000/health

# Health check backend
curl http://localhost:3000/health

# Test CV analysis (with auth token)
curl -X POST \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: multipart/form-data" \
  -F "cv=@sample_cv.pdf" \
  http://localhost:3000/api/analyze
```

---

## 🤝 Contributing

1. Fork repository ini
2. Buat feature branch (`git checkout -b feature/amazing-feature`)
3. Commit perubahan (`git commit -m 'Add amazing feature'`)
4. Push ke branch (`git push origin feature/amazing-feature`)
5. Buat Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 👥 Team

- **Frontend Developer**: User interface & user experience development
- **Backend Developer**: API development & server-side logic
- **Machine Learning Engineer**: Model development, training & ML service

---

## 📞 Support

Jika mengalami kendala:

- 🐛 **Bug Reports**: [GitHub Issues](https://github.com/niqooll/CoReer/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/niqooll/CoReer/discussions)
- 📧 **Email**: support@coreer.com

---

Made with ❤️ by the CoReer Team
