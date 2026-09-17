# PRD — Marlow Auto Detail

Versi: 1.1  
Tanggal: 17 September 2026  
Status: Baseline implementasi berdasarkan keputusan pengguna  
Jenis proyek: Website portfolio untuk bisnis car detailing fiktif di Inggris  
Bahasa dokumen: Indonesia · Bahasa website: British English

## 1. Ringkasan produk

Marlow Auto Detail adalah konsep bisnis detailing berbasis studio di Manchester, melayani pemilik mobil harian dan premium dari Manchester, Salford, serta Trafford. Website berupa landing page lead-generation dengan portfolio visual, paket dan harga awal, informasi proses, serta alur permintaan appointment.

Website portfolio harus memperagakan pengalaman bisnis yang meyakinkan sekaligus menjelaskan bahwa bisnis, testimonial, harga, dan booking bersifat demo. Form berfungsi di sisi browser tanpa mengirim permintaan, menyimpan data, atau membuat appointment nyata.

Positioning: perawatan mobil profesional dengan hasil yang terlihat, harga transparan, dan pelayanan personal. Arah fotografi yang telah disetujui adalah BMW M4 Competition G82 silver di garage industrial dengan pencahayaan putih netral.

## 2. Masalah, pengguna, dan tujuan

Calon pelanggan perlu memahami kualitas layanan, kecocokan paket, biaya awal, durasi, lokasi, serta cara meminta jadwal tanpa harus menebak informasi tersebut dari media sosial.

| Pengguna | Kebutuhan | Hasil yang dituju |
|---|---|---|
| Pemilik mobil harian | Interior bersih, eksterior terawat, biaya jelas | Menemukan paket yang sesuai dan mencoba permintaan booking |
| Pemilik mobil premium | Penjelasan polishing, koreksi cat, dan proteksi | Memahami cakupan serta batas hasil sebelum memilih layanan |
| Pengunjung portfolio/reviewer | Menilai kualitas desain dan implementasi | Melihat pengalaman mobile, konten, aksesibilitas, dan form yang lengkap |

Tujuan utama MVP: memperagakan perjalanan pengunjung dari mengenali bisnis, mengevaluasi layanan dan hasil ilustratif, hingga menyelesaikan form appointment demo.

Keberhasilan portfolio diukur melalui kelengkapan acceptance criteria, kejelasan informasi, serta kelancaran penggunaan. Jumlah lead dan konversi bisnis nyata bukan ukuran MVP karena tidak ada operasi bisnis atau analytics aktif.

## 3. Cakupan dan prioritas

P0 berarti wajib untuk rilis MVP. P1 berarti pengembangan setelah MVP, bukan requirement tersembunyi.

| Fitur | Prioritas |
|---|---|
| Landing page responsif dengan seluruh bagian yang ditentukan | P0 |
| Lima layanan, harga mulai, cakupan, dan estimasi durasi | P0 |
| Empat perbandingan simulasi beserta enlarged view | P0 |
| Testimonial contoh dengan label yang jelas | P0 |
| Form demo dengan validasi, status sukses, dan reset | P0 |
| Navigasi anchor, navigasi mobile, FAQ, dan footer | P0 |
| Demo Privacy dan 404 | P0 |
| Optimasi gambar, aksesibilitas, dan metadata | P0 |
| Konten terpusat tanpa CMS | P0 |
| CMS, filter galeri, dan halaman layanan individual | P1 |
| Analytics dan event tracking tanpa data form | P1 |

Di luar MVP: backend booking, slot real-time, email pengiriman, akun pelanggan, pembayaran/deposit, dashboard admin, upload foto, integrasi WhatsApp/telepon, live Google Reviews, peta dengan alamat studio, dan layanan mobile detailing. Fitur operasional membutuhkan requirement baru sebelum ditambahkan.

## 4. Informasi bisnis simulasi

| Atribut | Nilai |
|---|---|
| Nama | Marlow Auto Detail |
| Basis | Manchester, England |
| Area pelanggan | Manchester, Salford, Trafford |
| Model layanan | Studio-based; kunjungan dengan appointment |
| Jam Senin–Jumat | 09:00–18:00 |
| Jam Sabtu | 09:00–16:00 |
| Minggu | Closed |
| Mata uang | GBP (£) |
| Email contoh | hello@marlowautodetail.example; teks non-operasional |
| Alamat dan telepon | Tidak disediakan |

