"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import Image from "next/image";

const stats = [
  ["20+", "tahun jejak organisasi, tercatat sejak masa P2O 2003–2004"],
  ["4", "organisasi otonom terdokumentasi pada 2016"],
  ["2012", "tahun KAMI, media literasi IKSTIDA, berdiri"],
  ["8", "ragam kegiatan rutin dan tahunan"],
];
const nilai = [
  ["Persaudaraan", "P", "Menyatukan santri Timur Daya dan menghubungkan seluruh otonom dalam satu rumah. Silaturahmi antarotonom 2022 memaparkan asal-usul, potensi, dan pariwisata tiap daerah."],
  ["Kaderisasi", "K", "Pemilihan ketua, pelantikan, penyusunan program, rapat koordinasi, dan laporan pertanggungjawaban memberi pengalaman memimpin dan mengelola organisasi."],
  ["Literasi", "L", "KAMI sejak 2012 menjadi ruang menulis, jurnalistik, dan penyebaran informasi internal."],
  ["Budaya", "B", "Muhadharah 2020 mengangkat tari Muang Sangkal dan pertunjukan bernuansa silat."],
  ["Kebangsaan", "N", "Refleksi HUT RI ke-78 pada 2023: orasi kemerdekaan, kirab bendera, dan istigasah bersama."],
];
const struktur = [
  ["PP. Annuqayah Lubangsa", "Lingkungan kelembagaan pesantren"],
  ["P2O", "Penerangan dan Pembinaan Organisasi"],
  ["Pengurus IKSTIDA", "Koordinasi, program kerja, dan evaluasi"],
  ["Otonom, unit, dan divisi", "Perkumpulan per daerah asal dan bidang pengembangan"],
];
const perangkat = [
  ["DPA", "Dewan Perwakilan Anggota", "Terlibat dalam pemilihan ketua otonom dan pengawasan laporan pertanggungjawaban."],
  ["DPO", "Dewan Pembina Organisasi", "Disebut dalam pelantikan dan struktur organisasi daerah."],
  ["MPO", "Majelis Permusyawaratan Organisasi", "Dilantik bersama DPO dan DPA pada penutupan periode 2023–2024."],
];
const otonom = [
  ["IKSBAT", "Ikatan Santri Batuputih"],
  ["PASRA", "Persatuan Santri Gapura"],
  ["IKSABAD", "Ikatan Keluarga Santri Batang-Batang Dungkek"],
  ["IKSAL", "Ikatan Keluarga Santri Annuqayah Legung"],
];
const jejak = [
  ["2003–04", "Dokumentasi awal", "IKSTIDA tercatat sebagai salah satu dari sepuluh Orda yang dilantik pada masa P2O 2003–2004."],
  ["2012", "KAMI terbit", "Di bawah ketua Akhmad Riadi, Divisi III memprakarsai Kabar Asyik Mingguan IKSTIDA."],
  ["2016", "Penguatan otonom", "Rapat program kerja, penerimaan anggota baru, pemilihan ketua otonom, dan pelantikan serentak."],
  ["2020", "Jhung-Rojhung", "Muhadharah bertema “Ngangghi’ Serat Majhurbhu Bangsa” dengan tari dan silat."],
  ["2023", "Refleksi kemerdekaan", "Orasi, kirab bendera, dan istigasah bersama di bawah ketua Moh. Miftahol Khoiri."],
  ["2024", "Closing Activity", "22 Januari: penghargaan anggota dan ketua unit, teater Poar, pelantikan DPO, DPA, dan MPO."],
];
const kegiatan = [
  ["Rutinitas Orda", "Pertemuan berkala pengurus dan anggota."],
  ["Opening dan pelantikan", "Serah terima jabatan serta pelantikan otonom dan unit."],
  ["Muhadharah", "Penampilan dan gagasan bertema, termasuk kebudayaan lokal."],
  ["Silaturahmi antarotonom", "Forum koordinasi dan pengenalan potensi daerah."],
  ["KAMI dan pers", "Wadah karya tulis dan kabar kegiatan anggota."],
  ["Refleksi kemerdekaan", "Orasi, kirab bendera, dan istigasah."],
  ["Closing Activity", "Penutupan periode dan apresiasi anggota."],
  ["Rapat koordinasi", "Perencanaan program dan evaluasi kepengurusan."],
];
const tokoh = [
  ["Akhmad Riadi", "Ketua, saat KAMI didirikan", "2012"],
  ["Moh. Hosni", "Ketua IKSTIDA", "2015–2016"],
  ["Akhmad Zaini", "Ketua DPA", "2015–2016"],
  ["Subaidi Barma", "Ketua IKSTIDA", "2016–2017"],
  ["Yassir Arafat", "Ketua IKSTIDA", "2021"],
  ["Nurul Imama", "Ketua terpilih", "2022–2023"],
  ["Moh. Miftahol Khoiri", "Ketua Umum", "2023–2024"],
];
const orda = ["Iksaputra", "Persal", "IKSAJ", "Iksapansa", "ISI", "Isarat", "Iktiesa", "Iksbar", "Ikragil"];
type Berita = { tgl: string; h: string; p: string; href?: string; img?: string };
// Gambar berita: simpan di public/berita/ lalu isi img, misalnya img: "/berita/closing-2024.jpg"
// Ringkasan dari berita resmi PP. Annuqayah Lubangsa. Isi `href` dengan tautan berita aslinya.
const berita: Berita[] = [
  { tgl: "22 Januari 2024", h: "IKSTIDA tutup kegiatan periode 2023–2024", p: "Closing Activity memberi penghargaan kepada anggota dan ketua unit, menampilkan teater Poar, serta melantik pengurus DPO, DPA, dan MPO. Asy’arul Amin dari P2O memberi sambutan penutupan." },
  { tgl: "Agustus 2023", h: "Refleksi HUT RI ke-78", p: "Orasi kemerdekaan, kirab bendera, dan istigasah bersama untuk menumbuhkan nasionalisme dan patriotisme santri." },
  { tgl: "Agustus 2022", h: "Silaturahmi antarotonom", p: "Tiap otonom memaparkan keadaan, asal-usul, potensi, dan pariwisata daerahnya untuk mempererat persaudaraan." },
  { tgl: "2022–2023", h: "Pembukaan aktivitas dan pelantikan otonom", p: "Serah terima jabatan dan pelantikan otonom serta unit. Nurul Imama terpilih sebagai ketua." },
  { tgl: "2020", h: "Muhadharah Orda “Jhung-Rojhung”", p: "Pentas bertema kebudayaan dengan tari Muang Sangkal dan pertunjukan bernuansa silat, dihadiri anggota Orda lain." },
  { tgl: "2016", h: "Pemilihan ketua otonom", p: "IKSBAT, PASRA, IKSABAD, dan IKSAL memilih ketua dan menyampaikan laporan pertanggungjawaban." },
];
const karya = [
  ["Media", "KAMI", "Kabar Asyik Mingguan IKSTIDA, terbit sejak 2012 sebagai wadah tulisan dan kabar kegiatan anggota."],
  ["Teater", "Poar", "Pertunjukan teater yang tampil pada Closing Activity 22 Januari 2024."],
  ["Tari dan silat", "Muang Sangkal", "Tari tradisi dan pertunjukan bernuansa silat pada Muhadharah 2020."],
  ["Muhadharah", "Jhung-Rojhung", "Tema “Ngangghi’ Serat Majhurbhu Bangsa” yang mengangkat kebudayaan lokal."],
];
type Foto = { src?: string; cap: string };
// Taruh foto di public/galeri/ lalu isi `src`, misalnya "/galeri/closing-2024.jpg".
const galeri: Foto[] = [
  { cap: "Closing Activity 2024" },
  { cap: "Orasi dan kirab bendera 2023" },
  { cap: "Muhadharah 2020" },
  { cap: "Silaturahmi antarotonom 2022" },
  { cap: "Pelantikan otonom" },
  { cap: "Teater Poar" },
];


