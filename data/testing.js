/**
 * Data proyek: TESTING
 * Foto disimpan di folder image/testing/ — tambahkan baris baru di "images"
 * untuk menambah foto beserta keterangannya.
 */
window.projectData = window.projectData || [];
window.projectData.push({
  key: 'testing',
  tag: 'Testing',
  title: 'Testing & commissioning',
  shortDescription: 'Pengawasan dan pelaksanaan testing instalasi untuk memastikan kualitas dan keamanan sebelum serah terima.',
  longDescription:
    'Aktivitas testing menjadi bagian penting dari peran supervisi, mencakup continuity test, insulation resistance, earth resistance, dan verifikasi hasil sebelum commissioning.',
  highlights: ['Pengawasan continuity test', 'Insulation & earth resistance', 'Dokumentasi hasil dan approval'],
  images: [
    { src: 'image/testing/01.jpg', caption: 'Pengukuran continuity test' },
    { src: 'image/testing/02.jpg', caption: 'Pengujian insulation resistance' },
    { src: 'image/testing/03.jpg', caption: 'Dokumentasi hasil pengujian' },
  ],
});
