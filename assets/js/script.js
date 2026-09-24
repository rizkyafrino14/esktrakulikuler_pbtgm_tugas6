// ===== Data 15 ekstrakurikuler SMKN Tengaran =====
const EKSKUL = [
  { nama: 'Paskibra', rumpun: 'Kepemimpinan', emoji: '🇮🇩', desc: 'Pasukan pengibar bendera. Latihan baris-berbaris dan tampil di upacara.',
    detail: 'Paskibra melatih kedisiplinan dan kekompakan lewat baris-berbaris. Anggota terpilih bertugas mengibarkan bendera saat upacara sekolah.',
    kegiatan: ['Latihan baris-berbaris (PBB)', 'Bertugas di upacara bendera', 'Latihan fisik dan kedisiplinan'],
    skill: ['Disiplin', 'Kepemimpinan', 'Percaya diri'], cocok: 'kamu yang tegas, tahan banting, dan bangga membawa nama sekolah.' },
  { nama: 'Pramuka', rumpun: 'Kepemimpinan', emoji: '⚜️', desc: 'Kepanduan: kemah, tali-temali, dan petualangan di alam.',
    detail: 'Pramuka mengajarkan kemandirian dan cara bertahan di alam terbuka, sambil membangun rasa persaudaraan antaranggota.',
    kegiatan: ['Tali-temali dan sandi', 'Kemah dan penjelajahan', 'Bakti sosial'],
    skill: ['Mandiri', 'Survival', 'Kerja tim'], cocok: 'kamu yang suka petualangan dan kegiatan di luar ruangan.' },
  { nama: 'PMR', rumpun: 'Kepemimpinan', emoji: '🩺', desc: 'Palang Merah Remaja: pertolongan pertama dan aksi kemanusiaan.',
    detail: 'PMR membekali kamu keterampilan pertolongan pertama dan kepedulian sosial, dan sering bertugas membantu saat kegiatan sekolah.',
    kegiatan: ['Pelatihan pertolongan pertama (P3K)', 'Bakti sosial dan kegiatan donor', 'Latihan siaga bencana'],
    skill: ['P3K', 'Empati', 'Sigap'], cocok: 'kamu yang peduli sesama dan ingin punya keterampilan yang berguna.' },
  { nama: 'Jepang', rumpun: 'Bahasa & Media', emoji: '🎌', desc: 'Belajar bahasa dan budaya Jepang dari dasar.',
    detail: 'Ekskul ini mengenalkan bahasa Jepang dari huruf dasar sampai percakapan sederhana, plus budaya Jepang yang seru.',
    kegiatan: ['Belajar hiragana dan katakana', 'Percakapan dasar', 'Mengenal budaya dan tradisi Jepang'],
    skill: ['Bahasa Jepang', 'Wawasan budaya', 'Nilai tambah karier'], cocok: 'kamu yang suka budaya Jepang atau ingin bekerja di perusahaan Jepang.' },
  { nama: 'Foster', rumpun: 'Bahasa & Media', emoji: '🗣️', desc: 'Latihan berbahasa dan berani tampil di depan umum.',
    detail: 'Foster melatih kemampuan berbahasa dan keberanian berbicara lewat praktik langsung bersama teman-teman.',
    kegiatan: ['Latihan percakapan', 'Presentasi dan public speaking', 'Permainan bahasa'],
    skill: ['Speaking', 'Percaya diri', 'Kosakata'], cocok: 'kamu yang ingin lancar berbicara dan tidak grogi di depan orang.' },
  { nama: 'Jurnalis', rumpun: 'Bahasa & Media', emoji: '📰', desc: 'Liputan, menulis berita, foto, dan konten sekolah.',
    detail: 'Jurnalis mengelola informasi sekolah: meliput acara, menulis berita, memotret, lalu mengemasnya jadi konten menarik.',
    kegiatan: ['Meliput kegiatan sekolah', 'Menulis berita dan artikel', 'Foto dan editing konten'],
    skill: ['Menulis', 'Fotografi', 'Berpikir kritis'], cocok: 'kamu yang suka menulis, memotret, atau membuat konten.' },
  { nama: 'Silat', rumpun: 'Olahraga', emoji: '🥋', desc: 'Bela diri: jurus, ketangkasan, dan sportivitas.',
    detail: 'Silat melatih teknik bela diri, kelenturan, dan mental yang tenang. Anggota bisa dipersiapkan untuk mengikuti pertandingan.',
    kegiatan: ['Latihan jurus dan teknik dasar', 'Latihan fisik dan kelenturan', 'Persiapan pertandingan'],
    skill: ['Bela diri', 'Sportivitas', 'Mental kuat'], cocok: 'kamu yang ingin bugar dan bisa menjaga diri.' },
  { nama: 'Voli', rumpun: 'Olahraga', emoji: '🏐', desc: 'Latihan bola voli dan turnamen antar sekolah.',
    detail: 'Voli mengasah teknik dasar dan strategi tim. Kekompakan adalah kunci kemenangan di lapangan.',
    kegiatan: ['Latihan passing, servis, dan smash', 'Latihan strategi tim', 'Turnamen antar sekolah'],
    skill: ['Kerja tim', 'Kebugaran', 'Sportivitas'], cocok: 'kamu yang suka olahraga tim dan tantangan bertanding.' },
  { nama: 'Futsal', rumpun: 'Olahraga', emoji: '⚽', desc: 'Latihan futsal dan pertandingan antar sekolah.',
    detail: 'Futsal melatih kontrol bola, kecepatan berpikir, dan kerja sama dalam permainan yang cepat.',
    kegiatan: ['Latihan dribbling dan passing', 'Latihan taktik dan posisi', 'Pertandingan persahabatan'],
    skill: ['Kerja tim', 'Kelincahan', 'Strategi'], cocok: 'kamu yang gemar sepak bola dan permainan cepat.' },
  { nama: 'MTQ', rumpun: 'Keagamaan', emoji: '📖', desc: 'Tilawah, tajwid, dan seni baca Al-Qur\'an.',
    detail: 'MTQ membina kemampuan membaca Al-Qur\'an dengan tajwid yang benar dan lagu yang indah, termasuk persiapan lomba.',
    kegiatan: ['Latihan tilawah dan tajwid', 'Latihan lagu (nagham)', 'Persiapan lomba MTQ'],
    skill: ['Tajwid', 'Seni suara', 'Ketekunan'], cocok: 'kamu yang suka membaca Al-Qur\'an dan ingin ikut lomba.' },
  { nama: 'Rebana', rumpun: 'Keagamaan', emoji: '🥁', desc: 'Seni musik islami dan shalawat.',
    detail: 'Rebana memadukan tabuhan dan lantunan shalawat. Grup ini biasa tampil di acara keagamaan sekolah.',
    kegiatan: ['Latihan tabuhan rebana', 'Melantunkan shalawat', 'Tampil di acara sekolah'],
    skill: ['Musikalitas', 'Kekompakan', 'Percaya diri'], cocok: 'kamu yang suka musik dan ingin tampil bersama tim.' },
  { nama: 'Rohis', rumpun: 'Keagamaan', emoji: '🕌', desc: 'Kajian, ibadah bersama, dan peringatan hari besar Islam.',
    detail: 'Rohis adalah wadah memperdalam ilmu agama dan mempererat persaudaraan lewat kegiatan rutin dan acara keagamaan.',
    kegiatan: ['Kajian rutin', 'Peringatan hari besar Islam', 'Bakti sosial'],
    skill: ['Kepemimpinan', 'Akhlak', 'Public speaking'], cocok: 'kamu yang ingin memperdalam agama bersama teman sebaya.' },
  { nama: 'Padus', rumpun: 'Seni', emoji: '🎤', desc: 'Paduan suara untuk acara sekolah dan lomba.',
    detail: 'Padus melatih teknik vokal dan harmoni suara bersama. Grup ini tampil di acara sekolah dan lomba.',
    kegiatan: ['Latihan vokal dan pernapasan', 'Latihan harmonisasi suara', 'Tampil di acara sekolah'],
    skill: ['Olah vokal', 'Harmoni', 'Percaya diri'], cocok: 'kamu yang suka bernyanyi bersama.' },
  { nama: 'Drumband', rumpun: 'Seni', emoji: '🎺', desc: 'Musik marching, formasi, dan atraksi yang megah.',
    detail: 'Drumband memadukan musik dan gerak. Setiap anggota memegang alat berbeda dan semuanya harus kompak.',
    kegiatan: ['Latihan alat musik marching', 'Latihan formasi dan koreografi', 'Tampil di karnaval dan upacara'],
    skill: ['Musikalitas', 'Kekompakan', 'Stamina'], cocok: 'kamu yang suka musik dan tampil megah beramai-ramai.' },
  { nama: 'Tari', rumpun: 'Seni', emoji: '💃', desc: 'Tari tradisional dan kreasi untuk pentas seni.',
    detail: 'Ekskul Tari melatih gerak, ekspresi, dan rasa seni lewat tari tradisional maupun kreasi, lalu tampil di pentas.',
    kegiatan: ['Latihan gerak dasar tari', 'Belajar tari tradisional dan kreasi', 'Pentas seni'],
    skill: ['Ekspresi', 'Kelenturan', 'Percaya diri'], cocok: 'kamu yang suka bergerak mengikuti irama dan tampil di panggung.' },
];

