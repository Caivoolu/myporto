/**
 * Data proyek: LPS
 * Foto disimpan di folder image/hvac/ — tambahkan baris baru di "images"
 * untuk menambah foto beserta keterangannya.
 */
window.projectData = window.projectData || [];
window.projectData.push({
  key: 'hvac',
  tag: 'LPS',
  title: 'Sistem Proteksi Petir',
  shortDescription: ': Mengendalikan jalur arus listrik ekstrem dan membatasi tegangan berlebih demi keselamatan struktur serta perangkat elektronik..',
  longDescription:
    'Kami merancang sistem HVAC yang menjaga kenyamanan udara, meminimalkan konsumsi energi, dan memudahkan maintenance di area operasional.',
  highlights: ['Desain ducting yang efisien', 'Pendinginan berkapasitas tinggi', 'Kontrol kelembaban dan sirkulasi'],
  images: [
    { src: 'image/hvac/01.jpg', caption: 'Pemasangan ducting utama.' },
    { src: 'image/hvac/02.jpg', caption: 'Unit pendingin berkapasitas besar.' },
    { src: 'image/hvac/03.jpg', caption: 'Pengecekan kualitas dan aliran udara.' },
  ],
});
