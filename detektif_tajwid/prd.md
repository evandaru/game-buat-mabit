# PRD — Detektif Tajwid: Idzhar

## 1. Gambaran Umum

**Nama:** Detektif Tajwid
**File:** `game.html`
**Platform:** Browser / PC / laptop
**Target:** Anak SD kelas 4–6
**Materi:** Tajwid — **Nun Sakinah (نْ) dan Tanwin**, dengan fokus utama pada **Idzhar Halqi**.

Konsep permainan dibuat seperti permainan **Truth or Dare**, tetapi diganti menjadi permainan detektif.

Anak diberikan sebuah ayat Al-Qur'an. Mereka harus menjadi “detektif” yang mencari:

1. Di mana terdapat **Nun Sakinah / Tanwin**?
2. Apakah setelahnya terdapat salah satu huruf Idzhar?
3. Jika iya → **Idzhar**
4. Jika tidak → **Bukan Idzhar**

Game tidak perlu langsung mengajarkan seluruh hukum Nun Sakinah. Untuk versi pertama, fokus hanya pada kemampuan mengenali **Idzhar**.

---

# 2. Konsep Gameplay

Alur utama:

```text
START
  ↓
Pilih Mode
  ↓
Muncul Ayat
  ↓
Anak mencari Nun Sakinah / Tanwin
  ↓
Klik bagian yang dianggap sebagai "tersangka"
  ↓
Pilih:
[ IDZHAR ] [ BUKAN IDZHAR ]
  ↓
Sistem mengecek jawaban
  ↓
Benar → +Score
Salah → kesempatan berkurang
  ↓
Ayat berikutnya
  ↓
Hasil akhir
```

Contoh:

> مِنْ هَادٍ

Anak harus menemukan:

```text
مِنْ هَادٍ
  ↑
  نْ
```

Kemudian melihat huruf setelah Nun Sakinah:

```text
نْ + ه
```

Huruf **ه** termasuk huruf Idzhar Halqi.

Jawaban:

> **IDZHAR**

---

# 3. Huruf Idzhar

Game harus menyediakan referensi kecil mengenai 6 huruf Idzhar:

```text
ء  ه  ع  ح  غ  خ
```

Bisa dibuat menjadi “kartu bukti”:

```text
╭────────────────────╮
│   HURUF IDZHAR     │
│                    │
│  ء  ه  ع  ح  غ  خ  │
╰────────────────────╯
```

Namun jangan terlalu besar agar anak tetap fokus bermain.

---

# 4. Desain UI

UI mengikuti screenshot yang diberikan.

Karakteristik visual:

* Background putih/off-white.
* Grid/titik kecil sangat samar di background.
* Layout horizontal.
* Card besar dengan border hitam.
* Sudut rounded.
* Shadow hitam tebal ke kanan-bawah.
* Typography bold.
* Minimalis.
* Tidak menggunakan gradient.
* Tidak menggunakan UI dashboard yang ramai.
* Tidak menggunakan ilustrasi berlebihan.
* Nuansanya seperti game edukasi modern yang sangat sederhana.

Struktur visual:

```text
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│                     DETEKTIF TAJWID                         │
│                                                             │
│                 ┌─────────────────────┐                     │
│                 │                     │                     │
│                 │      AYAT #01       │                     │
│                 │                     │                     │
│                 │      مِنْ هَادٍ      │                     │
│                 │                     │                     │
│                 └─────────────────────┘                     │
│                                                             │
│                                                             │
│        ┌──────────────────┐   ┌──────────────────┐          │
│        │                  │   │                  │          │
│        │      IDZHAR      │   │   BUKAN IDZHAR   │          │
│        │                  │   │                  │          │
│        └──────────────────┘   └──────────────────┘          │
│                                                             │
│                                                             │
│              Skor: 80     Nyawa: ♥ ♥ ♥                     │
│                                                             │
│       ← Pilih    → Jawab    Spasi Kembali                  │
└─────────────────────────────────────────────────────────────┘
```

---

# 5. Halaman Menu

Saat game dibuka:

