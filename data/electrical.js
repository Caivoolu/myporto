/**
 * Data proyek: ELECTRICAL
 * ------------------------------------------------------------------
 * Cara menambah foto baru:
 *   1. Taruh file foto di folder  image/electrical/
 *   2. Tambahkan satu baris baru di array "images" di bawah,
 *      isi "src" dengan path foto dan "caption" dengan keterangannya.
 *   Urutan array = urutan foto muncul di slider.
 * ------------------------------------------------------------------
 */
window.projectData = window.projectData || [];
window.projectData.push({
  key: 'electrical',
  tag: 'Electrical',
  title: 'Electrical & supervisi lapangan',
  shortDescription: 'Kegiatan instalasi panel, supervisi kabel, testing, dan inspeksi teknis dalam satu alur pekerjaan electrical.',
  longDescription:
    'Dokumentasi ini menampilkan eksekusi pekerjaan electrical dari instalasi panel dan pemasangan kabel, hingga supervisi testing serta inspeksi teknis untuk memastikan sistem siap pakai dan aman.',
  highlights: ['Instalasi panel utama dan subpanel', 'Pemasangan kabel dan tray', 'Supervisi testing & inspection'],
  images: [
    { src: 'image/electrical/01.jpg', caption: 'Pemasangan panel distribusi utama.' },
    { src: 'image/electrical/02.jpg', caption: 'Penataan kabel dan tray distribusi.' },
    { src: 'image/electrical/03.jpg', caption: 'Testing dan inspeksi sistem listrik.' },
  ],
});