Skenario operasi bisnis untuk menjelaskan proses: pemilik studio mengonfirmasi permintaan maksimal satu hari kerja, harga dan jadwal disepakati sebelum pengerjaan, dan perubahan/pembatalan diminta minimal 24 jam sebelumnya. Website demo tidak menjalankan operasi tersebut dan tidak menjanjikan respons nyata.

## 5. Arsitektur informasi

| Route | Fungsi |
|---|---|
| `/` | Landing page |
| `/demo-privacy` | Penjelasan perilaku form demo dan informasi data sesuai implementasi |
| Route yang tidak tersedia | Halaman 404 dengan jalan kembali ke homepage |

Urutan homepage:

1. Notice portfolio yang terlihat namun tidak menghalangi.
2. Header dan navigasi.
3. Hero.
4. Preview hasil unggulan dengan label simulasi.
5. Services & Packages.
6. Our Work / Gallery.
7. Reviews.
8. How It Works.
9. Location & Service Area.
10. FAQ.
11. Booking.
12. Footer.

Navigasi: Services → `#services`, Our Work → `#our-work`, Reviews → `#reviews`, How It Works → `#how-it-works`, Contact → `#contact`. CTA booking menuju `#booking`. Anchor tidak boleh tersembunyi di bawah header jika header dibuat sticky.

## 6. Requirement tiap bagian

### R-01 — Konteks portfolio

Tampilkan notice: “Portfolio concept — fictional business. Images and customer reviews are illustrative. No real bookings are accepted.” Notice tersedia sejak halaman pertama dilihat, bukan hanya di footer. Tidak perlu dialog persetujuan atau banner modal.

### R-02 — Header dan hero

Header memuat logo, navigasi, dan Book an Appointment. Logo menuju homepage. Mobile menggunakan tombol menu dengan nama aksesibel dan status expanded; menu bisa ditutup, pilihan link menutup menu, dan Escape mengembalikan fokus ke tombol.

Hero memakai aset `assets/images/hero-garage-v2.png` dengan eyebrow “MANCHESTER · STUDIO DETAILING”, headline “Bring out the best in your car.”, body dan supporting line dari sumber copy. CTA sekunder Explore Our Services menuju layanan.

Foto menjaga kendaraan terlihat. Desktop boleh menempatkan copy di samping atau area foto yang memiliki kontras cukup; mobile meletakkan copy di luar foto bila overlay menyulitkan keterbacaan. Tidak menambahkan rating, award, garansi atau statistik tanpa dasar.

### R-03 — Services & Packages

| ID layanan | Nama | Harga mulai | Durasi estimasi | Cakupan |
|---|---|---|---|---|
| `interior` | Interior Detail | £95 | 3–4 hours | Vacuum, upholstery, dashboard/trim, interior glass |
| `exterior` | Exterior Detail | £85 | 2–3 hours | Wash, decontamination, wheel care, protective sealant |
| `polishing` | Enhancement Polish | £220 | 1 day | Exterior preparation, single-stage polish, finishing protection |
| `ceramic` | Ceramic Protection | £450 | 2–3 days | Preparation, enhancement polish, coating, aftercare |
| `correction` | Paint Correction | £350 | 1–2 days | Assessment, agreed correction stages, finishing protection |

Setiap kartu memuat manfaat, cakupan, harga “From”, durasi, dan CTA layanan. Ceramic Protection diberi label Featured package, bukan Most Popular. Jelaskan bahwa harga dan durasi merupakan contoh, serta harga nyata bergantung pada ukuran, kondisi, dan scope yang disepakati.

CTA layanan mengisi service ID yang sesuai dan membawa pengunjung ke form. CTA umum tidak menghapus layanan yang telah dipilih. Bila pengguna sedang mengisi form lalu memilih paket lain, hanya field layanan yang berubah; data lain tetap tersedia dalam memori halaman.

Tidak menjanjikan seluruh goresan hilang, masa pakai coating, atau garansi produk.

### R-04 — Gallery