```text
                    DETEKTIF TAJWID

                 MISTERI NUN SAKINAH
                       & TANWIN

              ┌─────────────────────┐
              │       MULAI         │
              └─────────────────────┘

              ┌─────────────────────┐
              │     CARA MAIN      │
              └─────────────────────┘
```

Tambahkan subtitle kecil:

> “Temukan petunjuknya. Pecahkan tajwidnya.”

Tidak perlu menu yang terlalu kompleks.

---

# 6. Tutorial

Sebelum bermain, tampilkan tutorial singkat.

### Petunjuk 1

```text
CARI TERSANGKA

Temukan Nun Sakinah (نْ)
atau Tanwin (ــً ــٍ ــٌ)
```

### Petunjuk 2

```text
CARI PETUNJUK BERIKUTNYA

Perhatikan huruf setelah
Nun Sakinah atau Tanwin.
```

### Petunjuk 3

```text
6 HURUF IDZHAR

ء  ه  ع  ح  غ  خ
```

### Petunjuk 4

```text
JIKA BERTEMU SALAH SATU
DARI 6 HURUF TERSEBUT...

→ IDZHAR
```

Kemudian:

> **SIAP MENJADI DETEKTIF?**

[ MULAI ]

---

# 7. Tampilan Soal

Soal harus menjadi bagian paling dominan.

Contoh:

```text
AYAT #03


        مَنْ آمَنَ


TEMUKAN PETUNJUKNYA
```

Anak tidak langsung diberikan jawaban.

Mereka harus memilih bagian tertentu dari ayat.

---

# 8. Mekanisme “Mencari Tersangka”

Ini bagian yang menurut saya paling penting untuk membuat game benar-benar terasa seperti **detektif**, bukan sekadar quiz tajwid.

Ayat ditampilkan dalam bentuk token/kata.

Contoh:

```text
مَنْ       آمَنَ
```

Anak dapat mengklik bagian yang dicurigai.

Ketika diklik:

```text
مَ [نْ] آمَنَ
```

Bagian tersebut mendapatkan outline/highlight.

Kemudian muncul:

```text
TERSANGKA DITEMUKAN

نْ

Sekarang periksa huruf setelahnya.
```

Lalu tombol:

```text
[ IDZHAR ]       [ BUKAN IDZHAR ]
```

---

# 9. Dua Tahap Jawaban

Jangan langsung hanya memberikan dua tombol.

Lebih bagus dibuat dua tahap:

### Tahap 1 — Cari

> “Di mana Nun Sakinah/Tanwin?”

Anak klik bagian ayat.

### Tahap 2 — Analisis

> “Apakah hukum bacaannya Idzhar?”

Anak memilih:

```text
┌─────────────────┐
│     IDZHAR      │
└─────────────────┘

┌─────────────────┐
│  BUKAN IDZHAR   │
└─────────────────┘
```

Ini melatih **proses berpikir**, bukan sekadar menghafal jawaban.

---

# 10. Feedback Jawaban

Jika benar:

```text
BENAR!

Detektif menemukan petunjuk!

نْ + ه

ه termasuk huruf Idzhar.

+10 POIN
```

Jika salah:

```text
BELUM TEPAT!

Coba periksa kembali huruf
setelah Nun Sakinah/Tanwin.

Petunjuk:
ء ه ع ح غ خ
```

Untuk anak SD, sebaiknya jangan langsung mengatakan “Salah!!!”.

Gunakan feedback yang mendorong mereka mencoba lagi.

---

# 11. Sistem Score

Contoh:

```text
Jawaban benar       +10
Menemukan target    +5
Jawaban salah       -3
Hint digunakan      -2
```

Atau untuk versi paling sederhana:

```text
Benar = +10
Salah = 0
```

Saya lebih menyarankan versi sederhana terlebih dahulu agar fokusnya tetap pembelajaran.

---

# 12. Sistem Nyawa

Gunakan:

```text
♥ ♥ ♥
```

Misalnya:

* 3 nyawa.
* Salah menjawab → kehilangan 1 nyawa.
* Nyawa habis → Game Over.

