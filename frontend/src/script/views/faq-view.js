class FaqView {
  // Method untuk merender struktur HTML dari FAQ
  render(faqData) {
    return `
      <div class="container-fluid px-3 px-md-4 px-lg-5 my-4 my-md-5 py-3 py-md-5">
        <h2 class="text-center mb-4 mb-md-5 fw-bold text-dark-blue display-6 display-md-5 animate-slide-up">Frequently Asked Questions</h2>
        <div class="row justify-content-center">
          <div class="col-12 col-md-11 col-lg-10 col-xl-8 col-xxl-7">
            <div class="text-center mb-4 mb-md-5 animate-fade-in delay-1">
              <p class="lead text-muted mb-3 mb-md-4 fs-6 fs-md-5">Temukan jawaban untuk pertanyaan yang sering diajukan tentang CoReer</p>
              <div class="position-relative mx-auto" style="max-width: min(100%, 500px);">
                <input
                  type="text"
                  id="faq-search"
                  class="form-control form-control-md form-control-lg-lg ps-4 ps-md-5 rounded-pill shadow-sm w-100"
                  placeholder="Cari pertanyaan..."
                >
                <i class="bi bi-search position-absolute top-50 start-0 translate-middle-y ms-2 ms-md-3 text-muted fs-6 fs-md-5"></i>
              </div>
            </div>

            <div id="faq-list-container" class="mb-4 mb-md-5 animate-slide-up delay-2">
              ${this._generateFaqItems(faqData)}
            </div>

            <div class="text-center p-3 p-md-4 bg-light rounded-3 rounded-md-4 border shadow-sm animate-fade-in delay-3">
              <div class="faq-contact">
                <h3 class="h5 h4-md text-dark mb-2 mb-md-3">Masih ada pertanyaan?</h3>
                <p class="text-muted mb-3 mb-md-4 lh-lg fs-6 fs-md-5">Jika Anda tidak menemukan jawaban yang Anda cari, jangan ragu untuk menghubungi tim support kami.</p>
                <a href="mailto:support@coreer.com" class="btn btn-primary btn-md btn-lg-lg rounded-pill px-3 px-md-4 shadow-sm d-inline-flex align-items-center flex-wrap justify-content-center">
                  <span class="me-1 me-md-2">Hubungi Support</span>
                  <i class="bi bi-envelope-fill"></i>
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
      return '<p class="text-muted text-center fs-6 fs-md-5">Tidak ada FAQ yang tersedia.</p>';
    }
    return faqData.map((faq, index) => `
      <div class="faq-item card mb-2 mb-md-3 border shadow-sm rounded-2 rounded-md-3 overflow-hidden" data-index="${index}">
        <div class="faq-question card-header bg-white border-0 p-0" id="heading-${index}">
          <button class="btn btn-link text-decoration-none w-100 text-start p-3 p-md-4 d-flex justify-content-between align-items-start align-items-md-center flex-column flex-md-row"
                  type="button"
                  data-index="${index}"
                  style="color: inherit; min-height: auto;">
            <span class="faq-question-text fw-semibold text-dark-blue fs-6 fs-md-5 text-start mb-2 mb-md-0 pe-2 pe-md-3 flex-grow-1">${faq.question}</span>
            <span class="faq-icon text-primary fs-5 fs-md-4 bi bi-plus-lg transition-transform-200 align-self-end align-self-md-center flex-shrink-0"></span>
          </button>
        </div>
        <div id="answer-${index}" class="faq-answer card-body border-top d-none p-3 p-md-4">
          <p class="mb-0 text-muted lh-lg fs-6 fs-md-5">${faq.answer}</p>
        </div>
      </div>
    `).join('');
  }
}

export default FaqView;