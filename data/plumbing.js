/**
 * Data proyek: PLUMBING
 * Foto disimpan di folder image/plumbing/ — tambahkan baris baru di "images"
 * untuk menambah foto beserta keterangannya.
 */
window.projectData = window.projectData || [];
window.projectData.push({
  key: 'plumbing',
  tag: 'Plumbing',
  title: 'Jaringan air bersih',
  shortDescription: 'Desain pipa, drainase, dan sistem sanitasi yang tahan lama.',
  longDescription:
    'Sistem plumbing yang kami bangun menekankan konsistensi aliran air, ketahanan material, dan akses perawatan yang cepat, serta didukung koordinasi lapangan yang baik dalam pelaksanaannya.',
  highlights: ['Pipa air bersih dan limbah', 'Drainase dan venting', 'Koordinasi lapangan & sistem sanitasi'],
  images: [
    { src: 'image/plumbing/01.jpg', caption: 'Instalasi pipa air bersih.' },
    { src: 'image/plumbing/02.jpg', caption: 'Jalur drainase dan venting.' },
    { src: 'image/plumbing/03.jpg', caption: 'Pemasangan sistem sanitasi dengan koordinasi lapangan.' },
  ],
});