const P: Record<string, string> = {
  users: "M16 20v-1a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v1M9.5 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM21 20v-1a4 4 0 0 0-3-3.9M16 4.1a3.5 3.5 0 0 1 0 6.8",
  cap: "M22 9 12 4 2 9l10 5 10-5zM6 11.5V16c0 1.5 3 3 6 3s6-1.5 6-3v-4.5M22 9v6",
  book: "M4 4.5A2.5 2.5 0 0 1 6.5 2H20v17H6.5A2.5 2.5 0 0 0 4 21.5v-17zM8 7h8M8 11h6",
  mask: "M4 5h9v7a4.5 4.5 0 0 1-9 0V5zM7 9h.01M10 9h.01M6.5 13c1 1 3 1 4 0M13 8h7v6a4 4 0 0 1-7 2.6",
  flag: "M5 21V4M5 4h12l-2 4 2 4H5",
  scale: "M12 3v18M7 21h10M5 7h14M5 7l-3 7a3 3 0 0 0 6 0L5 7zM19 7l-3 7a3 3 0 0 0 6 0l-3-7z",
  shield: "M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3zM9 12l2 2 4-4",
  msg: "M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12zM8 11h8M8 14h5",
  cal: "M4 6h16v14H4zM4 10h16M8 3v4M16 3v4",
  spark: "M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3zM19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16z",
  mic: "M12 3a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3zM5 11a7 7 0 0 0 14 0M12 18v3M9 21h6",
  link: "M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3A4 4 0 0 0 11 18.7l1-1",
  news: "M5 4h12v16H5zM17 8h3v10a2 2 0 0 1-2 2M8 8h6M8 12h6M8 16h4",
  award: "M12 14a6 6 0 1 0 0-12 6 6 0 0 0 0 12zM8.5 13 7 22l5-3 5 3-1.5-9",
  clip: "M9 3h6v3H9zM7 5H5v16h14V5h-2M8.5 12l2 2 4-4",
  pen: "M4 20l1-4L16.5 4.5a2 2 0 0 1 3 3L8 19l-4 1zM14 7l3 3",
  music: "M9 18V5l11-2v13M9 18a3 3 0 1 1-3-3M20 16a3 3 0 1 1-3-3",
  clock: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 7v5l3 2",
  grid: "M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z",
  pin: "M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11zM12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z",
  photo: "M3 5h18v14H3zM3 16l5-5 4 4 3-3 6 6M16 9h.01",
  menu: "M4 7h16M4 12h16M4 17h16",
  x: "M6 6l12 12M18 6 6 18",
  quote: "M7 7h4v4H9a2 2 0 0 0 2 2v2a4 4 0 0 1-4-4V7zM15 7h4v4h-2a2 2 0 0 0 2 2v2a4 4 0 0 1-4-4V7z",
};
function Ico({ n, c = "" }: { n: string; c?: string }) {
  return (<svg className={`ic ${c}`} viewBox="0 0 24 24" aria-hidden="true"><path d={P[n]} /></svg>);
}
function Med({ n }: { n: string }) {
  return (<><i className="ico"><Ico n={n} /></i><Ico n={n} c="wm" /></>);
}
// Teks dipecah per kata: dipakai untuk judul (naik satu-satu) dan paragraf (menyala saat scroll).
function W({ t }: { t: string }) {
  return (<>{t.split(" ").map((w, i) => (<span key={i}><span className="wd"><i style={{ "--i": i } as CSSProperties}>{w}</i></span>{" "}</span>))}</>);
}
function Sw({ t }: { t: string }) {
  return (<p className="lead sw" data-sw>{t.split(" ").map((w, i) => (<span key={i}>{w} </span>))}</p>);
}
const IC = {
  nilai: ["users", "cap", "book", "mask", "flag"],
  per: ["scale", "shield", "msg"],
  keg: ["cal", "spark", "mic", "link", "news", "flag", "award", "clip"],
  karya: ["pen", "mask", "music", "mic"],
  ber: ["award", "flag", "link", "spark", "mask", "users"],
  st: ["clock", "users", "pen", "grid"],
};
// Logo bulat otonom: simpan di public/otonom/ lalu isi, misalnya IKSBAT: "/otonom/iksbat.png"
const logoOtonom: Record<string, string> = {};

// Gambar karya: simpan di public/karya/ lalu isi, misalnya KAMI: "/karya/kami.jpg"
const gambarKarya: Record<string, string> = {};
const menu = [["berita", "Berita", "news"], ["karya", "Karya", "pen"], ["tulis", "Karya Tulis", "book"], ["tentang", "Tentang", "users"], ["struktur", "Struktur", "scale"], ["jejak", "Jejak", "clock"], ["galeri", "Galeri", "photo"]];

const FX: Record<string, string> = {
  hex: "M12 2l9 5v10l-9 5-9-5V7z",
  ring: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z",
  spark: P.spark,
  plus: "M12 4v16M4 12h16",
  tri: "M12 3l10 18H2z",
};
const FXK = Object.keys(FX);
function Fx({ i }: { i: number }) {
  return (
    <div className="fx" aria-hidden="true">
      {[0.25, -0.18, 0.4].map((s, j) => (
        <svg key={j} className={`fxi f${j}`} data-p={s} data-rot={[0.6, -0.8, 1.2][j]} viewBox="0 0 24 24"><path d={FX[FXK[(i + j * 2) % FXK.length]]} /></svg>
      ))}
    </div>
  );
}
function Row() {
  return (<>{[0, 1].flatMap((k) => ["Persaudaraan", "Kaderisasi", "Literasi", "Budaya", "Kebangsaan"].map((w) => (<span key={k + w}>{w}<Ico n="spark" /></span>)))}</>);
}

// Karya tulis: ganti isi contoh di bawah dengan tulisan asli anggota.
// `isi` = daftar paragraf yang tampil di jendela baca. `href` (opsional) = tautan sumber asli.
type Tulisan = { jenis: string; judul: string; penulis: string; ringkas: string; isi: string[]; href?: string };
const JENIS = ["Semua", "Esai", "Puisi", "Cerpen", "Opini"];
const tulisan: Tulisan[] = [
  { jenis: "Esai", judul: "Judul esai pertama", penulis: "Nama penulis", ringkas: "Ringkasan singkat esai akan tampil di sini.", isi: ["Paragraf pertama esai. Ganti dengan tulisan asli anggota.", "Paragraf kedua esai."] },
  { jenis: "Puisi", judul: "Judul puisi pertama", penulis: "Nama penulis", ringkas: "Cuplikan atau gambaran singkat puisi akan tampil di sini.", isi: ["Bait pertama puisi. Ganti dengan karya asli anggota.", "Bait kedua puisi."] },
  { jenis: "Cerpen", judul: "Judul cerpen pertama", penulis: "Nama penulis", ringkas: "Sinopsis singkat cerpen akan tampil di sini.", isi: ["Pembuka cerpen. Ganti dengan karya asli anggota.", "Lanjutan cerpen."] },
  { jenis: "Opini", judul: "Judul opini pertama", penulis: "Nama penulis", ringkas: "Inti gagasan opini akan tampil di sini.", isi: ["Paragraf pertama opini. Ganti dengan tulisan asli anggota.", "Paragraf kedua opini."] },
  { jenis: "Esai", judul: "Judul esai kedua", penulis: "Nama penulis", ringkas: "Ringkasan singkat esai kedua akan tampil di sini.", isi: ["Isi esai kedua."] },
  { jenis: "Puisi", judul: "Judul puisi kedua", penulis: "Nama penulis", ringkas: "Cuplikan puisi kedua akan tampil di sini.", isi: ["Isi puisi kedua."] },
  { jenis: "Cerpen", judul: "Judul cerpen kedua", penulis: "Nama penulis", ringkas: "Sinopsis cerpen kedua akan tampil di sini.", isi: ["Isi cerpen kedua."] },
  { jenis: "Opini", judul: "Judul opini kedua", penulis: "Nama penulis", ringkas: "Inti gagasan opini kedua akan tampil di sini.", isi: ["Isi opini kedua."] },
];

