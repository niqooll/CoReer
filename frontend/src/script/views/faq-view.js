class FaqView {
  render(faqData) {
    return `
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-12 col-lg-10 col-xl-8">
            <!-- FAQ Header -->
            <div class="text-center mb-5">
              <h1 class="display-4 fw-bold text-dark mb-3">Frequently Asked Questions</h1>
              <p class="lead text-muted mb-4">Temukan jawaban untuk pertanyaan yang sering diajukan tentang CoReer</p>
              
              <!-- Search Container -->
              <div class="position-relative mx-auto" style="max-width: 500px;">
                <input 
                  type="text" 
                  id="faq-search" 
                  class="form-control form-control-lg ps-5 rounded-pill shadow-sm" 
                  placeholder="Cari pertanyaan..."
                >
                <i class="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted">🔍</i>
              </div>
            </div>

            <!-- FAQ Content -->
            <div class="mb-5">
              ${faqData.map((faq, index) => `
                <div class="faq-item card mb-3 border shadow-sm" data-index="${index}">
                  <div class="faq-question card-header bg-white border-0 p-0">
                    <button class="btn btn-link text-decoration-none w-100 text-start p-4 d-flex justify-content-between align-items-center" 
                            type="button" style="color: inherit;">
                      <span class="faq-question-text fw-semibold text-dark">${faq.question}</span>
                      <span class="faq-icon text-muted fs-4">+</span>
                    </button>
                  </div>
                  <div class="faq-answer card-body border-top d-none">
                    <p class="mb-0 text-muted lh-lg">${faq.answer}</p>
                  </div>
                </div>
              `).join('')}
            </div>

            <!-- FAQ Footer -->
            <div class="text-center p-4 bg-light rounded border shadow-sm">
              <div class="faq-contact">
                <h3 class="h4 text-dark mb-3">Masih ada pertanyaan?</h3>
                <p class="text-muted mb-4 lh-lg">Jika Anda tidak menemukan jawaban yang Anda cari, jangan ragu untuk menghubungi tim support kami.</p>
                <a href="mailto:support@coreer.com" class="btn btn-primary btn-lg rounded-pill px-4 shadow-sm">
                  Hubungi Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

export default FaqView;