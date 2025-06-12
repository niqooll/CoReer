// src/script/views/landing-view.js
import cvAnalyzeImg from '../../public/icons/analisis.png'; // Ganti dengan gambar preview analisis CV
import aboutImg from '../../public/icons/log.png'; // Ganti dengan ilustrasi tentang aplikasi

export function renderLanding() {
  return `
    <section class="landing-section py-5 mb-5 min-vh-100 d-flex align-items-center position-relative overflow-hidden landing-gradient-bg">
        <div class="landing-blob-bg blob-one"></div>
        <div class="landing-blob-bg blob-two"></div>
      <div class="container position-relative z-index-1">
        <div class="row align-items-center">
          <div class="col-lg-6 mb-4 mb-lg-0 animate-fade-in">
            <h1 class="display-5 fw-bold text-dark-blue">CoReer: Evaluasi & Tingkatkan CV Anda</h1>
            <p class="lead text-muted animate-fade-in delay-1">
              Tingkatkan peluang Anda mendapatkan pekerjaan impian dengan alat Analisis CV CoReer. Unggah CV Anda, dapatkan skor personalisasi, dan terima saran yang disesuaikan untuk meningkatkan profil Anda. Berdasarkan skor CV Anda, temukan peluang kerja relevan yang cocok dengan keahlian dan pengalaman Anda.
            </p>
            <div class="d-flex gap-3 mt-4 animate-fade-in delay-2">
              <button id="btn-check-cv" class="btn btn-primary btn-lg custom-btn-landing">Coba Analisis CV Sekarang</button>
              <a href="#/FAQ" class="btn btn-outline-secondary btn-lg custom-btn-landing-outline text-decoration-none">Pelajari Lebih Lanjut</a>
            </div>
          </div>

          <div class="col-lg-6 text-center animate-slide-in-right delay-2">
            <img src="${cvAnalyzeImg}" alt="Pratinjau hasil analisis CV" class="img-fluid rounded-4 shadow-lg border border-2 custom-image-border" />
          </div>
        </div>
      </div>
    </section>

    <section class="features-section py-5 bg-brand-secondary">
      <div class="container position-relative z-index-1">
          <h2 class="text-center fw-bold mb-5 animate-fade-in text-dark-blue">Apa yang CoReer Tawarkan</h2>
          
          <!-- Improved Card Layout dengan Bootstrap dan Custom Classes -->
          <div class="row justify-content-center">
              <div class="col-xl-4 col-lg-6 col-md-8 col-sm-10 mb-4 d-flex justify-content-center animate-slide-up delay-1">
                  <div class="card h-100 shadow-sm border-0 features-card w-100">
                      <div class="card-body d-flex flex-column text-center">
                          <i class="bi bi-file-earmark-bar-graph display-4 mb-3 text-brand-primary"></i>
                          <h5 class="card-title fw-bold mb-3">Analisis CV Cerdas</h5>
                          <p class="card-text text-muted flex-grow-1 d-flex align-items-center justify-content-center">Dapatkan skor instan dan masukan berbasis AI pada CV Anda untuk menyoroti kekuatan dan area yang perlu ditingkatkan.</p>
                      </div>
                  </div>
              </div>
              
              <div class="col-xl-4 col-lg-6 col-md-8 col-sm-10 mb-4 d-flex justify-content-center animate-slide-up delay-2">
                  <div class="card h-100 shadow-sm border-0 features-card w-100">
                      <div class="card-body d-flex flex-column text-center">
                          <i class="bi bi-briefcase display-4 mb-3 text-brand-primary"></i>
                          <h5 class="card-title fw-bold mb-3">Pencocokan Pekerjaan yang Tepat</h5>
                          <p class="card-text text-muted flex-grow-1 d-flex align-items-center justify-content-center">Temukan peluang kerja yang sangat sesuai dengan keahlian dan profil CV Anda.</p>
                      </div>
                  </div>
              </div>
              
              <div class="col-xl-4 col-lg-6 col-md-8 col-sm-10 mb-4 d-flex justify-content-center animate-slide-up delay-3">
                  <div class="card h-100 shadow-sm border-0 features-card w-100">
                      <div class="card-body d-flex flex-column text-center">
                          <i class="bi bi-person-lines-fill display-4 mb-3 text-brand-primary"></i>
                          <h5 class="card-title fw-bold mb-3">Wawasan Personal</h5>
                          <p class="card-text text-muted flex-grow-1 d-flex align-items-center justify-content-center">Terima tips dan sumber daya yang dapat ditindaklanjuti untuk mengembangkan karier Anda lebih lanjut.</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </section>

    <hr class="my-5 custom-hr animate-fade-in delay-4">

    <section class="about-section py-5 min-vh-100 d-flex align-items-center position-relative overflow-hidden about-gradient-bg">
        <div class="about-bg-blob blob-three"></div>
        <div class="about-bg-blob blob-four"></div>
      <div class="container position-relative z-index-1">
        <div class="row align-items-center">
          <div class="col-lg-6 order-lg-2 mb-4 mb-lg-0 animate-fade-in delay-4">
            <h2 class="fw-bold text-dark-blue">Tentang CoReer</h2>
            <p class="lead text-muted">
              CoReer adalah pendamping karier pribadi Anda, dirancang untuk membantu Anda tumbuh secara profesional. Baik Anda seorang pelajar atau pencari kerja berpengalaman, CoReer menawarkan alat yang disesuaikan untuk menganalisis CV Anda, melacak lamaran kerja Anda, dan menerima wawasan karier — semuanya di satu tempat. Misi kami adalah memberdayakan individu untuk mencapai aspirasi karier mereka melalui analisis cerdas dan panduan personal.
            </p>
          </div>

          <div class="col-lg-6 order-lg-1 text-center animate-slide-in-left delay-5">
            <img src="${aboutImg}" alt="Tentang Aplikasi CoReer" class="img-fluid rounded-4 shadow-lg border border-2 custom-image-border" />
          </div>
        </div>
      </div>
    </section>
  `;
}