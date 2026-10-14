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
  { nama: 'MTQ', rumpun: 'Keagamaan', emoji: '📖', desc: "Tilawah, tajwid, dan seni baca Al-Qur'an.",
    detail: "MTQ membina kemampuan membaca Al-Qur'an dengan tajwid yang benar dan lagu yang indah, termasuk persiapan lomba.",
    kegiatan: ['Latihan tilawah dan tajwid', 'Latihan lagu (nagham)', 'Persiapan lomba MTQ'],
    skill: ['Tajwid', 'Seni suara', 'Ketekunan'], cocok: "kamu yang suka membaca Al-Qur'an dan ingin ikut lomba." },
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

const WARNA = { 'Kepemimpinan': '#99151b', 'Bahasa & Media': '#c5222b', 'Olahraga': '#6b7280', 'Keagamaan': '#252a30', 'Seni': '#b04a50' };
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
const dialog = $('#detail');

// ===== Kartu, filter, dropdown =====
function renderKartu(rumpun = 'Semua') {
  const dipilih = selectEkskul.value;
  grid.innerHTML = '';
  let i = 0;
  EKSKUL.filter(e => rumpun === 'Semua' || e.rumpun === rumpun).forEach(e => {
    i++;
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'card-ekskul' + (e.nama === dipilih ? ' dipilih' : '');
    b.style.setProperty('--c', WARNA[e.rumpun]);
    b.style.animationDelay = Math.min(i * 40, 480) + 'ms';
    b.innerHTML = `<span class="icon" aria-hidden="true">${e.emoji}</span>
      <span class="nm">${e.nama}</span>
      <span class="tag">${e.rumpun}</span>
      <span class="ds">${e.desc}</span>
      <span class="more">Lihat detail &#8594;</span>`;
    b.addEventListener('click', () => { bunyiKlik(660); bukaDetail(e); });
    grid.appendChild(b);
  });
}

function renderFilter() {
  ['Semua', ...new Set(EKSKUL.map(e => e.rumpun))].forEach((r, i) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.textContent = r;
    b.className = 'chip' + (i === 0 ? ' aktif' : '');
    b.style.setProperty('--c', WARNA[r] || '#0a5cc4');
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

// ===== Detail karakter (dialog) =====
function bukaDetail(e) {
  const c = WARNA[e.rumpun];
  dialog.innerHTML = `
    <div class="sheet-head" style="--c:${c}"><span class="emoji-big" aria-hidden="true">${e.emoji}</span>
      <div><h3 class="font-pixel text-sm leading-relaxed">${e.nama}</h3><p class="font-bold mt-1">${e.rumpun}${ARTI[e.nama] ? ' &middot; ' + ARTI[e.nama] : ''}</p></div></div>
    <div class="sheet-body" style="--c:${c}">
      <p class="text-ink/80">${e.detail}</p>
      <div><p class="sh">FOTO DOKUMENTASI</p><div id="galeri" class="grid grid-cols-3 gap-2"></div></div>
      <div><p class="sh">KEGIATAN</p><ul class="list-disc pl-5 space-y-1 text-ink/80">${e.kegiatan.map(k => `<li>${k}</li>`).join('')}</ul></div>
      <div><p class="sh">SKILL YANG DIDAPAT</p><div class="flex flex-wrap gap-2">${e.skill.map(s => `<span class="skill" style="--c:${c}">${s}</span>`).join('')}</div></div>
      <div><p class="sh">COCOK UNTUK</p><p class="text-ink/80">${e.cocok.charAt(0).toUpperCase() + e.cocok.slice(1)}</p></div>
      <div class="space-y-2">${statHTML(e.rumpun)}</div>
      <p class="text-xs text-ink/50">Jadwal latihan dan nama pembina: tanyakan ke pembina ekskul atau lihat pengumuman sekolah.</p>
      <div class="flex flex-col sm:flex-row gap-3">
        <button type="button" id="pilihIni" class="btn-3d bg-mgold text-ink px-5 py-3 flex-1 text-[10px]">PILIH INI</button>
        <button type="button" id="tutup" class="btn-3d bg-white text-ink px-5 py-3 text-[10px]">TUTUP</button>
      </div>
    </div>`;
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
  $('#pilihIni').addEventListener('click', () => { dialog.close(); pilihEkskul(e.nama); });
  $('#tutup').addEventListener('click', () => dialog.close());
  dialog.showModal();
}
dialog.addEventListener('click', (ev) => { if (ev.target === dialog) dialog.close(); });

function pilihEkskul(nama) {
  selectEkskul.value = nama;
  validasi('ekskul');
  renderKartu(filter.querySelector('.aktif').textContent);
  $('#form').scrollIntoView({ behavior: 'smooth' });
  setTimeout(() => $('#nama').focus({ preventScroll: true }), 500);
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
  bunyiKlik(880, .12);

  form.reset();
  form.querySelectorAll('.input').forEach(i => i.classList.remove('is-valid', 'is-invalid'));
  renderKartu(filter.querySelector('.aktif').textContent);
  updateXP();
});

// ===== Jalankan =====
renderDropdown();
renderFilter();
renderKartu();


// ===== Musik latar (file lagu milik pengguna) =====
const bgm = $('#bgm');
const musicBtn = $('#musicBtn');
let musicOn = false;

if (musicBtn && bgm) {
  musicBtn.addEventListener('click', () => {
    musicOn = !musicOn;
    if (musicOn) {
      bgm.volume = 0.5;
      bgm.play().catch(() => { musicOn = false; updateMusicBtn(); });
    } else {
      bgm.pause();
    }
    updateMusicBtn();
  });

  bgm.addEventListener('ended', () => { musicOn = false; updateMusicBtn(); });

  function updateMusicBtn() {
    musicBtn.classList.toggle('on', musicOn);
    musicBtn.setAttribute('aria-pressed', String(musicOn));
    musicBtn.innerHTML = musicOn ? '&#128266; Musik' : '&#127925; Musik';
  }
}

// Bunyi klik lembut hanya jika musik sedang menyala (dipakai saat kartu dibuka / daftar berhasil)
function bunyiKlik() { /* nonaktif: memakai lagu sendiri, tidak perlu efek suara sintetis */ }
