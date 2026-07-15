document.addEventListener('DOMContentLoaded', () => {
  // ... (Inisialisasi Lucide & IntersectionObserver ada di sini) ...

  // Data proyek untuk Modal
  const projectDatabase = {
    electrical: {
      tag: "Electrical",
      title: "Distribusi Listrik Modern",
      desc: "Penjelasan lengkap...",
      images: ["img1.jpg", "img2.jpg"],
      techDetails: ["Detail 1", "Detail 2"]
    }
    // Tambahkan data untuk hvac, plumbing, dsb.
  };

  const modal = document.getElementById('project-modal');
  // ... (Logika buka/tutup modal, slider, & data injection) ...
});