Sebelum paket layanan, tampilkan satu preview perbandingan polishing menggunakan aset yang sama dengan galeri lengkap, caption dan label simulasi. CTA See all comparisons menuju `#our-work`. Preview tidak menjadi galeri tambahan atau memerlukan gambar baru.

Tampilkan empat kasus: interior, exterior, polishing, dan paint correction. Masing-masing menggunakan satu diptych v2, judul/caption, label kiri “Simulated before”, label kanan “Simulated after”, serta “AI-generated comparison — illustrative only.”

Diptych bukan dua layer sejajar untuk slider. MVP menggunakan gambar perbandingan utuh, tanpa manipulasi perspektif atau slider. Tidak meregangkan gambar; galeri boleh mempertahankan rasio asli yang berbeda.

Klik/tap kartu atau tombol View larger membuka dialog gambar besar yang memuat judul, kedua label dan keterangan demo. Dialog dapat ditutup dengan tombol Close dan Escape; fokus tetap dalam dialog selama terbuka lalu kembali ke pemicunya. Latar tidak dapat dioperasikan selama dialog terbuka. Gambar utuh dapat dilihat pada layar kecil tanpa horizontal overflow halaman. Browser dapat memperbesar gambar; tidak memblokir zoom.

### R-05 — Reviews

Tampilkan tiga contoh testimonial Alex R., Priya S., dan James T. sesuai sumber copy. Bagian dan setiap attribution memiliki penanda testimonial contoh. Tidak menampilkan Google logo, Google rating, aggregate rating, atau tautan profil bisnis yang tidak ada.

### R-06 — How It Works

Empat langkah: Tell us about your car → Agree the details → Leave it in careful hands → Collect and enjoy. Penjelasan konfirmasi harga, ketersediaan, dan proses pengerjaan adalah skenario bisnis, bukan transaksi aktif. Gunakan foto proses polishing; ceramic photo dapat digunakan pada layanan Ceramic Protection atau detail proses tanpa menduplikasi semua foto di setiap bagian.

### R-07 — Location & Contact

Tampilkan Manchester, area pelanggan, studio-based service, appointment-only, jam operasional, serta email contoh sebagai teks. Tidak menambahkan mailto, tel, WhatsApp, pin studio atau street address palsu. Area tidak membutuhkan integrasi peta. CTA di bagian ini menuju form demo.

### R-08 — FAQ

Gunakan tujuh pertanyaan dan jawaban dari sumber copy, mencakup harga, durasi, mobile service, memilih paket, status appointment, perubahan/pembatalan, dan batas polishing. Accordion memakai tombol atau elemen native yang dapat dioperasikan dengan keyboard. Beberapa jawaban boleh terbuka sekaligus. Jawaban booking secara eksplisit menyebut form tidak mengirim permintaan.

### R-09 — Footer dan halaman pendukung

Footer berisi nama brand, tagline, status portfolio, Demo Privacy dan Back to top. Demo Privacy menjelaskan form tidak mengirim atau menyimpan isian dan meminta data contoh. Informasi log hosting mengikuti perilaku deployment nyata; jangan mengklaim seluruh website tidak mengumpulkan data tanpa pemeriksaan.

Halaman 404 menggunakan copy yang disediakan, navigasi kembali ke homepage, dan status respons 404 untuk route yang tidak ada.

## 7. Form appointment demo

### Field dan validasi

| Field | Aturan |
|---|---|
| Full name | Wajib; trim whitespace; 1–100 karakter; tidak membatasi karakter alfabet Latin |
| Preferred contact method | Wajib; Email atau Phone; default Email |
| Email address | Hanya aktif dan wajib saat Email; format email valid; maksimal 254 karakter |
| Phone number | Hanya aktif dan wajib saat Phone; menerima +, spasi, kurung, tanda hubung; 7–15 digit setelah format dipisahkan; tidak memaksa UK prefix |
| Vehicle make and model | Wajib; trim whitespace; 1–100 karakter |
| Service | Wajib; lima ID layanan atau `unsure` / Not sure — advise me; awalnya belum dipilih |
| Preferred date | Opsional; tanggal kalender valid, hari ini atau masa depan berdasarkan Europe/London; bukan slot tersedia |
| Tell us about your car | Opsional; maksimal 1.000 karakter, dengan batas yang terlihat |

