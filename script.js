// ---------- Project data ----------
window.projectData = [
  {
    key: 'electrical',
    tag: 'Electrical',
    title: 'Distribusi listrik modern',
    shortDescription: 'Instalasi panel, kabel, dan sistem tenaga untuk bangunan komersial.',
    longDescription:
      'Proyek ini mencakup desain jaringan distribusi listrik, pemasangan panel utama, serta integrasi sistem tenaga yang aman dan terukur untuk bangunan komersial.',
    highlights: ['Panel utama dan subpanel', 'Jalur kabel terorganisir', 'Sistem proteksi dan monitoring'],
    images: [
      { src: 'image/project-1.jpg', alt: 'Panel listrik modern' },
      { src: 'image/project-2.jpg', alt: 'Sistem distribusi ruangan' },
      { src: 'image/project-3.jpg', alt: 'Instalasi kabel dan panel' },
    ],
  },
  {
    key: 'hvac',
    tag: 'HVAC',
    title: 'Ventilasi dan pendinginan',
    shortDescription: 'Optimasi aliran udara dan efisiensi energi untuk ruangan besar.',
    longDescription:
      'Kami merancang sistem HVAC yang menjaga kenyamanan udara, meminimalkan konsumsi energi, dan memudahkan maintenance di area operasional.',
    highlights: ['Desain ducting yang efisien', 'Pendinginan berkapasitas tinggi', 'Kontrol kelembaban dan sirkulasi'],
    images: [
      { src: 'image/project-2.jpg', alt: 'Sistem HVAC' },
      { src: 'image/project-4.jpg', alt: 'Pemasangan saluran udara' },
      { src: 'image/project-5.jpg', alt: 'Pemeriksaan kualitas udara' },
    ],
  },
  {
    key: 'plumbing',
    tag: 'Plumbing',
    title: 'Jaringan air bersih',
    shortDescription: 'Desain pipa, drainase, dan sistem sanitasi yang tahan lama.',
    longDescription:
      'Sistem plumbing yang kami bangun menekankan konsistensi aliran air, ketahanan material, dan akses perawatan yang cepat.',
    highlights: ['Pipa air bersih dan limbah', 'Drainase dan venting', 'Sistem sanitasi lengkap'],
    images: [
      { src: 'image/project-3.jpg', alt: 'Instalasi pipa air' },
      { src: 'image/project-1.jpg', alt: 'Pipa dan sistem distribusi' },
      { src: 'image/project-6.jpg', alt: 'Ruang mekanikal pipa' },
    ],
  },
  {
    key: 'testing',
    tag: 'Testing',
    title: 'Continuity test & resistance test',
    shortDescription: 'Pengetesan instalasi yang terpasang sebelum serah terima.',
    longDescription:
      'Setiap instalasi diuji secara menyeluruh — continuity test, insulation resistance, hingga earth resistance — untuk memastikan sistem aman sebelum dioperasikan.',
    highlights: ['Continuity & insulation test', 'Earth resistance test', 'Dokumentasi hasil pengujian'],
    images: [
      { src: 'image/project-4.jpg', alt: 'Proyek konstruksi di site' },
      { src: 'image/project-5.jpg', alt: 'Pengujian instalasi' },
      { src: 'image/project-6.jpg', alt: 'Pemeriksaan sistem' },
    ],
  },
  {
    key: 'inspection',
    tag: 'Inspection',
    title: 'Inspeksi teknis',
    shortDescription: 'Audit berkala agar seluruh sistem tetap aman dan berfungsi.',
    longDescription:
      'Proses inspeksi dilakukan secara menyeluruh untuk memastikan sistem MEP tetap aman, efisien, dan siap digunakan.',
    highlights: ['Checklist keselamatan', 'Uji fungsi sistem', 'Laporan pemeliharaan'],
    images: [
      { src: 'image/project-5.jpg', alt: 'Inspeksi sistem engineering' },
      { src: 'image/project-2.jpg', alt: 'Pemeriksaan ventilasi' },
      { src: 'image/project-1.jpg', alt: 'Inspeksi panel listrik' },
    ],
  },
  {
    key: 'mechanical',
    tag: 'Mechanical',
    title: 'Ruang mekanikal tertata',
    shortDescription: 'Penyusunan sistem mekanikal yang rapi, aksesibel, dan mudah dirawat.',
    longDescription:
      'Ruangan mekanikal yang tertata menjadikan proses perawatan lebih sederhana dan mengurangi risiko gangguan operasional.',
    highlights: ['Akses perawatan mudah', 'Penataan jalur utilitas', 'Peningkatan keamanan ruang'],
    images: [
      { src: 'image/project-6.jpg', alt: 'Ruang mekanikal' },
      { src: 'image/project-3.jpg', alt: 'Pipa dan instalasi mekanikal' },
      { src: 'image/project-4.jpg', alt: 'Sistem terpasang dengan rapi' },
    ],
  },
];

