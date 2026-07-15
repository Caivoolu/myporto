document.addEventListener('DOMContentLoaded', () => {
  // Data proyek untuk modal
  const projectData = {
    electrical: {
      tag: "Electrical",
      title: "Distribusi Listrik Modern",
      desc: "Penjelasan proyek 1...",
      tech: ["Instalasi Panel", "Kabel Tray"],
      images: ["image/project-1.jpg"]
    },
    // ...tambahkan data untuk kategory lain (hvac, plumbing, dll)
  };

  const modal = document.getElementById('project-modal');
  const closeBtn = modal.querySelector('.modal-close');
  
  document.querySelectorAll('.project-card[data-project]').forEach(card => {
    card.addEventListener('click', () => {
      const data = projectData[card.getAttribute('data-project')];
      if (!data) return;
      
      // Isi modal dengan data
      document.getElementById('modal-tag').textContent = data.tag;
      document.getElementById('modal-title').textContent = data.title;
      document.getElementById('modal-desc-main').textContent = data.desc;
      
      const list = document.getElementById('modal-technical-list');
      list.innerHTML = data.tech.map(t => `<li>${t}</li>`).join('');
      
      // Setup Slider Images
      const track = document.getElementById('modal-slider-track');
      track.innerHTML = data.images.map(img => `<img src="${img}" alt="">`).join('');
      
      modal.classList.remove('hidden');
    });
  });

  closeBtn.addEventListener('click', () => modal.classList.add('hidden'));
});