Nomor telepon dan email tidak dipakai sebagai kontak nyata. Perubahan contact method mempertahankan nilai sementara dalam memori jika pengguna kembali memilih kanal awal, tetapi hanya kanal aktif divalidasi. Teks bebas tidak dirender sebagai HTML. Tidak ada postcode karena layanan berbasis studio dan tidak memeriksa cakupan pengiriman.

### State dan transisi

| State | Perilaku |
|---|---|
| Idle/editing | Label terlihat; demo notice dan helper date tersedia; submit aktif |
| Invalid | Error per field, ringkasan error dengan link ke field; fokus ke ringkasan; seluruh input dipertahankan |
| Checking | Validasi lokal; tombol tidak menerima submit berulang; status aksesibel “Checking your request…” |
| Success | Ganti area form dengan “Demo request complete.” dan penjelasan tidak ada enquiry/appointment nyata; fokus ke heading sukses |
| Unexpected failure | Pesan retry yang jelas; input tetap tersedia; tidak menciptakan kegagalan acak untuk demonstrasi |
| Reset | Try another request membersihkan nilai, error dan status; kembali ke default Email dan service kosong; fokus ke field nama |

Setelah validasi berhasil, tampilkan sukses lokal tanpa delay panjang buatan. Status checking boleh singkat; requirement utamanya mencegah submit ganda dan memberi feedback.

Sebelum input dan dekat submit tampilkan penjelasan bahwa form demo tidak mengirim atau memesan jadwal. CTA submit: Request Appointment. Tidak diperlukan persetujuan marketing, pembayaran, consent checkbox palsu, atau CAPTCHA.

### Batas data

Isian hanya hidup dalam memori selama halaman digunakan. Jangan mengirim melalui fetch, form action, email service, URL/query string, analytics, console log, cookies, localStorage, sessionStorage, database, atau log server. Refresh/unmount menghapus state aplikasi; browser autofill berada di luar kontrol penyimpanan aplikasi dan tidak dipakai sebagai persistence produk.

## 8. Arah visual dan aset

Brand: graphite `#202322`, warm white `#F5F2EB`, copper `#9A5637`, soft copper `#C38B69`, muted ink `#666A64`. Warm white merupakan warna UI yang disetujui; grading foto tetap putih netral tanpa nuansa warm. Copper digunakan secukupnya untuk aksen. Verifikasi kombinasi warna aktual sebelum digunakan untuk teks dan kontrol.

Typography: sans-serif yang jelas, heading tegas, body nyaman dibaca. Font system dapat digunakan pada MVP; tidak ada kewajiban membeli font. Logo SVG memakai live Arial/Helvetica text sehingga rendering mengikuti font tersedia.

| Aset | Penggunaan |
|---|---|
| `assets/brand/logo-dark.svg` | Header/latar terang |
| `assets/brand/logo-light.svg` | Latar gelap |
| `assets/brand/mark.svg` | Sumber favicon/monogram |
| `assets/brand/palette.svg` | Referensi warna |
| `assets/images/hero-garage-v2.png` | Hero; telah disetujui pengguna |
| `assets/images/process-polishing-v2.png` | Proses/polishing |
| `assets/images/service-ceramic-v2.png` | Ceramic Protection |
| `assets/images/demo-interior-v2.png` | Kasus interior |
| `assets/images/demo-exterior-v2.png` | Kasus exterior; rasio ekstra lebar |
| `assets/images/demo-polishing-v2.png` | Kasus polishing |
| `assets/images/demo-paint-correction-v2.png` | Kasus correction |

Ketujuh foto adalah AI-generated illustration. Detail kendaraan dan perbandingan tidak menjadi bukti factory specification atau hasil pekerjaan nyata. Jangan memakai kembali seri warm studio yang sudah dihapus. Tidak menambahkan rating, sertifikasi, wajah pelanggan, atau hasil nyata yang dibuat-buat.

Sumber copy: `assets/content/website-copy.md`. Panduan aset: `assets/README.md`. Prompt terbaru: `assets/content/hero-v2-prompt.json` dan `assets/content/image-prompts-v2.json`.

