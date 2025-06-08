// src/script/views/landing-view.js
import cvAnalyzeImg from '../../public/icons/history.png'; // Ganti dengan gambar preview analisis CV
import aboutImg from '../../public/icons/history.png'; // Ganti dengan ilustrasi tentang aplikasi
import featuresImg from '../../public/icons/history.png'; // Ganti dengan gambar showcase fitur

export function renderLanding() {
  return `
    <section class="landing-section py-5 mb-5 min-vh-100 d-flex align-items-center position-relative overflow-hidden landing-gradient-bg">
        <div class="landing-blob-bg blob-one"></div>
        <div class="landing-blob-bg blob-two"></div>
      <div class="container position-relative z-index-1">
        <div class="row align-items-center">
          <div class="col-lg-6 mb-4 mb-lg-0 animate-fade-in">
            <h1 class="display-5 fw-bold text-dark-blue">CV Analyze: Evaluate and Improve Your CV</h1>
            <p class="lead text-muted animate-fade-in delay-1">
              Increase your chances of landing your dream job with our **CV Analyze tool**. Upload your CV, get a personalized score, and receive tailored suggestions to enhance your profile. Based on your CV score, discover relevant job opportunities that match your skills and experience.
            </p>
            <div class="d-flex gap-3 mt-4 animate-fade-in delay-2">
              <button id="btn-check-cv" class="btn btn-primary btn-lg custom-btn-landing">Check your CV now</button>
              <button id="btn-learn-more" class="btn btn-outline-secondary btn-lg custom-btn-landing-outline">Learn More</button>
            </div>
          </div>

          <div class="col-lg-6 text-center animate-slide-in-right delay-2">
            <img src="${cvAnalyzeImg}" alt="Preview of CV analysis result" class="img-fluid rounded-4 shadow-lg border border-2 custom-image-border" />
          </div>
        </div>
      </div>
    </section>

    <section class="features-section py-5 min-vh-100 d-flex align-items-center bg-brand-secondary"> <div class="container position-relative z-index-1">
            <h2 class="text-center fw-bold mb-5 animate-fade-in text-dark-blue">What CoReer Offers</h2>
            <div class="row text-center">
                <div class="col-md-4 mb-4 animate-slide-up delay-1">
                    <div class="card h-100 shadow-sm border-0 features-card">
                        <div class="card-body">
                            <i class="bi bi-file-earmark-bar-graph display-4 mb-3 text-brand-primary"></i>
                            <h5 class="card-title fw-bold">Smart CV Analysis</h5>
                            <p class="card-text text-muted">Get an instant score and AI-driven feedback on your CV to highlight strengths and areas for improvement.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-4 animate-slide-up delay-2">
                    <div class="card h-100 shadow-sm border-0 features-card">
                        <div class="card-body">
                            <i class="bi bi-briefcase display-4 mb-3 text-brand-primary"></i>
                            <h5 class="card-title fw-bold">Tailored Job Matching</h5>
                            <p class="card-text text-muted">Discover job opportunities that perfectly align with your skills and CV profile.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-4 animate-slide-up delay-3">
                    <div class="card h-100 shadow-sm border-0 features-card">
                        <div class="card-body">
                            <i class="bi bi-person-lines-fill display-4 mb-3 text-brand-primary"></i>
                            <h5 class="card-title fw-bold">Personalized Insights</h5>
                            <p class="card-text text-muted">Receive actionable tips and resources to further develop your career.</p>
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
            <h2 class="fw-bold text-dark-blue">About CoReer</h2>
            <p class="lead text-muted">
              CoReer is your personal career companion, designed to help you grow professionally. Whether you're a student or a seasoned job-seeker, CoReer offers tailored tools to analyze your CV, track your job applications, and receive career insights — all in one place. Our mission is to empower individuals to achieve their career aspirations through intelligent analysis and personalized guidance.
            </p>
          </div>

          <div class="col-lg-6 order-lg-1 text-center animate-slide-in-left delay-5">
            <img src="${aboutImg}" alt="About CoReer App" class="img-fluid rounded-4 shadow-lg border border-2 custom-image-border" />
          </div>
        </div>
      </div>
    </section>
  `;
}