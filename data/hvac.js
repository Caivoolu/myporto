/**
 * Data proyek: LPS
 * Foto disimpan di folder image/hvac/ — tambahkan baris baru di "images"
 * untuk menambah foto beserta keterangannya.
 */
window.projectData = window.projectData || [];
window.projectData.push({
  key: 'hvac',
  tag: 'LPS',
  title: 'Instalasi sistem proteksi petir',
  shortDescription: 'Pelaksanaan instalasi air terminal, down conductor, fitbox, dan pengujian sistem proteksi petir.',
  longDescription:
    'Pekerjaan proteksi petir mencakup instalasi air terminal, down conductor, fitbox, serta pemeriksaan dan pengujian untuk memastikan sistem berfungsi aman dan sesuai standar.',
  highlights: ['Instalasi air terminal', 'Instalasi down conductor & fitbox', 'Pengujian dan inspeksi sistem'],
  images: [
    { src: 'image/hvac/01.jpg', caption: 'Instalasi air terminal.' },
    { src: 'image/hvac/02.jpg', caption: 'Instalasi down conductor dan fitbox.' },
    { src: 'image/hvac/03.jpg', caption: 'Pengecekan dan pengujian sistem proteksi petir.' },
  ],
});
