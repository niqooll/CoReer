// src/script/views/faq-view.js
class FaqView {
  render(faqData) {
    return `
      <div class="faq-container">
        <div class="faq-header">
          <h1 class="faq-title">Frequently Asked Questions</h1>
          <p class="faq-subtitle">Temukan jawaban untuk pertanyaan yang sering diajukan tentang CoReer</p>
          
          <div class="faq-search-container">
            <input 
              type="text" 
              id="faq-search" 
              class="faq-search" 
              placeholder="Cari pertanyaan..."
            >
            <i class="search-icon">🔍</i>
          </div>
        </div>

        <div class="faq-content">
          ${faqData.map((faq, index) => `
            <div class="faq-item" data-index="${index}">
              <div class="faq-question">
                <span class="faq-question-text">${faq.question}</span>
                <span class="faq-icon">+</span>
              </div>
              <div class="faq-answer">
                <p>${faq.answer}</p>
              </div>
            </div>
          `).join('')}
        </div>

        <div class="faq-footer">
          <div class="faq-contact">
            <h3>Masih ada pertanyaan?</h3>
            <p>Jika Anda tidak menemukan jawaban yang Anda cari, jangan ragu untuk menghubungi tim support kami.</p>
            <a href="mailto:support@coreer.com" class="contact-btn">
              Hubungi Support
            </a>
          </div>
        </div>
      </div>
    `;
  }
}

export default FaqView;