document.addEventListener('DOMContentLoaded', () => {
  renderProjectCards();
  lucide.createIcons();
  initFadeUp();
  initStatsCounter();
  initModal();
});

// ---------- Render project cards ----------
function renderProjectCards() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  grid.innerHTML = window.projectData
    .map(
      (project, index) => `
      <article class="project-card fade-up" data-project-index="${index}" role="button" tabindex="0" aria-label="Buka detail proyek ${project.title}">
        <div class="image-wrapper">
          <img src="${project.images[0].src}" alt="${project.images[0].alt}" />
        </div>
        <div class="project-body">
          <span class="tag">${project.tag}</span>
          <h3>${project.title}</h3>
          <p>${project.shortDescription}</p>
          <span class="read-more">Lihat galeri &amp; detail <i data-lucide="arrow-right"></i></span>
        </div>
      </article>`
    )
    .join('');
}

// ---------- Scroll reveal ----------
function initFadeUp() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));
}

// ---------- Stats counter ----------
function initStatsCounter() {
  let counted = false;
  const statsObserver = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting && !counted) {
        counted = true;
        animateCount('stat-years', 7, '+');
        animateCount('stat-projects', 50, '+');
        animateCount('stat-clients', 30, '+');
        animateCount('stat-systems', 120, '+');
        statsObserver.disconnect();
      }
    },
    { threshold: 0.3 }
  );

  const statTarget = document.querySelector('.stats-grid');
  if (statTarget) statsObserver.observe(statTarget);
}

function animateCount(id, target, suffix) {
  const el = document.getElementById(id);
  if (!el) return;
  let current = 0;
  const step = Math.max(1, Math.floor(target / 40));
  const interval = setInterval(() => {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(interval);
    }
    el.textContent = `${current}${suffix}`;
  }, 30);
}

// ---------- Project modal ----------
function initModal() {
  const modal = document.getElementById('project-modal');
  const grid = document.getElementById('projects-grid');
  if (!modal || !grid) return;

  const track = document.getElementById('modal-slider-track');
  const dotsWrap = document.getElementById('modal-slider-dots');
  const prevBtn = document.getElementById('modal-prev-btn');
  const nextBtn = document.getElementById('modal-next-btn');
  const tagEl = document.getElementById('modal-tag');
  const titleEl = document.getElementById('modal-title');
  const descEl = document.getElementById('modal-desc-main');
  const listEl = document.getElementById('modal-technical-list');

  let currentProject = null;
  let currentSlide = 0;
  let lastFocusedEl = null;

  function openModal(project) {
    currentProject = project;
    currentSlide = 0;
    lastFocusedEl = document.activeElement;

    tagEl.textContent = project.tag;
    titleEl.textContent = project.title;
    descEl.textContent = project.longDescription;
    listEl.innerHTML = project.highlights.map((item) => `<li>${item}</li>`).join('');

    track.innerHTML = project.images
      .map((img) => `<img src="${img.src}" alt="${img.alt}" />`)
      .join('');

    dotsWrap.innerHTML = project.images
      .map((_, i) => `<button type="button" aria-label="Foto ${i + 1}" data-slide="${i}"></button>`)
      .join('');

    updateSlide();
    lucide.createIcons();

    modal.classList.remove('hidden');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    modal.querySelector('.modal-close').focus();
  }

  function closeModal() {
    modal.classList.add('hidden');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastFocusedEl) lastFocusedEl.focus();
  }

  function updateSlide() {
    if (!currentProject) return;
    const total = currentProject.images.length;
    currentSlide = (currentSlide + total) % total;
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
    dotsWrap.querySelectorAll('button').forEach((dot, i) => {
      dot.classList.toggle('active', i === currentSlide);
    });
  }

  // Open on card click / keyboard activation
  grid.addEventListener('click', (event) => {
    const card = event.target.closest('.project-card');
    if (!card) return;
    const project = window.projectData[Number(card.dataset.projectIndex)];
    if (project) openModal(project);
  });

  grid.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    const card = event.target.closest('.project-card');
    if (!card) return;
    event.preventDefault();
    const project = window.projectData[Number(card.dataset.projectIndex)];
    if (project) openModal(project);
  });

  // Close interactions
  modal.querySelectorAll('[data-close-modal]').forEach((el) => {
    el.addEventListener('click', closeModal);
  });

  document.addEventListener('keydown', (event) => {
    if (modal.classList.contains('hidden')) return;
    if (event.key === 'Escape') closeModal();
    if (event.key === 'ArrowRight') { currentSlide++; updateSlide(); }
    if (event.key === 'ArrowLeft') { currentSlide--; updateSlide(); }
  });

  // Slider controls
  prevBtn.addEventListener('click', () => { currentSlide--; updateSlide(); });
  nextBtn.addEventListener('click', () => { currentSlide++; updateSlide(); });

  dotsWrap.addEventListener('click', (event) => {
    const dot = event.target.closest('button[data-slide]');
    if (!dot) return;
    currentSlide = Number(dot.dataset.slide);
    updateSlide();
  });
}