PRD menjadi sumber requirement dan perilaku; file copy menjadi sumber string tampilan. Jika terjadi konflik, sesuaikan copy dengan requirement PRD tanpa mengubah fakta proyek secara sepihak.

## 9. Requirement nonfungsional

### Responsiveness dan aksesibilitas

- Mendukung viewport minimal 320px; verifikasi 375px, 768px, dan 1440px. Tidak ada overflow horizontal halaman.
- Semua tindakan dapat digunakan dengan keyboard, fokus terlihat, urutan fokus mengikuti konten, tersedia skip link.
- Target proyek: WCAG 2.2 AA; verifikasi manual dan otomatis sesuai cakupan, bukan klaim sertifikasi.
- Kontras body text minimal 4.5:1; large text dan komponen visual sesuai kebutuhan 3:1. Label demo tetap terbaca.
- Label form permanen, required status jelas, error terhubung ke input, status diumumkan ke teknologi bantu.
- Target sentuh utama minimal 44×44 CSS px; tidak mengandalkan hover atau warna saja.
- Heading berurutan dengan satu H1 pada setiap halaman. Gambar informatif memakai alt dari sumber copy; gambar dekoratif alt kosong.
- Zoom 200% tetap operasional. Hormati prefers-reduced-motion; konten tidak bergantung pada animasi.

### Performa dan kompatibilitas

- Buat derivative responsif WebP/AVIF dari PNG master tanpa mengubah isi foto; pertahankan master untuk sumber.
- Target berat hero yang dikirim pada viewport mobile ≤300 KB; gambar galeri mobile ≤250 KB per gambar selama kualitas masih memadai.
- Hero tidak lazy-loaded; gambar di bawah fold lazy-loaded. Tetapkan dimensi/rasio untuk mencegah layout shift.
- Hindari video autoplay, library animasi besar, dan pemuatan seluruh master PNG saat membuka halaman.
- Target Lighthouse mobile performance ≥90 pada production build dalam pengujian lokal terdokumentasi; catat kondisi pengujian dan jangan menganggap skor lab sebagai data pengguna nyata.
- Uji pada browser desktop Chrome, Edge, Firefox serta browser mobile Safari/Chrome yang tersedia saat verifikasi. Catat platform yang tidak dapat diuji.

### Metadata dan publikasi

- British English, metadata menyebut Portfolio Concept; HTML language `en-GB`.
- Title/description menggunakan sumber copy. Tambahkan favicon dari monogram dan social preview dari hero bila dibuat derivative-nya.
- Metadata sosial tidak mengaku bisnis operasional. Tidak ada LocalBusiness atau AggregateRating structured data palsu.
- Canonical/URL sosial baru diisi setelah domain deployment tersedia; jangan mengarang URL final.
- Semua route/link internal berfungsi. Tidak ada analytics script atau tracker yang sengaja ditambahkan pada MVP.

## 10. Struktur implementasi yang disepakati

Stack: Next.js, TypeScript, Tailwind CSS. Target hosting: Vercel. PRD tidak mengunci versi paket; pilih versi yang didukung ketika implementasi dimulai.

Konten terpusat mencakup brand, layanan dengan ID stabil, pricing, hours, gallery, reviews, FAQ, serta seluruh pesan form. Komponen halaman membaca data tersebut; harga dan nama layanan tidak digandakan di beberapa sumber yang mudah berbeda.

Client-side interactivity dibatasi pada menu mobile, gallery dialog, FAQ jika diperlukan, dan form. Tidak membutuhkan API route, database, authentication, atau CMS. Produksi dan deployment adalah tahap setelah implementasi, bukan bagian penulisan PRD ini.

## 11. Acceptance criteria dan verifikasi