const css = `.ik{--g:linear-gradient(90deg,#5ee0ff,#1aa3dc 55%,#4f7bff);--gold:#e9b949;--line:rgba(120,190,255,.2);--mut:#a9bfe0;--k:1;background:#040b1f;color:#e8f1ff;font:17px/1.65 var(--font-body),system-ui,sans-serif;overflow-x:clip}
.ik *{box-sizing:border-box}
.ik h1,.ik h2,.ik h3,.ik p{margin:0}
.ik h1,.ik h2,.ik h3,.ik b,.brand{font-family:var(--font-display),system-ui,sans-serif}
.ik a{color:inherit;text-decoration:none}
.ik a:focus-visible{outline:3px solid var(--gold);outline-offset:3px}
.wrap{max-width:1160px;margin:0 auto;padding:0 24px}
.sec{padding:96px 0}
.sec h2{font-size:clamp(30px,4.4vw,46px);line-height:1.1;font-weight:800;letter-spacing:-.02em;max-width:22ch;color:#fff}
.sec h2::after{content:"";display:block;width:64px;height:4px;margin-top:18px;border-radius:2px;background:var(--g)}
.lead{max-width:64ch;margin-top:18px;font-size:18px;color:var(--mut)}

.nav{position:fixed;inset:0 0 auto 0;z-index:20;display:flex;justify-content:space-between;align-items:center;gap:16px;padding:12px 24px;background:#040b1f;border-bottom:1px solid var(--line)}
.ik .brand,.ik .nav a{color:#fff}
.brand{display:flex;align-items:center;gap:10px;font-weight:800;font-size:21px;letter-spacing:.02em}
.nav nav{display:flex;gap:26px;font-size:15px;font-weight:500}
.nav nav a{opacity:.88}.nav nav a:hover{opacity:1}

.hero{position:relative;overflow:hidden;padding:140px 0 0;background:radial-gradient(800px 560px at 82% 32%,rgba(26,163,220,.36),transparent 70%),radial-gradient(700px 480px at 6% 0,rgba(79,123,255,.26),transparent 70%),linear-gradient(180deg,#040b1f,#071533)}
.hero-grid{position:absolute;inset:0;background-image:linear-gradient(rgba(120,190,255,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(120,190,255,.06) 1px,transparent 1px);background-size:64px 64px}
.hero-in{position:relative;display:grid;grid-template-columns:1.15fr .85fr;gap:56px;align-items:center}
.badge{display:inline-block;padding:8px 18px;border:1px solid rgba(233,185,73,.55);border-radius:99px;font-size:14px;color:#f3dfa3}
.ik h1{margin-top:24px;font-size:clamp(40px,6vw,74px);line-height:1.03;font-weight:800;letter-spacing:-.03em;color:#fff}
.hero-sub{max-width:52ch;margin-top:24px;font-size:19px;color:var(--mut)}
.cta{display:flex;flex-wrap:wrap;gap:14px;margin-top:36px}
.btn{padding:15px 30px;border-radius:99px;font-weight:700;transition:transform .15s}
.btn:hover{transform:translateY(-2px)}
.ik .pri{background:var(--g);color:#04122e}.ik .sec2{border:1px solid rgba(255,255,255,.55);color:#fff}
.emblem{position:relative;width:min(100%,400px);aspect-ratio:1;margin:0 auto;display:grid;place-items:center}
.emblem::before{content:"";position:absolute;inset:0;border-radius:50%;background:radial-gradient(circle at 35% 28%,#1aa3dc,#0a3d91 52%,#06143a);border:1px solid rgba(233,185,73,.65)}
.emblem::after{content:"";position:absolute;inset:-24px;border-radius:50%;border:1px solid var(--line)}
.emblem img{position:relative;width:64%;height:auto}
.facts{position:relative;display:grid;grid-template-columns:repeat(4,1fr);gap:20px;margin-top:80px;border-top:1px solid var(--line)}
.facts div{padding:30px 0 40px}
.facts b{display:block;font-size:clamp(36px,5vw,54px);line-height:1;font-weight:800;background:var(--g);-webkit-background-clip:text;background-clip:text;color:transparent}
.facts span{display:block;margin-top:10px;font-size:14.5px;color:var(--mut);max-width:24ch}

.grid{display:grid;gap:20px;margin-top:48px}
.g2{grid-template-columns:repeat(2,1fr)}.g3{grid-template-columns:repeat(3,1fr)}.g4{grid-template-columns:repeat(4,1fr)}
.g5{grid-template-columns:repeat(6,1fr)}.g5 .card{grid-column:span 2}.g5 .card:nth-child(-n+2){grid-column:span 3}
.card{position:relative;padding:32px 26px 30px;border-radius:22px;background:linear-gradient(160deg,rgba(94,224,255,.09),rgba(79,123,255,.03));border:1px solid var(--line);transition:translate .2s,border-color .2s}
.card::before{content:"";position:absolute;left:26px;top:-1px;width:56px;height:3px;border-radius:0 0 3px 3px;background:var(--g)}
.card:hover{translate:0 -4px;border-color:rgba(94,224,255,.6)}
.ik .card h3{font-size:21px;color:#fff;margin-bottom:8px}
.card p{font-size:15.5px;color:var(--mut)}
.card time{display:block;margin-bottom:8px;font-size:14px;font-weight:700;color:var(--gold)}
.card em{display:inline-block;margin-bottom:12px;padding:3px 12px;border:1px solid rgba(233,185,73,.55);border-radius:99px;font-style:normal;font-size:13px;color:#f3dfa3}
.card .abbr{display:block;margin-bottom:10px;font-family:var(--font-display);font-size:34px;font-weight:800;background:var(--g);-webkit-background-clip:text;background-clip:text;color:transparent}
.card a{display:inline-block;margin-top:14px;font-weight:700;color:#5ee0ff}
.news{grid-template-columns:repeat(3,1fr)}.news .card:first-child{grid-column:span 2}

.tier{list-style:none;padding:0;margin:48px auto 0;max-width:620px;display:grid;gap:28px}
.tier li{position:relative;padding:18px 22px;text-align:center;border-radius:18px;border:1px solid rgba(94,224,255,.4);background:linear-gradient(160deg,#0c2a6b,#071533)}
.tier li:nth-child(2){width:92%;margin:0 auto}.tier li:nth-child(3){width:84%;margin:0 auto}.tier li:nth-child(4){width:76%;margin:0 auto}
.tier li:not(:last-child)::after{content:"";position:absolute;left:50%;bottom:-28px;width:2px;height:28px;background:var(--gold)}
.tier b{display:block;font-size:20px;color:#fff}.tier span{font-size:14.5px;color:var(--mut)}

.tl{list-style:none;padding:0;margin:48px 0 0;border-left:2px solid var(--line)}
.tl li{position:relative;display:grid;grid-template-columns:130px 1fr;gap:6px 24px;padding:0 0 38px 32px}
.tl li::before{content:"";position:absolute;left:-7px;top:10px;width:12px;height:12px;border-radius:50%;background:var(--gold)}
.tl b{font-size:26px;color:var(--gold)}
.ik .tl h3{font-size:21px;color:#fff;margin-bottom:4px}.tl p{max-width:62ch;color:var(--mut)}

.kami{padding:52px 44px;border-radius:30px;background:linear-gradient(120deg,#0a3d91,#1aa3dc 70%,#5ee0ff);color:#04122e}
.ik .kami h2,.ik .kami p{color:#fff}.kami .lead{color:#eaf6ff}
.kami h2::after{background:#fff}

.roll{list-style:none;padding:0;margin:40px 0 0;display:grid;gap:12px}
.roll li{display:grid;grid-template-columns:1.2fr 1.4fr auto;gap:16px;align-items:center;padding:16px 24px;border-radius:16px;border:1px solid var(--line);background:rgba(94,224,255,.05)}
.roll b{font-size:19px;color:#fff}.roll span{color:var(--mut)}.roll i{font-style:normal;font-weight:700;color:var(--gold)}
.ik .subh{margin:60px 0 18px;font-size:22px;color:#fff}
.chips{display:flex;flex-wrap:wrap;gap:12px}
.chips span{padding:10px 20px;border-radius:99px;border:1px solid rgba(94,224,255,.45);font-weight:600}

.ph{position:relative;overflow:hidden;margin:0;border-radius:22px;border:1px solid var(--line);display:flex;align-items:flex-end;background:linear-gradient(135deg,#0a3d91,#06143a)}
.ph.v1{background:linear-gradient(200deg,#1aa3dc,#0a3d91 60%,#06143a)}
.ph.v2{background:linear-gradient(160deg,#4f7bff,#071533)}
.ph.v3{background:linear-gradient(120deg,#0c2a6b,#040b1f 60%,#1aa3dc)}
.ph img{object-fit:cover}
.ph figcaption{position:relative;width:100%;padding:36px 20px 16px;font-weight:700;color:#fff;background:linear-gradient(180deg,rgba(4,11,31,0),rgba(4,11,31,.88))}

.todo{text-align:center}.todo h2,.todo .lead{margin-inline:auto}.todo h2::after{margin-inline:auto}
.foot{border-top:1px solid var(--line);padding:48px 0;font-size:15px}
.foot .wrap{display:flex;gap:18px;align-items:flex-start}
.foot p{max-width:60ch;margin:4px 0 8px;color:var(--mut)}.foot small{color:#7f98c4}
.foot b{color:#fff}

.ik svg.ic{width:24px;height:24px;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}
.card{--c:#5ee0ff;overflow:hidden}
.card:nth-child(4n+2){--c:#ffc84a}.card:nth-child(4n+3){--c:#4f9bff}.card:nth-child(4n){--c:#43d6a0}
.card::before{width:72px;background:linear-gradient(90deg,var(--c),transparent)}
.card:hover{border-color:var(--c)}
.ico{display:grid;place-items:center;width:56px;height:62px;margin-bottom:18px;clip-path:polygon(50% 0,100% 25%,100% 75%,50% 100%,0 75%,0 25%);background:linear-gradient(160deg,var(--c),#0a3d91);color:#04122e}
.ik .ico svg{width:26px;height:26px;stroke-width:2}
.ik svg.wm{position:absolute;right:-18px;bottom:-22px;width:150px;height:150px;stroke:var(--c);stroke-width:1.1;opacity:.13;pointer-events:none;transform:rotate(-10deg)}
.ik svg.si{width:30px;height:30px;margin-bottom:14px;stroke:var(--gold)}
.ik svg.bi{width:16px;height:16px;margin:-3px 8px -3px 0;vertical-align:middle;stroke:#f3dfa3}
.ik svg.phi{position:absolute;left:50%;top:42%;width:46px;height:46px;margin:-23px 0 0 -23px;stroke:rgba(255,255,255,.35)}
.ocard{text-align:center;padding-top:40px}
.ocard::before{left:50%;margin-left:-36px}
.logo{position:relative;width:112px;height:112px;margin:0 auto 18px;padding:3px;border-radius:50%;background:conic-gradient(from 200deg,var(--c),#0a3d91,#ffc84a,var(--c))}
.logo>span{position:relative;display:grid;place-items:center;width:100%;height:100%;border-radius:50%;overflow:hidden;background:#071533;color:rgba(255,255,255,.4)}
.logo img{object-fit:cover}
.ik .logo svg{width:40px;height:40px}
.foot{background:#05070d}
.ik section[id]{scroll-margin-top:60px}
.lt{background-color:#f5f9ff;background-image:radial-gradient(rgba(10,61,145,.1) 1px,transparent 1px);background-size:22px 22px;color:#0b1f4d;--mut:#4a5f8a;--line:rgba(10,61,145,.2)}
.bk{background-color:#05070d;background-image:linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px);background-size:56px 56px;--mut:#a3b3cf;--line:rgba(255,255,255,.16)}
.bl{background:linear-gradient(135deg,#06143a 0%,#0a3d91 55%,#1aa3dc 135%);--mut:#d3e6ff;--line:rgba(255,255,255,.3)}
.ik .lt h2,.ik .lt .card h3,.ik .lt .subh,.ik .lt .roll b{color:#0b1f4d}
.ik .lt .kami h2{color:#fff}
.lt h2::after{background:linear-gradient(90deg,#0a3d91,#1aa3dc)}
.lt .card{background:#fff}
.lt .card time,.lt .roll i{color:#a67a0a}
.lt .card em{color:#7a5a08;border-color:#d9a82a}
.lt .card a{color:#0a3d91}
.lt .card .abbr{background-image:linear-gradient(90deg,#0a3d91,#1aa3dc)}
.lt .roll li{background:#fff}
.lt .chips span{background:#fff;border-color:#9cc3f0;color:#0b1f4d}
.bl .card{background:rgba(4,17,52,.55)}
.thumb{position:relative;overflow:hidden;aspect-ratio:16/10;margin:0 0 20px;border-radius:16px;background:linear-gradient(135deg,#0a3d91,var(--c) 170%)}
.thumb img{object-fit:cover}
.thumb .ico.tag{position:absolute;left:14px;bottom:12px;margin:0;width:46px;height:51px}
.news .card:first-child{display:grid;grid-template-columns:1.05fr 1fr;gap:28px;align-items:center}
.news .card:first-child .thumb{aspect-ratio:auto;height:100%;min-height:250px;margin:0}
.burger{display:none;place-items:center;width:44px;height:44px;border:1px solid var(--line);border-radius:12px;background:transparent;cursor:pointer}
.ik .burger{color:#fff}
.scrim,.drawer{display:none}
.scrim{position:fixed;inset:0;z-index:30;background:rgba(0,0,0,.65);opacity:0;visibility:hidden;transition:opacity .25s,visibility .25s}
.scrim.on{opacity:1;visibility:visible}
.drawer{position:fixed;top:0;right:0;bottom:0;z-index:40;width:min(84vw,330px);padding:18px 20px 28px;flex-direction:column;gap:6px;overflow-y:auto;background:linear-gradient(180deg,#0a3d91,#05070d 32%);border-left:1px solid var(--line);transform:translateX(100%);visibility:hidden;transition:transform .28s ease,visibility .28s}
.drawer.on{transform:none;visibility:visible}
.dhead{display:flex;justify-content:space-between;align-items:center;margin-bottom:18px}
.ik .drawer a.dl{display:flex;align-items:center;gap:14px;padding:14px 12px;border-radius:14px;font-weight:600;font-size:18px;color:#fff}
.ik .drawer a.dl:hover{background:rgba(94,224,255,.14)}
.ik .drawer a.dl svg{stroke:#5ee0ff}
.dfoot{margin-top:auto;padding-top:24px;font-size:13px;color:#9db4d8}
@media (prefers-reduced-motion:no-preference){html{scroll-behavior:smooth}}
@keyframes fin{from{opacity:0;transform:translateY(14px)}}
@media (max-width:900px){
  .hero-in{grid-template-columns:1fr;gap:44px}.emblem{order:-1;width:min(62%,280px)}
  .facts,.g4{grid-template-columns:1fr 1fr}.g3,.news{grid-template-columns:1fr 1fr}.news .card:first-child{grid-column:1/-1}
  .g5{grid-template-columns:1fr 1fr}.g5 .card,.g5 .card:nth-child(-n+2){grid-column:auto}
}
@media (max-width:640px){
  .ik{font-size:16px;--k:.6}.sec{padding:68px 0}.hero{padding-top:128px}
  .nav{padding:10px 18px}
  .g2,.g3,.g4,.g5,.news{grid-template-columns:1fr}.news .card:first-child{grid-column:auto}
  .facts{gap:0 16px}.tl li{grid-template-columns:1fr}.roll li{grid-template-columns:1fr;gap:2px}
  .kami{padding:36px 24px}
  .btn{width:100%;text-align:center}
}
@media (max-width:900px){
  .nav nav{display:none}.burger{display:grid}.scrim{display:block}.drawer{display:flex}
  .news .card:first-child{display:block}.news .card:first-child .thumb{aspect-ratio:16/10;height:auto;min-height:0;margin:0 0 20px}
}
.prog{position:fixed;top:0;left:0;right:0;height:3px;z-index:50;background:linear-gradient(90deg,#5ee0ff,#ffc84a);transform:scaleX(0);transform-origin:left}
.nav{transition:padding .25s,background .25s}.nav.sc{padding-block:8px;background:#02060f}
.hero-grid{inset:-160px 0 0;transform:translate3d(0,calc(var(--y,0)*.18px),0)}
.badge{animation:fin .8s both}.hero-sub{animation:fin .8s .5s both}.cta{animation:fin .8s .65s both}
.emblem{animation:zin 1.1s .2s both}
.ik .emblem img{animation:flt 7s ease-in-out infinite}
.orb{position:absolute;inset:-24px;border-radius:50%;animation:spin 20s linear infinite}
.orb::before{content:"";position:absolute;left:50%;top:-5px;width:10px;height:10px;margin-left:-5px;border-radius:50%;background:var(--gold)}
.pri{position:relative;overflow:hidden}
.pri::after{content:"";position:absolute;top:0;bottom:0;left:0;width:35%;background:linear-gradient(100deg,transparent,rgba(255,255,255,.6),transparent);transform:translateX(-160%) skewX(-20deg);animation:shine 5s 1.6s infinite}
.ico{transition:transform .3s}
.card:hover .ico{transform:rotate(-8deg) scale(1.1)}
.ik svg.wm{transition:transform .6s}
.ik .card:hover svg.wm{transform:rotate(-2deg) translate(-8px,-8px)}
.thumb img{transition:transform .7s}
.card:hover .thumb img{transform:scale(1.06)}
.logo{transition:transform .5s}.card:hover .logo{transform:rotate(18deg)}
.logo>span{transition:transform .5s}.card:hover .logo>span{transform:rotate(-18deg)}
@keyframes zin{from{opacity:0;transform:scale(.9)}}
@keyframes flt{50%{transform:translateY(-10px)}}
@keyframes spin{to{transform:rotate(360deg)}}
@keyframes shine{0%{transform:translateX(-160%) skewX(-20deg)}40%,100%{transform:translateX(480%) skewX(-20deg)}}
@keyframes wup{from{transform:translateY(118%) rotate(8deg)}}
.sec{position:relative;overflow:clip}
.sec>.wrap{position:relative;z-index:1}
.fx{position:absolute;inset:0;pointer-events:none}
.ik svg.fxi{position:absolute;fill:none;stroke:currentColor;stroke-width:.8;stroke-linejoin:round;opacity:.3}
.fxi.f0{width:96px;height:96px;right:5%;top:8%}.fxi.f1{width:64px;height:64px;left:3%;top:46%}.fxi.f2{width:130px;height:130px;right:9%;bottom:5%}
.lt .fx{color:#1aa3dc}.bk .fx{color:#5ee0ff}.bl .fx{color:#fff}
.thumb img{scale:1.18}
.drift{overflow:hidden;background:#05070d;padding:30px 0;border-block:1px solid rgba(255,255,255,.1)}
.drift>div{display:flex;align-items:center;gap:36px;width:max-content;margin-left:-900px;white-space:nowrap;font-family:var(--font-display);font-weight:800;font-size:clamp(48px,9vw,112px);line-height:1.15;color:transparent;-webkit-text-stroke:1px rgba(94,224,255,.6);transform:skewX(calc(var(--v,0)*-16deg))}
.drift>div+div{-webkit-text-stroke-color:rgba(255,200,74,.55)}
.drift span{display:inline-flex;align-items:center;gap:36px}
.ik .drift svg{width:.45em;height:.45em;stroke:#5ee0ff;stroke-width:1.4}
.tl{position:relative}
.tl::before{content:"";position:absolute;left:-2px;top:0;bottom:0;width:2px;background:linear-gradient(var(--gold),#5ee0ff);transform:scaleY(var(--tp,0));transform-origin:top}
.tl::after{content:"";position:absolute;left:-8px;top:calc(var(--tp,0)*100%);width:14px;height:14px;margin-top:-7px;border-radius:50%;background:#fff;box-shadow:0 0 0 4px rgba(94,224,255,.35),0 0 22px 8px rgba(94,224,255,.75)}
.tulis{display:grid;grid-template-columns:.8fr 1.2fr;gap:56px;align-items:start}
.tintro{position:sticky;top:96px}
.tabs{display:flex;flex-wrap:wrap;gap:10px;margin-top:26px}
.tab{padding:8px 18px;border-radius:99px;border:1px solid #9cc3f0;background:#fff;color:#0b1f4d;font:600 15px var(--font-body),system-ui,sans-serif;cursor:pointer;transition:background .2s,color .2s,transform .15s}
.tab:hover{transform:translateY(-2px)}
.tab.on{background:#0a3d91;border-color:#0a3d91;color:#fff}
.sheets{display:grid;grid-template-columns:1fr 1fr;gap:22px}
.sheet{position:relative;padding:34px 24px 22px 56px;border-radius:6px 22px 6px 22px;border:1px solid var(--line);background:#fff repeating-linear-gradient(transparent 0 27px,rgba(26,163,220,.2) 27px 28px);transition:translate .25s,rotate .25s,border-color .25s}
.sheet:nth-child(odd){rotate:-.8deg}.sheet:nth-child(even){rotate:.8deg;margin-top:26px}
.sheet:hover{rotate:0deg;translate:0 -4px;border-color:#1aa3dc}
.sheet::after{content:"";position:absolute;left:38px;top:0;bottom:0;width:1px;background:rgba(233,185,73,.7)}
.ik svg.qm{position:absolute;left:8px;top:14px;width:24px;height:24px;stroke:#1aa3dc;fill:rgba(26,163,220,.18)}
.sheet em{font-style:normal;font-size:13px;font-weight:700;color:#7a5a08}
.ik .sheet h3{margin:4px 0 8px;font-size:21px;color:#0b1f4d}
.sheet p{font-size:15.5px;color:var(--mut);line-height:28px}
.sheet footer{display:flex;align-items:center;gap:8px;margin-top:14px;font-size:14px;font-weight:600;color:#0a3d91}
.ik .sheet footer svg{width:16px;height:16px}
.sheet footer button{margin-left:auto;padding:0;border:0;background:none;font:inherit;color:#0a3d91;text-decoration:underline;cursor:pointer}
.empty{grid-column:1/-1;padding:24px;color:var(--mut)}
.modal{position:fixed;inset:0;z-index:60;display:grid;place-items:center;padding:20px;background:rgba(2,6,15,.78);animation:fin .25s both}
.paper{width:min(680px,100%);max-height:86vh;overflow:auto;padding:40px 36px 24px 64px;border-radius:8px 24px 8px 24px;background:linear-gradient(90deg,transparent 43px,rgba(233,185,73,.7) 43px 44px,transparent 44px),repeating-linear-gradient(transparent 0 31px,rgba(26,163,220,.2) 31px 32px),#fff;color:#4a5f8a;line-height:32px}
.paper em{font-style:normal;font-size:13px;font-weight:700;color:#7a5a08}
.ik .paper h3{margin:0;font-size:28px;line-height:36px;color:#0b1f4d}
.paper small{display:block;margin-bottom:32px;color:#0a3d91;font-weight:600}
.ik .paper p{margin:0 0 32px;color:#233a6b}
.mclose{float:right;width:40px;height:40px;display:grid;place-items:center;margin:-18px -14px 0 12px;border:1px solid rgba(10,61,145,.25);border-radius:12px;background:#fff;color:#0b1f4d;cursor:pointer}
@media (max-width:900px){.tulis{grid-template-columns:1fr;gap:32px}.tintro{position:static}}
@media (max-width:640px){.sheets{grid-template-columns:1fr}.sheet:nth-child(even){margin-top:0}.fxi.f0{width:60px;height:60px}.fxi.f2{width:80px;height:80px}.fxi.f1{display:none}.drift>div{margin-left:-500px}.paper{padding:32px 20px 16px 52px;background:linear-gradient(90deg,transparent 35px,rgba(233,185,73,.7) 35px 36px,transparent 36px),repeating-linear-gradient(transparent 0 31px,rgba(26,163,220,.2) 31px 32px),#fff}}

.rail{position:fixed;right:18px;top:50%;translate:0 -50%;z-index:15;display:flex;flex-direction:column;gap:18px;padding:10px 0}
.rail::before{content:"";position:absolute;left:50%;top:0;bottom:0;width:1px;margin-left:-.5px;background:rgba(120,190,255,.3)}
.rail::after{content:"";position:absolute;left:50%;top:0;bottom:0;width:2px;margin-left:-1px;background:linear-gradient(#5ee0ff,#ffc84a);transform:scaleY(var(--pg,0));transform-origin:top}
.rail a{position:relative;z-index:1;width:12px;height:12px;border-radius:50%;background:#040b1f;border:2px solid #5ee0ff;transition:transform .25s,background .25s,border-color .25s}
.rail a.on{background:#ffc84a;border-color:#ffc84a;transform:scale(1.5)}
.rail a span{position:absolute;right:24px;top:50%;translate:0 -50%;padding:3px 10px;border-radius:99px;background:#040b1f;border:1px solid rgba(120,190,255,.3);font-size:12px;line-height:1.5;white-space:nowrap;color:#fff;opacity:0;pointer-events:none;transition:opacity .2s}
.rail a:hover span{opacity:1}
@media (max-width:900px){.rail{display:none}}

/* kata-kata: judul naik satu-satu */
.wd{display:inline-block;overflow:hidden;vertical-align:top;padding:.04em .03em .16em;margin:-.04em -.03em -.16em}
.wd i{display:inline-block;font-style:normal;transform-origin:0 100%;transform:translateY(calc((1 - var(--w,1))*118%)) rotate(calc((1 - var(--w,1))*8deg))}
.hero h1 .wd i{animation:wup .9s cubic-bezier(.2,.8,.2,1) both;animation-delay:calc(.15s + var(--i)*.1s)}

/* galeri horizontal: layar terkunci, scroll menggeser ke samping */
.hz-pin{padding:96px 0}
.hz-head{width:100%}
.hz-track{display:flex;gap:20px;padding:40px 24px 12px;overflow-x:auto;scroll-snap-type:x mandatory}
.hz-track .ph{flex:none;width:min(76vw,540px);height:min(52vh,400px);scroll-snap-align:center}
.ph .no{position:absolute;top:12px;left:18px;font-size:54px;line-height:1;font-weight:800;color:transparent;-webkit-text-stroke:1px rgba(255,255,255,.7)}
.hz-bar{display:none;width:min(1112px,calc(100% - 48px));height:4px;margin:0 auto;border-radius:2px;background:rgba(255,255,255,.2);overflow:hidden}
.hz-bar i{display:block;height:100%;background:linear-gradient(90deg,#5ee0ff,#ffc84a);transform:scaleX(var(--hp,0));transform-origin:left}

/* ====== mesin animasi scroll (aktif setelah JS jalan) ====== */
.js [data-s]{--p:0;transition:border-color .25s,background .3s,box-shadow .3s,translate .25s,rotate .25s,scale .3s}
.js [data-s=rise]{transform:translateY(calc((1 - var(--p))*90px*var(--k))) scale(calc(.88 + var(--p)*.12));opacity:min(1,calc(var(--p)*2.2))}
.js [data-s=flipx]{transform:perspective(900px) rotateX(calc((1 - var(--p))*55deg*var(--k))) translateY(calc((1 - var(--p))*70px*var(--k)));transform-origin:50% 100%;opacity:min(1,calc(var(--p)*2.2))}
.js [data-s=flipy]{transform:perspective(900px) rotateY(calc((1 - var(--p))*var(--dir,1)*80deg*var(--k))) scale(calc(.8 + var(--p)*.2));opacity:min(1,calc(var(--p)*2.2))}
.js [data-s=spin]{transform:rotate(calc((1 - var(--p))*-200deg*var(--k))) scale(calc(.3 + var(--p)*.7));opacity:min(1,calc(var(--p)*2.5))}
.js [data-s=slide]{transform:translateX(calc((1 - var(--p))*var(--dir,1)*140px*var(--k))) rotate(calc((1 - var(--p))*var(--dir,1)*7deg));opacity:min(1,calc(var(--p)*2.2))}
.js [data-s=pop]{transform:scale(calc(.4 + var(--p)*.6)) rotate(calc((1 - var(--p))*var(--dir,1)*14deg));opacity:min(1,calc(var(--p)*2.5))}
.js [data-s=zoom]{transform:scale(calc(.82 + var(--p)*.18));opacity:min(1,calc(var(--p)*2))}
.js [data-s=page]{transform:perspective(1100px) rotateY(calc((1 - var(--p))*-95deg*var(--k)));transform-origin:0 50%;opacity:min(1,calc(var(--p)*2.5))}
.js [data-s=words] .wd i{--w:clamp(0,calc(var(--p)*1.9 - var(--i)*.14),1)}
.js h2[data-s]::after{transform:scaleX(min(1,calc(var(--p)*2.2)));transform-origin:left}
.js .todo h2[data-s]::after{transform-origin:center}
.js .tl li::before{transform:scale(var(--p))}
.js .tier li::after{transform:scaleY(var(--p));transform-origin:top}
.js .sw span{opacity:.22;transition:opacity .3s}
.js .sw span.on{opacity:1}
.js .sec{--e:1}
.js .sec:not(.todo){border-radius:calc((1 - var(--e))*44px) calc((1 - var(--e))*44px) 0 0}
.js .sec:not(.todo):not(.hz){transform:scale(calc(.95 + var(--e)*.05));transform-origin:50% 0}
.js .sec>.wrap{translate:0 calc((1 - var(--e))*50px)}
.js .todo{clip-path:circle(calc(var(--e)*85%) at 50% 50%)}
.js .hero-copy{translate:0 calc(var(--h,0)*-70px);opacity:calc(1 - var(--h,0)*1.3)}
.js .emblem{scale:calc(1 - var(--h,0)*.45);rotate:calc(var(--h,0)*180deg);translate:0 calc(var(--h,0)*40px)}
.js .roll li.fc{border-color:#e9b949;box-shadow:0 14px 34px rgba(10,61,145,.2);scale:1.025}
.js .hz{padding:0;height:calc(100vh + var(--hzx,200vw))}
.js .hz-pin{position:sticky;top:0;z-index:1;height:100vh;display:flex;flex-direction:column;justify-content:center;gap:18px;padding:76px 0 28px;overflow:hidden}
.js .hz-track{width:max-content;overflow:visible;scroll-snap-type:none;padding-block:22px 12px}
.js .hz-bar{display:block}
.js .hz-head .lead{margin-top:10px}
@media (max-width:640px){.js .hz-track .ph{height:min(46vh,360px)}.ph .no{font-size:40px}}
@media (prefers-reduced-motion:reduce){.ik *,.ik *::before,.ik *::after{animation:none!important;transition:none!important}}`;

