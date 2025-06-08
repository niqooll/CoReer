// src/script/presenters/faq-presenter.js
import FaqView from '../views/faq-view.js';

class FaqPresenter {
  constructor(container) {
    this.container = container;
    this.view = new FaqView();
  }

  async init() {

    const faqData = [
      {
        question: "Apa itu CoReer?",
        answer: "CoReer adalah platform karir yang membantu Anda menemukan pekerjaan impian dan mengembangkan karir profesional. Kami menyediakan berbagai layanan mulai dari pencarian kerja hingga pengembangan skill."
      },
      {
        question: "Bagaimana cara mendaftar di CoReer?",
        answer: "Anda dapat mendaftar dengan mengklik tombol 'Register' di halaman utama, kemudian isi formulir pendaftaran dengan data yang valid. Setelah itu, Anda akan menerima email konfirmasi untuk mengaktifkan akun."
      },
      {
        question: "Apakah CoReer gratis?",
        answer: "Ya, CoReer menyediakan layanan dasar secara gratis. Namun, kami juga memiliki paket premium dengan fitur tambahan untuk pengalaman yang lebih optimal."
      },
      {
        question: "Bagaimana cara mencari pekerjaan di CoReer?",
        answer: "Setelah login, Anda dapat menggunakan fitur pencarian dengan memasukkan kata kunci pekerjaan, lokasi, atau kategori yang diinginkan. Anda juga dapat menggunakan filter untuk mempersempit hasil pencarian."
      },
      {
        question: "Bisakah saya mengedit profil setelah mendaftar?",
        answer: "Tentu saja! Anda dapat mengedit profil kapan saja melalui menu 'Profile' setelah login. Pastikan untuk selalu memperbarui informasi Anda agar sesuai dengan perkembangan karir terbaru."
      },
      {
        question: "Bagaimana cara menghubungi customer support?",
        answer: "Anda dapat menghubungi tim customer support melalui email support@coreer.com atau melalui form kontak yang tersedia di website. Tim kami siap membantu Anda 24/7."
      },
      {
        question: "Apakah data saya aman di CoReer?",
        answer: "Keamanan data adalah prioritas utama kami. Kami menggunakan enkripsi tingkat tinggi dan mengikuti standar keamanan internasional untuk melindungi informasi pribadi Anda."
      },
      {
        question: "Bagaimana cara logout dari akun?",
        answer: "Anda dapat logout dengan mengklik tombol 'Logout' yang tersedia di menu profile (desktop) atau di menu navigasi mobile. Pastikan untuk selalu logout ketika menggunakan perangkat publik."
      }
    ];

    this.container.innerHTML = this.view.render(faqData);
    
    this._bindEvents();
  }

  _bindEvents() {

    const faqItems = this.container.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      const answer = item.querySelector('.faq-answer');
      const icon = item.querySelector('.faq-icon');
      
      question.addEventListener('click', () => {
        const isOpen = answer.style.display === 'block';

        faqItems.forEach(otherItem => {
          const otherAnswer = otherItem.querySelector('.faq-answer');
          const otherIcon = otherItem.querySelector('.faq-icon');
          otherAnswer.style.display = 'none';
          otherIcon.textContent = '+';
          otherItem.classList.remove('active');
        });
        

        if (!isOpen) {
          answer.style.display = 'block';
          icon.textContent = '−';
          item.classList.add('active');
        }
      });
    });

    const searchInput = this.container.querySelector('#faq-search');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this._filterFAQ(e.target.value);
      });
    }
  }

  _filterFAQ(searchTerm) {
    const faqItems = this.container.querySelectorAll('.faq-item');
    const term = searchTerm.toLowerCase();

    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question').textContent.toLowerCase();
      const answer = item.querySelector('.faq-answer').textContent.toLowerCase();
      
      if (question.includes(term) || answer.includes(term)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }
}

export default FaqPresenter;