Tetapi kesalahan saat memilih “tersangka” sebaiknya **tidak langsung mengurangi nyawa**.

Nyawa berkurang ketika anak benar-benar memberikan jawaban hukum tajwid yang salah.

---

# 13. Level

Versi awal bisa memiliki 3 level.

### LEVEL 1 — Pemula

Ayat pendek.

Fokus:

> menemukan Nun Sakinah/Tanwin.

Contoh pola:

```text
مِنْ هَادٍ
مَنْ آمَنَ
عَلِيمٌ حَكِيمٌ
```

### LEVEL 2 — Detektif

Ayat lebih panjang.

Terdapat beberapa Nun Sakinah/Tanwin.

Anak harus menemukan target yang benar.

### LEVEL 3 — Master Detektif

Dalam satu ayat terdapat beberapa kemungkinan hukum.

Anak harus menentukan mana yang benar-benar **Idzhar**.

---

# 14. Dataset Soal

Soal sebaiknya disimpan dalam JavaScript object sehingga mudah ditambah.

Contoh struktur:

```javascript
const questions = [
  {
    id: 1,
    ayat: "مِنْ هَادٍ",
    target: "نْ",
    afterLetter: "ه",
    hukum: "idzhar",
    explanation: "Nun sukun bertemu huruf ه, salah satu huruf Idzhar."
  },
  {
    id: 2,
    ayat: "مَنْ آمَنَ",
    target: "نْ",
    afterLetter: "ء",
    hukum: "idzhar",
    explanation: "Nun sukun bertemu hamzah (ء), sehingga dibaca Idzhar."
  }
];
```

Namun untuk soal Al-Qur'an, teks ayat dan tanda baca harus **diverifikasi dengan mushaf/sumber Qur'an yang tepercaya**, jangan dibuat secara improvisasi.

---

# 15. Mode Keyboard

Mengikuti UI screenshot, keyboard menjadi bagian dari desain.

Contoh:

```text
← Pilih     → Jawab     Spasi Kembali
```

Fungsinya:

```text
← / →
Navigasi pilihan

ENTER
Konfirmasi

SPACE
Kembali / pause
```

Untuk gameplay:

```text
← →       memilih tombol
ENTER     memilih
SPACE     kembali
```

Tetap harus mendukung mouse/touch karena anak kemungkinan lebih nyaman mengklik.

---

# 16. Layout Responsif

Desktop menjadi prioritas karena game kemungkinan dimainkan melalui laptop/PC.

Target:

```text
1920 × 1080
1366 × 768
1280 × 720
```

Tablet tetap harus usable.

Mobile tidak perlu menjadi prioritas utama untuk versi pertama.

---

# 17. Teknologi

Cukup menggunakan:

```text
game.html
style.css
script.js
```

Tetapi kalau ingin benar-benar **single file**, semuanya dapat dimasukkan ke:

```text
game.html
```

Teknologi:

* HTML5
* CSS3
* Vanilla JavaScript
* Tidak membutuhkan backend.
* Tidak membutuhkan database.
* Tidak membutuhkan internet setelah file dibuka.
* Data soal disimpan dalam JavaScript.

---

# 18. State Game

Game memiliki state:

```javascript
MENU
TUTORIAL
PLAYING
SELECTING_TARGET
ANSWERING
FEEDBACK
GAME_OVER
RESULT
```

Alur:

```text
MENU
 ↓
TUTORIAL
 ↓
PLAYING
 ↓
SELECT TARGET
 ↓
ANSWER
 ↓
FEEDBACK
 ↓
NEXT QUESTION
 ↓
RESULT
```

---

# 19. Halaman Hasil

Setelah semua soal selesai:

```text
╭────────────────────────────────────╮
│                                    │
│          MISI SELESAI!             │
│                                    │
│             90                     │
│            POIN                    │
│                                    │
│       9 / 10 SOAL BENAR            │
│                                    │
│       DETEKTIF TAJWID              │
│                                    │
│   ┌────────────────────────────┐   │
│   │       MAIN LAGI             │   │
│   └────────────────────────────┘   │
│                                    │
│   ┌────────────────────────────┐   │
│   │       MENU UTAMA            │   │
│   └────────────────────────────┘   │
╰────────────────────────────────────╯
```