type Ob = { el: HTMLElement; last: number };

export default function Home() {
  const [open, setOpen] = useState(false);
  const [jenis, setJenis] = useState("Semua");
  const [baca, setBaca] = useState<Tulisan | null>(null);
  const [act, setAct] = useState("");
  const reg = useRef<() => void>(() => {});
  const daftar = tulisan.filter((t) => jenis === "Semua" || t.jenis === jenis);

  useEffect(() => {
    document.body.style.overflow = open || baca ? "hidden" : "";
    const k = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setOpen(false); setBaca(null); }
    };
    window.addEventListener("keydown", k);
    return () => { window.removeEventListener("keydown", k); document.body.style.overflow = ""; };
  }, [open, baca]);

  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".ik");
    if (!root) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const nav = root.querySelector(".nav");
    const bar = root.querySelector<HTMLElement>(".prog");
    const rail = root.querySelector<HTMLElement>(".rail");
    const hero = root.querySelector<HTMLElement>(".hero");
    const drift = root.querySelector<HTMLElement>(".drift");
    const tl = root.querySelector<HTMLElement>(".tl");
    const hz = root.querySelector<HTMLElement>(".hz");
    const pin = hz?.querySelector<HTMLElement>(".hz-pin") ?? null;
    const track = hz?.querySelector<HTMLElement>(".hz-track") ?? null;
    const cards = hz ? Array.from(hz.querySelectorAll<HTMLElement>(".hz-track .ph")) : [];
    const ids = menu.map((m) => m[0]);
    const idEls = ids.map((id) => document.getElementById(id));

    let items: (Ob & { sp: number })[] = [];
    let secs: Ob[] = [];
    let sws: { el: HTMLElement; spans: HTMLElement[]; n: number }[] = [];
    let rolls: HTMLElement[] = [];
    const par: { el: HTMLElement; s: number; r: number; m: number; x: number }[] = [];
    let hzMax = 0, pinH = 0, cardX: number[] = [];
    let last = "", tick = false, lastY = window.scrollY, vel = 0;

    const clamp = (n: number, a = 0, b = 1) => Math.max(a, Math.min(b, n));
    // progres 0..1 saat elemen naik dari bawah layar; tetap bisa mencapai 1 di ujung halaman.
    const pr = (top: number, span: number, s0: number, endTop: number) => {
      const s1 = Math.max(s0 - span, endTop);
      return clamp((s0 - top) / Math.max(30, s0 - s1));
    };
    const put = (o: Ob, name: string, v: number) => {
      if (v === o.last || (Math.abs(v - o.last) < 0.003 && v !== 0 && v !== 1)) return;
      o.last = v;
      o.el.style.setProperty(name, v.toFixed(3));
    };

    const measure = () => {
      if (!hz || !track || !pin) return;
      hzMax = Math.max(0, track.scrollWidth - window.innerWidth);
      pinH = pin.offsetHeight;
      hz.style.setProperty("--hzx", `${hzMax}px`);
      cardX = cards.map((c) => c.offsetLeft + c.offsetWidth / 2);
    };

    const SEL: [string, string][] = [
      [".sec .lead:not([data-sw])", "rise"], [".facts > div", "rise"],
      ["#berita .grid > .card", "slide"], ["#karya .grid > .card", "flipy"],
      ["#tentang .grid > .card", "flipx"], ["#struktur .grid > .card", "flipx"],
      ["#otonom .grid > .card", "spin"], ["#kegiatan .grid > .card", "pop"],
      [".tl > li", "slide"], [".roll > li", "slide"], [".tier > li", "flipx"],
      [".chips > span", "pop"], [".kami", "zoom"],
    ];
    const collect = () => {
      if (reduce) return;
      SEL.forEach(([s, v]) => root.querySelectorAll<HTMLElement>(s).forEach((el, i) => {
        if (!el.dataset.s) {
          el.dataset.s = v;
          el.style.setProperty("--dir", i % 2 ? "1" : "-1");
        }
      }));
      const old = new Map(items.map((o) => [o.el, o]));
      items = Array.from(root.querySelectorAll<HTMLElement>("[data-s]")).map((el) =>
        old.get(el) ?? { el, last: -1, sp: el.dataset.s === "words" ? 0.3 : el.dataset.s === "page" ? 0.5 : 0.55 });
      secs = Array.from(root.querySelectorAll<HTMLElement>(".sec")).map((el) => ({ el, last: -1 }));
      sws = Array.from(root.querySelectorAll<HTMLElement>("[data-sw]")).map((el) => ({ el, spans: Array.from(el.querySelectorAll<HTMLElement>("span")), n: -1 }));
      rolls = Array.from(root.querySelectorAll<HTMLElement>(".roll > li"));
    };

    const frame = () => {
      tick = false;
      const y = window.scrollY, vh = window.innerHeight;
      const h = document.documentElement.scrollHeight - vh;
      const gap = Math.max(0, h - y);

      // --- baca (read) dulu semuanya ---
      const idTop = idEls.map((e) => (e ? e.getBoundingClientRect().top : 1e9));
      const secR = reduce ? [] : secs.map((s) => s.el.getBoundingClientRect());
      const itT = reduce ? [] : items.map((o) => o.el.getBoundingClientRect().top);
      const swR = reduce ? [] : sws.map((o) => o.el.getBoundingClientRect());
      const rollR = reduce ? [] : rolls.map((e) => e.getBoundingClientRect());
      const parR = reduce ? [] : par.map((q) => q.el.parentElement!.getBoundingClientRect());
      const hzR = !reduce && hz ? hz.getBoundingClientRect() : null;
      const tlR = !reduce && tl ? tl.getBoundingClientRect() : null;

      // --- tulis (write) ---
      if (bar) bar.style.transform = `scaleX(${h > 0 ? y / h : 0})`;
      nav?.classList.toggle("sc", y > 24);
      rail?.style.setProperty("--pg", String(h > 0 ? Math.min(1, y / h) : 0));
      let cur = "";
      for (let i = 0; i < ids.length; i++) if (idTop[i] <= vh * 0.4) cur = ids[i];
      if (cur !== last) { last = cur; setAct(cur); }

      const dv = y - lastY;
      lastY = y;
      vel += (clamp(dv / 40, -1, 1) - vel) * 0.18;
      if (Math.abs(vel) < 0.003) vel = 0;

      if (!reduce) {
        if (hero) {
          if (y < 1400) hero.style.setProperty("--y", String(y));
          hero.style.setProperty("--h", clamp(y / (vh * 0.9)).toFixed(3));
        }
        drift?.style.setProperty("--v", vel.toFixed(3));

        secs.forEach((s, i) => {
          const r = secR[i];
          put(s, "--e", pr(r.top, Math.min(vh * 0.9, r.height * 0.85), vh, r.top - gap));
        });
        items.forEach((o, i) => put(o, "--p", pr(itT[i], o.sp * vh, vh * 0.96, itT[i] - gap)));

        sws.forEach((o, i) => {
          const r = swR[i];
          const n = Math.round(pr(r.top, vh * 0.42, vh * 0.9, r.top - gap) * o.spans.length);
          if (n !== o.n) { o.spans.forEach((s, j) => s.classList.toggle("on", j < n)); o.n = n; }
        });

        let best = -1, bd = 1e9;
        rollR.forEach((r, i) => {
          const d = Math.abs(r.top + r.height / 2 - vh * 0.5);
          if (d < bd) { bd = d; best = i; }
        });
        rolls.forEach((el, i) => el.classList.toggle("fc", i === best && bd < vh * 0.28));

        par.forEach((q, i) => {
          const b = parR[i];
          const d = b.top + b.height / 2 - vh / 2;
          if (Math.abs(d) > vh * 1.6) return;
          if (q.x) q.el.style.setProperty("translate", `${-d * q.x}px 0`);
          else {
            let ty = -d * q.s;
            if (q.m) ty = Math.max(-q.m, Math.min(q.m, ty));
            q.el.style.setProperty("translate", `0 ${ty}px`);
          }
          if (q.r) q.el.style.setProperty("rotate", `${d * q.r * 0.1}deg`);
        });

        if (tl && tlR) tl.style.setProperty("--tp", String(clamp((vh * 0.65 - tlR.top) / tlR.height)));

        if (hz && hzR && track && pin) {
          const p = clamp(-hzR.top / Math.max(1, hzR.height - pinH));
          track.style.setProperty("translate", `${-p * hzMax}px 0`);
          pin.style.setProperty("--hp", p.toFixed(3));
          const vw = window.innerWidth;
          cards.forEach((c, i) => {
            const d = clamp((cardX[i] - p * hzMax - vw / 2) / vw, -1, 1);
            c.style.transform = `perspective(1000px) rotateY(${(-d * 26).toFixed(1)}deg) scale(${(1 - Math.abs(d) * 0.2).toFixed(3)}) skewX(${(vel * -6).toFixed(2)}deg)`;
            c.style.opacity = String(1 - Math.abs(d) * 0.45);
          });
        }
      }
      if (vel !== 0) schedule();
    };
    const schedule = () => {
      if (tick) return;
      tick = true;
      requestAnimationFrame(frame);
    };

    const onResize = () => { measure(); schedule(); };
    reg.current = () => { collect(); schedule(); };

    let io: IntersectionObserver | null = null;
    if (!reduce) {
      root.classList.add("js");
      root.querySelectorAll<HTMLElement>("[data-p]").forEach((el) => par.push({ el, s: +(el.dataset.p || 0), r: +(el.dataset.rot || 0), m: 0, x: 0 }));
      root.querySelectorAll<HTMLElement>("[data-x]").forEach((el) => par.push({ el, s: 0, r: 0, m: 0, x: +(el.dataset.x || 0) }));
      root.querySelectorAll<HTMLElement>(".thumb img").forEach((el) => par.push({ el, s: 0.12, r: 0, m: 18, x: 0 }));
      root.querySelectorAll<HTMLElement>("svg.wm").forEach((el) => par.push({ el, s: 0, r: -0.15, m: 0, x: 0 }));
      collect();
      measure();

      const count = (b: HTMLElement) => {
        const m = b.textContent?.match(/^(\d+)(.*)$/);
        if (!m || +m[1] >= 100) return;
        const to = +m[1], t0 = performance.now();
        const step = (t: number) => {
          const k = Math.min(1, (t - t0) / 1000);
          b.textContent = Math.round(to * (1 - Math.pow(1 - k, 3))) + m[2];
          if (k < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      };
      io = new IntersectionObserver((es) => es.forEach((e) => {
        if (!e.isIntersecting) return;
        const b = (e.target as HTMLElement).querySelector<HTMLElement>("b");
        if (b) count(b);
        io?.unobserve(e.target);
      }), { threshold: 0.4 });
      root.querySelectorAll(".facts > div").forEach((el) => io?.observe(el));
    }

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", onResize);
    window.addEventListener("load", onResize);
    frame();
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("load", onResize);
      io?.disconnect();
    };
  }, []);

  useEffect(() => { reg.current(); }, [jenis]);

  return (
    <div className="ik" id="top">
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div className="prog" aria-hidden="true" />
      <nav className="rail" aria-label="Posisi halaman">
        {menu.map(([id, t]) => (<a key={id} href={`#${id}`} className={act === id ? "on" : ""} aria-label={t}><span>{t}</span></a>))}
      </nav>
      <header className="nav">
        <a href="#top" className="brand"><Image src="/logo.png" alt="" width={36} height={36} /><span>IKSTIDA</span></a>
        <nav aria-label="Navigasi utama">
          {menu.map(([id, t]) => (<a key={id} href={`#${id}`}>{t}</a>))}
        </nav>
        <button className="burger" aria-label="Buka menu" aria-expanded={open} onClick={() => setOpen(true)}><Ico n="menu" /></button>
      </header>
      <div className={`scrim${open ? " on" : ""}`} onClick={() => setOpen(false)} />
      <aside className={`drawer${open ? " on" : ""}`} aria-hidden={!open} aria-label="Menu">
        <div className="dhead">
          <span className="brand"><Image src="/logo.png" alt="" width={36} height={36} /><span>IKSTIDA</span></span>
          <button className="burger" aria-label="Tutup menu" onClick={() => setOpen(false)}><Ico n="x" /></button>
        </div>
        {menu.map(([id, t, ic]) => (<a key={id} className="dl" href={`#${id}`} onClick={() => setOpen(false)}><Ico n={ic} />{t}</a>))}
        <p className="dfoot">PP. Annuqayah Daerah Lubangsa, Guluk-Guluk, Sumenep</p>
      </aside>

      <main>
        <section className="hero">
          <div className="hero-grid" aria-hidden="true" />
          <div className="wrap hero-in">
            <div className="hero-copy">
              <p className="badge"><Ico n="pin" c="bi" />PP. Annuqayah Daerah Lubangsa, Guluk-Guluk, Sumenep</p>
              <h1><W t="Ikatan Keluarga Santri Timur Daya" /></h1>
              <p className="hero-sub">Organisasi daerah santri yang menyatukan persaudaraan, kaderisasi, literasi, dan budaya dari Timur Daya di lingkungan Pondok Pesantren Annuqayah.</p>
              <div className="cta">
                <a className="btn pri" href="#tentang">Kenali IKSTIDA</a>
                <a className="btn sec2" href="#jejak">Lihat jejak kami</a>
              </div>
            </div>
            <div className="emblem"><i className="orb" aria-hidden="true" /><Image src="/logo.png" alt="Logo IKSTIDA" width={220} height={217} priority /></div>
          </div>
          <div className="wrap facts">
            {stats.map(([n, t], i) => (<div key={n}><Ico n={IC.st[i]} c="si" /><b>{n}</b><span>{t}</span></div>))}
          </div>
        </section>

        <div className="drift" aria-hidden="true">
          <div data-x="0.5"><Row /></div>
          <div data-x="-0.5"><Row /></div>
        </div>

        <section id="berita" className="sec lt"><Fx i={1} /><div className="wrap">
          <h2 data-s="words"><W t="Berita IKSTIDA" /></h2>
          <p className="lead">Kabar kegiatan yang telah diberitakan situs resmi PP. Annuqayah Lubangsa.</p>
          <div className="grid news">
            {berita.map((b, i) => (
              <article className="card" key={b.h}>
                <div className="thumb">{b.img ? <Image src={b.img} alt={b.h} fill sizes="(max-width:900px) 100vw, 45vw" /> : <Ico n="photo" c="phi" />}<i className="ico tag"><Ico n={IC.ber[i]} /></i></div>
                <Ico n={IC.ber[i]} c="wm" />
                <div className="bt">
                  <time>{b.tgl}</time><h3>{b.h}</h3><p>{b.p}</p>
                  {b.href && <a href={b.href} target="_blank" rel="noopener noreferrer">Baca selengkapnya</a>}
                </div>
              </article>
            ))}
          </div>
        </div></section>

        <section id="karya" className="sec bk"><Fx i={2} /><div className="wrap">
          <h2 data-s="words"><W t="Karya anggota" /></h2>
          <p className="lead">Tulisan, pertunjukan, dan tradisi yang lahir dari ruang berorganisasi di IKSTIDA.</p>
          <div className="grid g4">
            {karya.map(([t, h, p], i) => (<div className="card" key={h}><div className="thumb">{gambarKarya[h] ? <Image src={gambarKarya[h]} alt={h} fill sizes="(max-width:640px) 100vw, 25vw" /> : <Ico n="photo" c="phi" />}<i className="ico tag"><Ico n={IC.karya[i]} /></i></div><Ico n={IC.karya[i]} c="wm" /><em>{t}</em><h3>{h}</h3><p>{p}</p></div>))}
          </div>
        </div></section>

        <section id="tulis" className="sec lt"><Fx i={9} />
          <div className="wrap tulis">
            <div className="tintro">
              <h2 data-s="words"><W t="Karya tulis anggota" /></h2>
              <p className="lead">Ruang bagi santri menuangkan gagasan. Sejak 2012, KAMI menampung tulisan anggota sekaligus kabar kegiatan organisasi.</p>
              <div className="tabs" role="tablist" aria-label="Jenis tulisan">
                {JENIS.map((j) => (<button key={j} role="tab" aria-selected={jenis === j} className={`tab${jenis === j ? " on" : ""}`} onClick={() => setJenis(j)}>{j}</button>))}
              </div>
              {/* TODO: tambahkan cara mengirim tulisan (kontak redaksi KAMI) setelah dikonfirmasi pengurus */}
            </div>
            <div className="sheets">
              {daftar.map((t) => (
                <article className="sheet" key={t.judul} data-s="page">
                  <Ico n="quote" c="qm" />
                  <em>{t.jenis}</em><h3>{t.judul}</h3><p>{t.ringkas}</p>
                  <footer><Ico n="pen" />{t.penulis}<button onClick={() => setBaca(t)}>Baca</button></footer>
                </article>
              ))}
              {daftar.length === 0 && <p className="empty">Belum ada tulisan untuk jenis ini.</p>}
            </div>
          </div>
        </section>

        <section id="tentang" className="sec bl"><Fx i={3} /><div className="wrap">
          <h2 data-s="words"><W t="Wadah santri Timur Daya untuk berorganisasi dan berkembang" /></h2>
          <Sw t="IKSTIDA menyatukan santri dari kawasan Timur Daya. Di sini anggota belajar memimpin, menulis, berkesenian, dan membangun solidaritas, sambil tetap terhubung dengan kehidupan kolektif pesantren dan organisasi daerah lain di Lubangsa." />
          <div className="grid g5">
            {nilai.map(([h, , p], i) => (<div className="card" key={h}><Med n={IC.nilai[i]} /><h3>{h}</h3><p>{p}</p></div>))}
          </div>
        </div></section>

        <section id="struktur" className="sec lt"><Fx i={4} /><div className="wrap">
          <h2 data-s="words"><W t="Struktur dan perangkat organisasi" /></h2>
          <p className="lead">Bagan konseptual dari praktik yang diberitakan, bukan salinan AD/ART terbaru.</p>
          <ol className="tier">{struktur.map(([h, p]) => (<li key={h}><b>{h}</b><span>{p}</span></li>))}</ol>
          <div className="grid g3">
            {perangkat.map(([k, h, p], i) => (<div className="card" key={k}><Med n={IC.per[i]} /><span className="abbr">{k}</span><h3>{h}</h3><p>{p}</p></div>))}
          </div>
        </div></section>

        <section id="otonom" className="sec bk"><Fx i={5} /><div className="wrap">
          <h2 data-s="words"><W t="Satu rumah, banyak daerah" /></h2>
          <p className="lead">Empat otonom tercatat dalam berita 2016. Daftar terkini perlu dikonfirmasi pengurus.</p>
          <div className="grid g4">
            {otonom.map(([k, n]) => (
              <div className="card ocard" key={k}>
                <div className="logo"><span>{logoOtonom[k] ? <Image src={logoOtonom[k]} alt={`Logo ${k}`} fill sizes="112px" /> : <Ico n="photo" />}</span></div>
                <span className="abbr">{k}</span><p>{n}</p>
              </div>
            ))}
          </div>
        </div></section>

        <section id="jejak" className="sec bl"><Fx i={6} /><div className="wrap">
          <h2 data-s="words"><W t="Jejak langkah" /></h2>
          <ol className="tl">
            {jejak.map(([y, h, p]) => (<li key={y}><b>{y}</b><div><h3>{h}</h3><p>{p}</p></div></li>))}
          </ol>
        </div></section>

        <section className="sec lt"><Fx i={7} /><div className="wrap">
          <div className="kami">
            <h2 data-s="words"><W t="KAMI: Kabar Asyik Mingguan IKSTIDA" /></h2>
            <Sw t="Terbit sejak 2012 atas prakarsa Divisi III, dengan tokoh antara lain Abd. Muqsith dan A. Ziyad Subaidi. KAMI menampung tulisan anggota dan mengabarkan kegiatan organisasi. Pada 2016 pengelolanya masih membahas pengembangan penerbitan dan edisi khusus." />
          </div>
        </div></section>

        <section id="kegiatan" className="sec bk"><Fx i={8} /><div className="wrap">
          <h2 data-s="words"><W t="Yang biasa kami kerjakan" /></h2>
          <div className="grid g4">
            {kegiatan.map(([h, p], i) => (<div className="card" key={h}><Med n={IC.keg[i]} /><h3>{h}</h3><p>{p}</p></div>))}
          </div>
        </div></section>

        <section id="galeri" className="sec bl hz"><Fx i={9} />
          <div className="hz-pin">
            <div className="wrap hz-head">
              <h2 data-s="words"><W t="Galeri kegiatan" /></h2>
              <p className="lead">Terus scroll ke bawah, galeri akan bergeser ke samping.</p>
            </div>
            <div className="hz-track">
              {galeri.map((f, i) => (
                <figure key={f.cap} className={`ph v${i % 4}`}>
                  {f.src ? <Image src={f.src} alt={f.cap} fill sizes="(max-width:640px) 76vw, 540px" /> : <Ico n="photo" c="phi" />}
                  <b className="no">{String(i + 1).padStart(2, "0")}</b>
                  <figcaption>{f.cap}</figcaption>
                </figure>
              ))}
            </div>
            <div className="hz-bar" aria-hidden="true"><i /></div>
          </div>
        </section>

        <section id="tokoh" className="sec lt"><Fx i={10} /><div className="wrap">
          <h2 data-s="words"><W t="Kepengurusan yang tercatat" /></h2>
          <p className="lead">Nama dari berita resmi pesantren. Tidak semuanya pendiri, dan jabatan berlaku pada periode masing-masing.</p>
          <ul className="roll">{tokoh.map(([n, j, y]) => (<li key={n + y}><b>{n}</b><span>{j}</span><i>{y}</i></li>))}</ul>
          <h3 className="subh">Bersama organisasi daerah Lubangsa</h3>
          <div className="chips">{orda.map((o) => <span key={o}>{o}</span>)}</div>
        </div></section>

        <section className="sec todo bk"><Fx i={11} /><div className="wrap">
          <h2 data-s="words"><W t="Masih kami lengkapi" /></h2>
          <Sw t="Tanggal pendirian resmi, nama pendiri, visi dan misi, AD/ART, lambang resmi, serta pengurus periode terbaru belum ditemukan di sumber publik. Hubungi pengurus untuk membantu melengkapinya." />
        </div></section>
      </main>

      <footer className="foot"><div className="wrap">
        <Image src="/logo.png" alt="" width={56} height={56} />
        <div>
          <b>IKSTIDA</b>
          <p>Ikatan Keluarga Santri Timur Daya, PP. Annuqayah Daerah Lubangsa, Guluk-Guluk, Sumenep, Jawa Timur.</p>
          {/* TODO: tambahkan kontak resmi (Instagram, WhatsApp, email) setelah dikonfirmasi pengurus */}
          <small>Disusun dari berita resmi PP. Annuqayah Lubangsa; belum menjadi sejarah resmi organisasi.</small>
        </div>
      </div></footer>

      {baca && (
        <div className="modal" role="dialog" aria-modal="true" aria-label={baca.judul} onClick={() => setBaca(null)}>
          <article className="paper" onClick={(e) => e.stopPropagation()}>
            <button className="mclose" aria-label="Tutup" onClick={() => setBaca(null)}><Ico n="x" /></button>
            <em>{baca.jenis}</em>
            <h3>{baca.judul}</h3>
            <small>Oleh {baca.penulis}</small>
            {baca.isi.map((p, i) => (<p key={i}>{p}</p>))}
            {baca.href && <p><a href={baca.href} target="_blank" rel="noopener noreferrer">Sumber asli</a></p>}
          </article>
        </div>
      )}
    </div>
  );
}