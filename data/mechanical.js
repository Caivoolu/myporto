/**
 * Data proyek: MECHANICAL
 * Foto disimpan di folder image/mechanical/ — tambahkan baris baru di "images"
 * untuk menambah foto beserta keterangannya.
 */
window.projectData = window.projectData || [];
window.projectData.push({
  key: 'mechanical',
  tag: 'Mechanical',
  title: 'Ruang mekanikal tertata',
  shortDescription: 'Penyusunan sistem mekanikal yang rapi, aksesibel, dan mudah dirawat.',
  longDescription:
    'Ruangan mekanikal yang tertata menjadikan proses perawatan lebih sederhana dan mengurangi risiko gangguan operasional.',
  highlights: ['Akses perawatan mudah', 'Penataan jalur utilitas', 'Peningkatan keamanan ruang'],
  images: [
    { src: 'image/mechanical/01.jpg', caption: 'Pabrikasi Material Support.' },
    { src: 'image/mechanical/02.jpg', caption: 'Pabrikasi Material yang presisi.' },
    { src: 'image/mechanical/03.jpg', caption: 'Sistem terpasang dengan aman.' },
  ],
});