// Kepanjangan singkatan
const ARTI = { 'Paskibra': 'Pasukan Pengibar Bendera', 'PMR': 'Palang Merah Remaja', 'MTQ': "Musabaqah Tilawatil Qur'an",
  'Rohis': 'Rohani Islam', 'Padus': 'Paduan Suara' };

const WARNA = { 'Kepemimpinan': '#ff5a6e', 'Bahasa & Media': '#ffd23f', 'Olahraga': '#39ff88', 'Keagamaan': '#22e6ff', 'Seni': '#ff3dbb' };
// Statistik karakter per rumpun: [Fisik, Kreatif, Tim]
const STAT = { 'Kepemimpinan': [4, 2, 5], 'Bahasa & Media': [2, 5, 3], 'Olahraga': [5, 2, 4], 'Keagamaan': [2, 3, 5], 'Seni': [3, 5, 4] };
const LABEL_STAT = ['Fisik', 'Kreatif', 'Tim'];
const pips = (n) => '<span class="pips">' + [1,2,3,4,5].map(i => `<i class="${i <= n ? 'on' : ''}"></i>`).join('') + '</span>';
const statHTML = (r) => STAT[r].map((n, i) => `<span class="stat">${LABEL_STAT[i]}${pips(n)}</span>`).join('');

