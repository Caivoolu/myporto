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
  shortDescription: 'Audit lapangan dan pemeriksaan sistem secara berkala agar standar kualitas, keselamatan, dan dokumentasi tetap terjaga.',
  longDescription:
    'Inspeksi teknis merupakan bagian inti dari peran supervisor dalam memastikan seluruh sistem aman, berfungsi, dan sesuai requirement proyek.',
  highlights: ['Checklist keselamatan', 'Pemeriksaan hasil instalasi', 'Laporan dan follow-up tindakan'],
  images: [
    { src: 'image/inspection/01.jpg', caption: 'Audit checklist keselamatan.' },
    { src: 'image/inspection/02.jpg', caption: 'Uji fungsi sistem terpasang.' },
    { src: 'image/inspection/03.jpg', caption: 'Penyusunan laporan pemeliharaan.' },
  ],
});
