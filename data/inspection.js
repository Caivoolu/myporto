/**
 * Data proyek: INSPECTION
 * Foto disimpan di folder image/inspection/ — tambahkan baris baru di "images"
 * untuk menambah foto beserta keterangannya.
 */
window.projectData = window.projectData || [];
window.projectData.push({
  key: 'inspection',
  tag: 'Inspection',
  title: 'Inspeksi teknis',
  shortDescription: 'Audit berkala agar seluruh sistem tetap aman dan berfungsi.',
  longDescription:
    'Proses inspeksi dilakukan secara menyeluruh untuk memastikan sistem MEP tetap aman, efisien, dan siap digunakan.',
  highlights: ['Checklist keselamatan', 'Uji fungsi sistem', 'Laporan pemeliharaan'],
  images: [
    { src: 'image/inspection/01.jpg', caption: 'Audit checklist keselamatan.' },
    { src: 'image/inspection/02.jpg', caption: 'Uji fungsi sistem terpasang.' },
    { src: 'image/inspection/03.jpg', caption: 'Penyusunan laporan pemeliharaan.' },
  ],
});
