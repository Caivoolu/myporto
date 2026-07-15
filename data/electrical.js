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
  title: 'Distribusi listrik modern',
  shortDescription: 'Instalasi panel, kabel, dan sistem tenaga untuk bangunan komersial.',
  longDescription:
    'Proyek ini mencakup desain jaringan distribusi listrik, pemasangan panel utama, serta integrasi sistem tenaga yang aman dan terukur untuk bangunan komersial.',
  highlights: ['Panel utama dan subpanel', 'Jalur kabel terorganisir', 'Sistem proteksi dan monitoring'],
  images: [
    { src: 'image/electrical/01.jpg', caption: 'Pemasangan panel distribusi utama.' },
    { src: 'image/electrical/02.jpg', caption: 'Penataan jalur kabel tegangan menengah.' },
    { src: 'image/electrical/03.jpg', caption: 'Pengujian sistem proteksi dan monitoring.' },
  ],
});