---

# 20. Detail Visual yang Wajib Dipertahankan

Dari screenshot referensi, identitas visualnya harus sangat konsisten:

**Background**

* putih/off-white
* dotted grid sangat tipis

**Card**

* border hitam ±4 px
* radius ±20 px
* shadow hitam solid ±8 px ke kanan-bawah
* background putih

**Typography**

* sans-serif
* sangat bold untuk heading
* uppercase untuk label tombol
* ukuran besar dan mudah dibaca anak

**Button**

* bentuk card
* border hitam
* shadow hitam
* hover membuat tombol sedikit naik
* active membuat tombol turun mendekati posisi normal

Contoh efek:

```css
transform: translate(-3px, -3px);
```

saat hover dan kembali ketika ditekan.

---

# 21. Identitas “Detektif”

Supaya konsep detektif terasa, gunakan istilah:

| Istilah Game | Makna                |
| ------------ | -------------------- |
| Kasus        | Soal                 |
| Tersangka    | Nun Sakinah/Tanwin   |
| Petunjuk     | Huruf setelahnya     |
| Bukti        | Huruf Idzhar         |
| Investigasi  | Mencari Nun/Tanwin   |
| Kesimpulan   | Jawaban hukum tajwid |
| Misi         | Satu ronde           |

Contoh:

> **KASUS #04**

> “Temukan tersangka dan periksa petunjuk di sebelahnya.”

Ini jauh lebih engaging daripada:

> “Soal nomor 4. Pilih jawaban yang benar.”

---

# 22. Prinsip Pembelajaran

Game harus mengajarkan pola:

```text
NUN SUKUN / TANWIN
        ↓
LIHAT HURUF SETELAHNYA
        ↓
APAKAH:
ء ه ع ح غ خ ?
        ↓
      YA
        ↓
     IDZHAR
```

Jadi anak tidak hanya menghafal:

> “Idzhar = ء ه ع ح غ خ”

tetapi memahami **cara mendeteksi Idzhar**.

---

# 23. Fitur yang Sengaja Tidak Dibuat Dulu

Untuk versi `game.html` pertama, jangan masukkan:

* Idgham
* Iqlab
* Ikhfa
* Mim Sakinah
* Mad
* Qalqalah
* multiplayer
* login
* database
* leaderboard online

Fokus:

> **“Apakah anak sudah bisa menemukan Nun Sakinah/Tanwin dan mengenali Idzhar?”**

Kalau fondasi ini sudah enak dimainkan, baru bisa dikembangkan menjadi **Detektif Tajwid 2.0** dengan seluruh hukum Nun Sakinah/Tanwin.

---

## 24. Acceptance Criteria

Game dianggap selesai apabila:

* [ ] Bisa dibuka langsung dengan `game.html`.
* [ ] Tidak membutuhkan server.
* [ ] Ada menu utama.
* [ ] Ada tutorial.
* [ ] Ayat tampil dengan jelas.
* [ ] Anak dapat memilih Nun Sakinah/Tanwin.
* [ ] Anak dapat memilih Idzhar/Bukan Idzhar.
* [ ] Sistem memvalidasi jawaban.
* [ ] Ada feedback benar/salah.
* [ ] Score berjalan.
* [ ] Nyawa berjalan.
* [ ] Ada soal berikutnya.
* [ ] Ada halaman hasil.
* [ ] Keyboard ← → Enter/Space dapat digunakan.
* [ ] Mouse dapat digunakan.
* [ ] UI mengikuti referensi screenshot: minimalis, card putih, border hitam, shadow hitam, dotted background.
* [ ] Tidak ada ketergantungan framework/backend.

**Inti desainnya:** jangan membuat ini terasa seperti “ujian tajwid digital”. Buat terasa seperti **anak sedang memecahkan kasus**: cari `نْ`/tanwin → periksa huruf di sebelahnya → temukan bukti `ء ه ع ح غ خ` → putuskan **IDZHAR atau bukan**.
