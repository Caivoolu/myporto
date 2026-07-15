// Database portofolio terstruktur Anda
window.projectData = [ /* ... content of window.projectData from prompt ... */ ];

document.addEventListener('DOMContentLoaded', () => {
  // ... (Other animations like fade-up and stats) ...

  // 3. Logika Utama Sistem Modal & Multi-Image Slider
  const modal = document.getElementById('project-modal');
  const closeBtn = modal.querySelector('.modal-close');
  const overlay = modal.querySelector('.modal-overlay');
  const track = document.getElementById('modal-slider-track');
  const dotsContainer = document.getElementById('modal-slider-dots');
  const prevBtn = document.getElementById('modal-prev-btn');
  const nextBtn = document.getElementById('modal-next-btn');

  let currentSlideIndex = 0;
  let totalSlides = 0;

  function updateSliderPosition() {
    track.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
    document.querySelectorAll('.modal .dot').forEach((dot, idx) => {
      dot.classList.toggle('active', idx === currentSlideIndex);
    });
  }

  // Event handler klik kartu proyek
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
      const index = card.getAttribute('data-index');
      const data = window.projectData[index];
      if (!data) return;

      // Suntik isi konten modal secara dinamis
      document.getElementById('modal-tag').textContent = data.tag;
      document.getElementById('modal-title').textContent = data.title;
      document.getElementById('modal-desc-long').textContent = data.longDescription;
      const highlightsList = document.getElementById('modal-highlights-list');
      highlightsList.innerHTML = data.highlights.map(item => `<li>${item}</li>`).join('');
      track.innerHTML = data.images.map(img => `<img src="${img.src}" alt="${img.alt}">`).join('');
      dotsContainer.innerHTML = data.images.map((_, idx) => `<span class="dot ${idx === 0 ? 'active' : ''}" data-goto="${idx}"></span>`).join('');

      currentSlideIndex = 0;
      totalSlides = data.images.length;
      updateSliderPosition();

      // Ikat event handler klik langsung ke elemen indikator dots
      dotsContainer.querySelectorAll('.dot').forEach(dot => {
        dot.addEventListener('click', (e) => {
          currentSlideIndex = parseInt(e.target.getAttribute('data-goto'));
          updateSliderPosition();
        });
      });

      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden'; // Kunci scroll
    });
  });

  // Kontrol tombol slider modal
  nextBtn.addEventListener('click', () => {
    if (totalSlides <= 1) return;
    currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
    updateSliderPosition();
  });

  prevBtn.addEventListener('click', () => {
    if (totalSlides <= 1) return;
    currentSlideIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides;
    updateSliderPosition();
  });

  // Tutup modal
  const closeModalFunc = () => {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  };
  closeBtn.addEventListener('click', closeModalFunc);
  overlay.addEventListener('click', closeModalFunc);
});

// ... (Other functions like animateCount) ...
