// src/script/presenters/FaqPresenter.js

import FaqView from '../views/faq-view.js';

class FaqPresenter {
  constructor(container) {
    this.container = container;
    this.view = new FaqView();
    // Data FAQ dummy
    this.faqData = [
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
  }

  async init() {
    this.container.innerHTML = this.view.render(this.faqData);

    // Panggil _bindEvents setelah elemen dirender ke DOM
    this._bindEvents();
  }

  _bindEvents() {
    const faqItems = this.container.querySelectorAll('.faq-item');
    const searchInput = this.container.querySelector('#faq-search');

    if (!faqItems.length || !searchInput) {
      console.error('FAQ elements not found in the DOM for event binding.');
      return;
    }

    // Event listener untuk buka/tutup FAQ
    faqItems.forEach(item => {
      const questionButton = item.querySelector('.faq-question button');
      const answerElement = item.querySelector('.faq-answer');
      const iconElement = item.querySelector('.faq-icon');

      questionButton.addEventListener('click', (e) => {
        e.preventDefault();

        // Tutup semua item FAQ yang sedang terbuka kecuali yang sedang diklik
        faqItems.forEach(otherItem => {
          if (otherItem !== item) { // Jika bukan item yang diklik saat ini
            const otherAnswer = otherItem.querySelector('.faq-answer');
            const otherIcon = otherItem.querySelector('.faq-icon');
            if (!otherAnswer.classList.contains('d-none')) { // Jika terbuka
              otherAnswer.classList.add('d-none');
              otherIcon.classList.remove('bi-dash-lg');
              otherIcon.classList.add('bi-plus-lg');
              otherItem.classList.remove('active');
            }
          }
        });

        // Toggle item yang sedang diklik
        answerElement.classList.toggle('d-none');
        item.classList.toggle('active'); // Tambah/hapus kelas 'active' pada kartu

        if (answerElement.classList.contains('d-none')) {
          iconElement.classList.remove('bi-dash-lg');
          iconElement.classList.add('bi-plus-lg');
        } else {
          iconElement.classList.remove('bi-plus-lg');
          iconElement.classList.add('bi-dash-lg');
        }
      });
    });

    // Event listener untuk fungsi pencarian
    searchInput.addEventListener('input', (e) => {
      this._filterFAQ(e.target.value);
    });
  }

  _filterFAQ(searchTerm) {
    const faqItems = this.container.querySelectorAll('.faq-item');
    const term = searchTerm.toLowerCase().trim();

    faqItems.forEach(item => {
      const questionText = item.querySelector('.faq-question-text').textContent.toLowerCase();
      const answerText = item.querySelector('.faq-answer p').textContent.toLowerCase();

      if (questionText.includes(term) || answerText.includes(term)) {
        item.classList.remove('d-none'); // Tampilkan item
      } else {
        item.classList.add('d-none'); // Sembunyikan item
      }
    });
  }
}

export default FaqPresenter;