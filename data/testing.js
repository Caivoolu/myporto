/**
 * Data proyek: TESTING
 * Foto disimpan di folder image/testing/ — tambahkan baris baru di "images"
 * untuk menambah foto beserta keterangannya.
 */
window.projectData = window.projectData || [];
window.projectData.push({
  key: 'testing',
  tag: 'Testing',
  title: 'Continuity test & resistance test',
  shortDescription: 'Pengetesan instalasi yang terpasang sebelum serah terima.',
  longDescription:
    'Setiap instalasi diuji secara menyeluruh — continuity test, insulation resistance, hingga earth resistance — untuk memastikan sistem aman sebelum dioperasikan.',
  highlights: ['Continuity & insulation test', 'Earth resistance test', 'Dokumentasi hasil pengujian'],
  images: [
    { src: 'image/testing/01.jpg', caption: 'Pengukuran continuity test.' },
    { src: 'image/testing/02.jpg', caption: 'Pengujian insulation resistance.' },
    { src: 'image/testing/03.jpg', caption: 'Dokumentasi hasil pengujian.' },
  ],
});