const $ = (s) => document.querySelector(s);
const grid = $('#ekskulGrid');
const filter = $('#filter');
const selectEkskul = $('#ekskul');   // dropdown di formulir
const form = $('#formDaftar');

// ===== Roster karakter, filter, dropdown =====
let aktifIdx = 0;

function renderKartu(rumpun = 'Semua') {
  const dipilih = selectEkskul.value;
  grid.innerHTML = '';
  EKSKUL.forEach((e, i) => {
    if (rumpun !== 'Semua' && e.rumpun !== rumpun) return;
    const b = document.createElement('button');
    b.type = 'button';
    b.dataset.i = i;
    b.className = 'tile' + (i === aktifIdx ? ' lihat' : '') + (e.nama === dipilih ? ' dipilih' : '');
    b.style.setProperty('--c', WARNA[e.rumpun]);
    b.setAttribute('aria-label', e.nama);
    b.innerHTML = `<span class="t-emoji" aria-hidden="true">${e.emoji}</span><span class="t-nm">${e.nama}</span>`;
    b.addEventListener('click', () => {
      tampilPanel(i);
      if (matchMedia('(max-width: 1023px)').matches) $('#panel').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    grid.appendChild(b);
  });
}

function renderFilter() {
  ['Semua', ...new Set(EKSKUL.map(e => e.rumpun))].forEach((r, i) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.textContent = r;
    b.className = 'chip' + (i === 0 ? ' aktif' : '');
    b.style.setProperty('--c', WARNA[r] || '#ffd23f');
    b.addEventListener('click', () => {
      filter.querySelectorAll('.chip').forEach(c => c.classList.remove('aktif'));
      b.classList.add('aktif');
      renderKartu(r);
    });
    filter.appendChild(b);
  });
}

function renderDropdown() {
  selectEkskul.innerHTML = '<option value="">Pilih ekstrakurikuler</option>' +
    EKSKUL.map(e => `<option value="${e.nama}">${e.nama}</option>`).join('');
}

// ===== Panel detail karakter =====
function tampilPanel(i) {
  aktifIdx = i;
  const e = EKSKUL[i], c = WARNA[e.rumpun], panel = $('#panel');
  grid.querySelectorAll('.tile').forEach(t => t.classList.toggle('lihat', +t.dataset.i === i));
  panel.style.setProperty('--c', c);
  panel.innerHTML = `
    <div class="p-head">
      <span class="p-emoji" aria-hidden="true">${e.emoji}</span>
      <div>
        <h3 class="font-pixel text-base sm:text-xl leading-snug">${e.nama}</h3>
        <p class="font-bold mt-1">${e.rumpun}${ARTI[e.nama] ? ' &middot; ' + ARTI[e.nama] : ''}</p>
      </div>
    </div>
    <div class="p-body">
      <div><p class="sh">APA ITU ${e.nama.toUpperCase()}?</p><p class="text-slate-200">${e.detail}</p></div>
      <div><p class="sh">FOTO DOKUMENTASI</p><div id="galeri" class="grid grid-cols-3 gap-2"></div></div>
      <div class="grid sm:grid-cols-2 gap-6">
        <div><p class="sh">KEGIATAN</p><ul class="list-disc pl-5 space-y-1 text-slate-200">${e.kegiatan.map(k => `<li>${k}</li>`).join('')}</ul></div>
        <div><p class="sh">SKILL YANG DIDAPAT</p><div class="flex flex-wrap gap-2">${e.skill.map(s => `<span class="skill">${s}</span>`).join('')}</div></div>
      </div>
      <div><p class="sh">COCOK UNTUK</p><p class="text-slate-200">${e.cocok.charAt(0).toUpperCase() + e.cocok.slice(1)}</p></div>
      <div class="space-y-2 max-w-xs">${statHTML(e.rumpun)}</div>
      <p class="text-xs text-slate-400">Jadwal latihan dan nama pembina: tanyakan ke pembina ekskul atau lihat pengumuman sekolah.</p>
      <button type="button" id="pilihIni" class="btn-game bg-gold text-black px-6 py-4 text-[10px] sm:text-xs">DAFTAR KE ${e.nama.toUpperCase()}</button>
    </div>`;

  // Galeri: img/<nama>-1.jpg sampai -3.jpg, placeholder jika belum ada
  const galeri = $('#galeri');
  for (let n = 1; n <= 3; n++) {
    const img = new Image();
    img.src = `img/${e.nama.toLowerCase()}-${n}.jpg`;
    img.alt = `Dokumentasi ${e.nama} ${n}`;
    img.loading = 'lazy';
    img.onerror = () => {
      const kosong = document.createElement('div');
      kosong.className = 'foto-kosong';
      kosong.innerHTML = `<span>${e.emoji}</span><small>Foto ${n}<br>segera hadir</small>`;
      img.replaceWith(kosong);
    };
    galeri.appendChild(img);
  }
  $('#pilihIni').addEventListener('click', () => pilihEkskul(e.nama));
}

// Dipakai tombol di mesin arcade
function bukaDetail(e) {
  tampilPanel(EKSKUL.indexOf(e));
  $('#pilih').scrollIntoView({ behavior: 'smooth' });
}

function pilihEkskul(nama) {
  selectEkskul.value = nama;
  validasi('ekskul');
  renderKartu(filter.querySelector('.aktif').textContent);
  $('#daftar').scrollIntoView({ behavior: 'smooth' });
  setTimeout(() => $('#nama').focus({ preventScroll: true }), 500);
}

// ===== Mesin arcade di hero (dijaga agar tidak mengganggu bagian lain) =====
function initArena() {
  const arena = $('#arena');
  if (!arena) return;
  let idx = 0, timer;
  const tampil = (i) => {
    idx = (i + EKSKUL.length) % EKSKUL.length;
    const e = EKSKUL[idx];
    arena.style.setProperty('--c', WARNA[e.rumpun]);
    $('#aNama').textContent = e.nama;
    $('#aRumpun').textContent = e.rumpun;
    const em = $('#aEmoji');
    em.textContent = e.emoji;
    em.classList.remove('pop'); void em.offsetWidth; em.classList.add('pop');
  };
  const putar = () => {
    clearInterval(timer);
    if (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    timer = setInterval(() => tampil(idx + 1), 3000);
  };
  $('#aPrev').addEventListener('click', () => { tampil(idx - 1); putar(); });
  $('#aNext').addEventListener('click', () => { tampil(idx + 1); putar(); });
  $('#aBtn').addEventListener('click', () => bukaDetail(EKSKUL[idx]));
  arena.addEventListener('mouseenter', () => clearInterval(timer));
  arena.addEventListener('mouseleave', putar);
  tampil(0);
  putar();
}

// ===== Aturan validasi =====
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const aturan = {
  nama: (v) => v.trim().length < 3 ? 'Nama lengkap wajib diisi, minimal 3 karakter.' : '',
  kelas: (v) => !v ? 'Pilih kelas kamu.' : '',
  email: (v) => !v.trim() ? 'Email wajib diisi.'
    : !EMAIL_REGEX.test(v.trim()) ? 'Format email belum benar. Contoh: nama@email.com' : '',
  password: (v) => v.length < 8 ? 'Password minimal 8 karakter.' : '',
  konfirmasi: (v) => !v ? 'Ketik ulang password kamu.'
    : v !== $('#password').value ? 'Konfirmasi password harus sama persis dengan password.' : '',
  ekskul: (v) => !v ? 'Pilih salah satu ekstrakurikuler.' : '',
};

function updateXP() {
  const ids = Object.keys(aturan);
  const benar = ids.filter(id => $('#' + id).classList.contains('is-valid')).length;
  const persen = Math.round(benar / ids.length * 100);
  $('#xpBar').style.width = persen + '%';
  $('#xpTxt').textContent = persen + '%';
}

function validasi(id) {
  const el = $('#' + id);
  const pesan = aturan[id](el.value);
  const teks = document.querySelector(`.error-msg[data-for="${id}"]`);
  el.classList.toggle('is-invalid', !!pesan);
  el.classList.toggle('is-valid', !pesan);
  el.setAttribute('aria-invalid', pesan ? 'true' : 'false');
  teks.textContent = pesan;
  updateXP();
  return !pesan;
}

// ===== Validasi real-time =====
Object.keys(aturan).forEach(id => {
  const el = $('#' + id);
  let disentuh = false;
  el.addEventListener('blur', () => { disentuh = true; validasi(id); });
  el.addEventListener('input', () => { if (disentuh) validasi(id); });
  el.addEventListener('change', () => { disentuh = true; validasi(id); });
});
$('#password').addEventListener('input', () => { if ($('#konfirmasi').value) validasi('konfirmasi'); });

document.querySelectorAll('.toggle-pw').forEach(btn => {
  btn.addEventListener('click', () => {
    const input = $('#' + btn.dataset.target);
    const tampil = input.type === 'password';
    input.type = tampil ? 'text' : 'password';
    btn.textContent = tampil ? 'Sembunyi' : 'Lihat';
  });
});

// ===== Submit =====
form.addEventListener('submit', (event) => {
  event.preventDefault(); // cegah halaman reload
  const hasil = Object.keys(aturan).map(validasi);
  const sukses = $('#sukses');

  if (hasil.includes(false)) {
    sukses.classList.add('hidden');
    const pertama = form.querySelector('.is-invalid');
    if (pertama) pertama.focus();
    return;
  }

  $('#suksesTeks').textContent =
    `${$('#nama').value.trim()} (kelas ${$('#kelas').value}) resmi bergabung di ekstrakurikuler ${$('#ekskul').value}. Pembina akan menghubungi lewat ${$('#email').value.trim()}.`;
  sukses.classList.remove('hidden');
  sukses.scrollIntoView({ behavior: 'smooth', block: 'center' });

  form.reset();
  form.querySelectorAll('.input').forEach(i => i.classList.remove('is-valid', 'is-invalid'));
  renderKartu(filter.querySelector('.aktif').textContent);
  updateXP();
});

// ===== Jalankan =====
renderDropdown();
renderFilter();
renderKartu();
tampilPanel(0);
try { initArena(); } catch (err) { console.error('Arena gagal:', err); }