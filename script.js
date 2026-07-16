// window.projectData is built up by the files in /data/*.js — one file per
// category, loaded before this script. Each pushes one project object.

const FALLBACK_IMAGE = 'image/placeholder.svg';

function renderProjectImage(img, alt = 'Foto proyek') {
  const src = img?.src || FALLBACK_IMAGE;
  return `<img src="${src}" alt="${alt}" loading="lazy" onerror="this.onerror=null;this.src='${FALLBACK_IMAGE}';" />`;
}

document.addEventListener('DOMContentLoaded', () => {
  renderProjectCards();
  lucide.createIcons();
  initFadeUp();
  initModal();
});

// ---------- Render project cards ----------
function renderProjectCards() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  grid.innerHTML = window.projectData
    .map(
      (project, index) => {
        const firstImage = project.images?.[0] || { src: FALLBACK_IMAGE, caption: project.title };
        return `
      <article class="project-card fade-up" data-project-index="${index}" role="button" tabindex="0" aria-label="Buka detail proyek ${project.title}">
        <div class="image-wrapper">
          ${renderProjectImage(firstImage, firstImage.caption)}
        </div>
        <div class="project-body">
          <span class="tag">${project.tag}</span>
          <h3>${project.title}</h3>
          <p>${project.shortDescription}</p>
          <span class="read-more">Lihat galeri &amp; detail <i data-lucide="arrow-right"></i></span>
        </div>
      </article>`;
      }
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

// ---------- Project modal ----------
function initModal() {
  const modal = document.getElementById('project-modal');
  const grid = document.getElementById('projects-grid');
  if (!modal || !grid) return;

  const track = document.getElementById('modal-slider-track');
  const dotsWrap = document.getElementById('modal-slider-dots');
  const captionEl = document.getElementById('modal-slide-caption');
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

    const images = project.images?.length ? project.images : [{ src: FALLBACK_IMAGE, caption: project.title }];

    track.innerHTML = images
      .map((img) => renderProjectImage(img, img.caption || 'Foto proyek'))
      .join('');

    dotsWrap.innerHTML = images
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
    const total = currentProject.images?.length || 0;
    if (total === 0) return;
    currentSlide = (currentSlide + total) % total;
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
    dotsWrap.querySelectorAll('button').forEach((dot, i) => {
      dot.classList.toggle('active', i === currentSlide);
    });
    captionEl.textContent = currentProject.images[currentSlide].caption || '';
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
