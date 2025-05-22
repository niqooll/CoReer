// src/script/views/landing-view.js
import historyImg from '../../public/icons/history.png'; 
export function renderLanding() {
  return `
    <section class="landing-section py-5 mb-5 min-vh-100 d-flex align-items-center">
      <div class="container">
        <div class="row align-items-center">
          <!-- Kiri: teks dan tombol -->
          <div class="col-lg-6 mb-4 mb-lg-0">
            <h1 class="display-5 fw-bold">CV Analyze: Evaluate and Improve Your CV</h1>
            <p class="lead">
              Increase your chances of landing your dream job with our CV Analyze tool. Upload your CV, get a personalized score, and receive tailored suggestions to enhance your profile. Based on your CV score, discover relevant job opportunities that match your skills and experience.
            </p>
            <button id="btn-check-cv" class="btn btn-primary btn-lg">Check ur CV now</button>
          </div>

          <!-- Kanan: gambar preview -->
          <div class="col-lg-6 text-center">
            <img src="${historyImg}" alt="Preview of CV analysis result" class="img-fluid rounded shadow" />
          </div>
        </div>
      </div>
    </section>
    
    <section class="about-section py-5 min-vh-100 bg-light d-flex align-items-center">
      <div class="container">
        <div class="row align-items-center">
          <!-- Kiri: gambar about -->
          <div class="col-lg-6 text-center mb-4 mb-lg-0">
            <img src="${historyImg}" alt="About CoReer App" class="img-fluid rounded shadow" />
          </div>

          <!-- Kanan: deskripsi about -->
          <div class="col-lg-6">
            <h2 class="fw-bold">About CoReer</h2>
            <p class="lead">
              CoReer is your personal career companion, designed to help you grow professionally. Whether you're a student or a seasoned job-seeker, CoReer offers tailored tools to analyze your CV, track your job applications, and receive career insights — all in one place.
            </p>
          </div>
        </div>
      </div>
    </section>
  `;
}