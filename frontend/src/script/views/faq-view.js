// src/script/views/FaqView.js

class FaqView {
  // Method untuk merender struktur HTML dari FAQ
  render(faqData) {
    return `
      <div class="container my-5 py-5">
        <h2 class="text-center mb-5 fw-bold text-dark-blue display-5 animate-slide-up">Frequently Asked Questions</h2>
        <div class="row justify-content-center">
          <div class="col-12 col-lg-10 col-xl-8">
            <div class="text-center mb-5 animate-fade-in delay-1">
              <p class="lead text-muted mb-4">Temukan jawaban untuk pertanyaan yang sering diajukan tentang CoReer</p>
              <div class="position-relative mx-auto" style="max-width: 500px;">
                <input
                  type="text"
                  id="faq-search"
                  class="form-control form-control-lg ps-5 rounded-pill shadow-sm"
                  placeholder="Cari pertanyaan..."
                >
                <i class="bi bi-search position-absolute top-50 start-0 translate-middle-y ms-3 text-muted fs-5"></i>
              </div>
            </div>

            <div id="faq-list-container" class="mb-5 animate-slide-up delay-2">
              ${this._generateFaqItems(faqData)}
            </div>

            <div class="text-center p-4 bg-light rounded-4 border shadow-sm animate-fade-in delay-3">
              <div class="faq-contact">
                <h3 class="h4 text-dark mb-3">Masih ada pertanyaan?</h3>
                <p class="text-muted mb-4 lh-lg">Jika Anda tidak menemukan jawaban yang Anda cari, jangan ragu untuk menghubungi tim support kami.</p>
                <a href="mailto:support@coreer.com" class="btn btn-primary btn-lg rounded-pill px-4 shadow-sm">
                  Hubungi Support <i class="bi bi-envelope-fill ms-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // Helper method untuk menghasilkan item-item FAQ
  _generateFaqItems(faqData) {
    if (!faqData || faqData.length === 0) {
      return '<p class="text-muted text-center">Tidak ada FAQ yang tersedia.</p>';
    }
    return faqData.map((faq, index) => `
      <div class="faq-item card mb-3 border shadow-sm rounded-3 overflow-hidden" data-index="${index}">
        <div class="faq-question card-header bg-white border-0 p-0" id="heading-${index}">
          <button class="btn btn-link text-decoration-none w-100 text-start p-4 d-flex justify-content-between align-items-center"
                  type="button"
                  data-index="${index}"
                  style="color: inherit;">
            <span class="faq-question-text fw-semibold text-dark-blue">${faq.question}</span>
            <span class="faq-icon text-primary fs-5 bi bi-plus-lg transition-transform-200"></span>
          </button>
        </div>
        <div id="answer-${index}" class="faq-answer card-body border-top d-none">
          <p class="mb-0 text-muted lh-lg">${faq.answer}</p>
        </div>
      </div>
    `).join('');
  }
}

export default FaqView;