| ID | Kriteria penerimaan | Cara verifikasi |
|---|---|---|
| AC-01 | Notice fiktif terlihat di homepage; form dan testimonial tidak menyesatkan | Inspeksi desktop/mobile dan copy |
| AC-02 | Semua bagian, route dan anchor tersedia tanpa target tertutup header | Klik seluruh link; cek 404 dan privacy |
| AC-03 | Lima layanan menampilkan harga/durasi/cakupan sesuai tabel | Bandingkan sumber konten dan tampilan |
| AC-04 | CTA setiap paket memilih ID layanan yang benar dan mempertahankan input lain | Coba kelima CTA setelah mengisi data contoh |
| AC-05 | Galeri memuat empat diptych dan label simulasi yang terbaca | Inspeksi semua kartu dan enlarged view |
| AC-06 | Dialog/menu dapat dioperasikan keyboard, ditutup Escape, dan memulihkan fokus | Uji keyboard manual |
| AC-07 | Input wajib kosong, email invalid, nomor invalid, service kosong, dan tanggal lampau ditolak | Uji batas validasi dengan data contoh |
| AC-08 | Kontak Email/Phone hanya memvalidasi kanal aktif; tanggal memakai Europe/London | Uji pergantian kanal dan tanggal sekitar pergantian hari London |
| AC-09 | Submit valid menampilkan sukses demo tanpa konfirmasi booking nyata; reset membersihkan state | Selesaikan form dan ulangi |
| AC-10 | Tidak ada pengiriman/persistence/logging input oleh aplikasi | Inspeksi kode, Network dan Storage browser; refresh |
| AC-11 | Review tanpa Google rating; kontak tanpa alamat/nomor/tautan operasional palsu | Audit konten dan link |
| AC-12 | Layout tidak overflow pada 320/375/768/1440px dan zoom 200% | Pemeriksaan visual dan interaksi |
| AC-13 | Fokus, kontras, label, alt dan reduced motion memenuhi requirement | Audit otomatis ditambah pemeriksaan manual |
| AC-14 | Derivative gambar digunakan, lazy loading tepat, tidak memuat master seluruh galeri saat awal | Network production build dan inspeksi layout shift |
| AC-15 | Build dan pemeriksaan TypeScript/lint yang dikonfigurasi lulus; tidak ada runtime error | Jalankan checks dan happy-path browser |
| AC-16 | Demo Privacy menjelaskan perilaku sebenarnya; metadata/domain sesuai deployment | Review konten sebelum publikasi |

Tes otomatis diprioritaskan untuk risiko nyata: validasi kontak bersyarat, tanggal London, pemetaan ID paket, dan submit demo tanpa request jaringan. Pemeriksaan visual dilakukan terpisah. Tidak perlu menguji ulang setiap string statis melalui unit test.

## 12. Risiko dan mitigasi

| Risiko | Mitigasi |
|---|---|
| Pengunjung menganggap bisnis/demo booking nyata | Notice awal, label bukti simulasi dan sukses demo eksplisit |
| Ketidaksesuaian detail mobil AI | Pertahankan arah hero yang disetujui; jangan klaim akurasi factory atau pekerjaan nyata |
| Diptych lebar kurang terbaca di mobile | Rasio utuh, tombol enlarged view, gambar resolusi tepat; jangan memaksakan slider |
| Foto besar membuat halaman lambat | Derivative responsif, lazy loading, pemeriksaan Network |
| Harga/nama layanan berbeda antara kartu dan form | Konten terpusat dengan ID stabil |
| Input demo bocor ke layanan eksternal | Tanpa backend/analytics; audit Network, Storage, dan kode |

## 13. Tahap pengerjaan dan definisi selesai

Urutan setelah PRD: desain layout berdasarkan requirement → implementasi konten dan halaman → interaksi form/galeri → derivative aset dan optimasi → validasi → deployment portfolio.

Estimasi perencanaan awal 2–3 minggu sejak implementasi dimulai; bukan komitmen deadline. Anggaran eksternal seminimal mungkin, tanpa layanan berbayar wajib pada MVP. Paket/biaya hosting diperiksa saat deployment diperlukan.

MVP selesai ketika semua P0 dan AC-01 sampai AC-16 lulus atau keterbatasan pengujian didokumentasikan secara konkret, tidak ada broken link/runtime error, form tidak mengirim atau menyimpan data, dan portfolio dapat ditinjau di mobile serta desktop.

Tidak ada keputusan bisnis yang wajib dijawab lagi untuk mulai desain/implementasi. Hal yang baru ditentukan ketika tahap tersebut tiba: detail komposisi/typography, ukuran derivative gambar, versi dependency, URL deployment, dan perilaku log hosting aktual. Tidak diperlukan tambahan foto, real Google profile atau kontak bisnis untuk versi portfolio ini.
