/** 
 * Data proyek: KOORDINASI & SUPERVISI LAPANGAN
 * ------------------------------------------------------------------ 
 * Cara menambah foto baru: 
 * 1. Taruh file foto di folder image/coordination/ 
 * 2. Tambahkan satu baris baru di array "images" di bawah, 
 * isi "src" dengan path foto dan "caption" dengan keterangannya. 
 * Urutan array = urutan foto muncul di slider. 
 * ------------------------------------------------------------------ 
 */ 
window.projectData = window.projectData || []; 
window.projectData.push({ 
  key: 'coordination', 
  tag: 'Koordinasi', 
  title: 'Koordinasi & Supervisi Lapangan', 
  shortDescription: 'Eksekusi kontrol pra-kerja, sinkronisasi lintas tim, manajemen izin kerja, dan penegakan prosedur keselamatan (K3) sebelum konstruksi dimulai.', 
  longDescription: 'Dokumentasi ini menampilkan kontrol manajemen lapangan murni melalui penyelarasan desain, inspeksi kelayakan area serta material, pembagian instruksi harian, hingga validasi administratif demi kelancaran proyek.', 
  highlights: [
    'Sinkronisasi & review gambar kerja (Shop Drawing)', 
    'Inspeksi kesiapan area & material approval', 
    'Briefing instruksi K3 & koordinasi harian (Toolbox Meeting)'
  ], 
  images: [ 
    { src: 'image/coordination/01.jpg', caption: 'Melakukan koordinasi gambar kerja dan sinkronisasi lintastim.' }, 
    { src: 'image/coordination/02.jpg', caption: 'Inspeksi kesiapan area kerja dan material di lapangan.' }, 
    { src: 'image/coordination/03.jpg', caption: 'Memimpin briefing harian (toolbox meeting) sebelum pengerjaan dimulai.' }, 
  ], 
});
