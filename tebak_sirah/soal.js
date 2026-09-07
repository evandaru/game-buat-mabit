// ============================================================
// DATA SOAL - TEBAK SIRAH NABI (Kelas 3 SD) - ISIAN KOSONG
// Bab 1 - 3 + STS | Format: melengkapi kalimat
// ------------------------------------------------------------
// CARA TAMBAH SOAL: copy satu blok { ... }, ganti isi, simpan,
// refresh browser. Selesai!
// ============================================================

const DATA = [
  // ---------- BAB 1: LEMBAH ABU THALIB ----------
  {
    id: 1,
    kategori: "Bab 1 - Lembah Abu Thalib",
    pertanyaan: "Tujuan hijrah pertama kali bagi kaum muslimin adalah ke negeri ....................",
    jawaban: "Habasyah",
    penjelasan: "Tujuan hijrah pertama kali bagi kaum muslimin adalah ke negeri Habasyah.",
  },
  {
    id: 2,
    kategori: "Bab 1 - Lembah Abu Thalib",
    pertanyaan: "Raja Habasyah .................... permintaan kaum musyrikin untuk mengembalikan kaum muslimin.",
    jawaban: "Menolak",
    penjelasan: "Raja Habasyah menolak permintaan kaum musyrikin untuk mengembalikan kaum muslimin.",
  },
  {
    id: 3,
    kategori: "Bab 1 - Lembah Abu Thalib",
    pertanyaan: "Kaum musyrikin merasa .................... saat kaum muslimin hijrah ke Habasyah.",
    jawaban: "Tidak senang",
    penjelasan: "Kaum musyrikin merasa tidak senang saat kaum muslimin hijrah ke Habasyah.",
  },
  {
    id: 4,
    kategori: "Bab 1 - Lembah Abu Thalib",
    pertanyaan: "Suku / Bani yang diputus hubungannya oleh kaum musyrikin adalah Bani ....................",
    jawaban: "Hasyim",
    penjelasan: "Suku / Bani yang diputus hubungannya oleh kaum musyrikin adalah Bani Hasyim.",
  },
  {
    id: 5,
    kategori: "Bab 1 - Lembah Abu Thalib",
    pertanyaan: "Abu Thalib memerintahkan Bani Hasyim melindungi Nabi Muhammad di sebuah ....................",
    jawaban: "Lembah",
    penjelasan: "Abu Thalib memerintahkan Bani Hasyim melindungi Nabi Muhammad di sebuah lembah.",
  },
  {
    id: 6,
    kategori: "Bab 1 - Lembah Abu Thalib",
    pertanyaan: "Lembah tempat Bani Hasyim melindungi Nabi Muhammad dikenal dengan nama Lembah ....................",
    jawaban: "Abu Thalib",
    penjelasan: "Lembah tempat Bani Hasyim melindungi Nabi Muhammad dikenal dengan nama Lembah Abu Thalib.",
  },
  {
    id: 7,
    kategori: "Bab 1 - Lembah Abu Thalib",
    pertanyaan: "Kaum musyrikin menuliskan janji kesepakatan boikot pada sebuah .................... kesepakatan.",
    jawaban: "Lembar",
    penjelasan: "Kaum musyrikin menuliskan janji kesepakatan boikot pada sebuah lembar kesepakatan.",
  },
  {
    id: 8,
    kategori: "Bab 1 - Lembah Abu Thalib",
    pertanyaan: "Lembar kesepakatan boikot digantung oleh kaum musyrikin di dinding ....................",
    jawaban: "Ka'bah",
    penjelasan: "Lembar kesepakatan boikot digantung oleh kaum musyrikin di dinding Ka'bah.",
  },
  {
    id: 9,
    kategori: "Bab 1 - Lembah Abu Thalib",
    pertanyaan: "Bani Hasyim tinggal dan terkurung di dalam Lembah Abu Thalib selama .................... tahun.",
    jawaban: "Tiga (3)",
    penjelasan: "Bani Hasyim tinggal dan terkurung di dalam Lembah Abu Thalib selama tiga (3) tahun.",
  },
  {
    id: 10,
    kategori: "Bab 1 - Lembah Abu Thalib",
    pertanyaan: "Selama di lembah, Bani Hasyim menderita karena kekurangan .................... dan pakaian.",
    jawaban: "Makanan",
    penjelasan: "Selama di lembah, Bani Hasyim menderita karena kekurangan makanan dan pakaian.",
  },
  {
    id: 11,
    kategori: "Bab 1 - Lembah Abu Thalib",
    pertanyaan: "Pembesar Quraisy yang sangat keras menolak pembatalan lembar kesepakatan adalah ....................",
    jawaban: "Abu Jahl",
    penjelasan: "Pembesar Quraisy yang sangat keras menolak pembatalan lembar kesepakatan adalah Abu Jahl.",
  },
  {
    id: 12,
    kategori: "Bab 1 - Lembah Abu Thalib",
    pertanyaan: "Hewan yang diperintahkan Allah untuk memakan lembar kesepakatan yaitu ....................",
    jawaban: "Rayap",
    penjelasan: "Hewan yang diperintahkan Allah untuk memakan lembar kesepakatan yaitu rayap.",
  },
  {
    id: 13,
    kategori: "Bab 1 - Lembah Abu Thalib",
    pertanyaan: "Setelah lembar kesepakatan hancur, Bani Hasyim akhirnya bisa kembali ke rumah mereka di ....................",
    jawaban: "Makkah",
    penjelasan: "Setelah lembar kesepakatan hancur, Bani Hasyim akhirnya bisa kembali ke rumah mereka di Makkah.",
  },

  // ---------- BAB 2: TAHUN KESEDIHAN ----------
  {
    id: 14,
    kategori: "Bab 2 - Tahun Kesedihan",
    pertanyaan: "Paman Nabi Muhammad yang selalu membela beliau meskipun masih musyrik adalah ....................",
    jawaban: "Abu Thalib",
    penjelasan: "Paman Nabi Muhammad yang selalu membela beliau meskipun masih musyrik adalah Abu Thalib.",
  },
  {
    id: 15,
    kategori: "Bab 2 - Tahun Kesedihan",
    pertanyaan: "Nabi Muhammad berulang kali menawarkan agama .................... kepada Abu Thalib.",
    jawaban: "Islam",
    penjelasan: "Nabi Muhammad berulang kali menawarkan agama Islam kepada Abu Thalib.",
  },
  {
    id: 16,
    kategori: "Bab 2 - Tahun Kesedihan",
    pertanyaan: "Meskipun sangat menyayangi Nabi Muhammad, Abu Thalib meninggal dunia dalam keadaan ....................",
    jawaban: "Musyrik",
    penjelasan: "Meskipun sangat menyayangi Nabi Muhammad, Abu Thalib meninggal dunia dalam keadaan musyrik.",
  },
  {
    id: 17,
    kategori: "Bab 2 - Tahun Kesedihan",
    pertanyaan: "Istri Nabi Muhammad yang wafat tidak lama setelah Abu Thalib wafat bernama ....................",
    jawaban: "Khadijah",
    penjelasan: "Istri Nabi Muhammad yang wafat tidak lama setelah Abu Thalib wafat bernama Khadijah.",
  },
  {
    id: 18,
    kategori: "Bab 2 - Tahun Kesedihan",
    pertanyaan: "Khadijah adalah seorang wanita yang sangat .................... dan banyak membantu dakwah Nabi.",
    jawaban: "Sabar",
    penjelasan: "Khadijah adalah seorang wanita yang sangat sabar dan banyak membantu dakwah Nabi.",
  },
  {
    id: 19,
    kategori: "Bab 2 - Tahun Kesedihan",
    pertanyaan: "Kehilangan dua orang tercinta dalam waktu berdekatan membuat Nabi Muhammad merasa sangat ....................",
    jawaban: "Sedih",
    penjelasan: "Kehilangan dua orang tercinta dalam waktu berdekatan membuat Nabi Muhammad merasa sangat sedih.",
  },
  {
    id: 20,
    kategori: "Bab 2 - Tahun Kesedihan",
    pertanyaan: "Nama tahun wafatnya Abu Thalib dan Khadijah yang diberikan oleh ahli sejarah yaitu Tahun ....................",
    jawaban: "Kesedihan",
    penjelasan: "Nama tahun wafatnya Abu Thalib dan Khadijah yang diberikan oleh ahli sejarah yaitu Tahun Kesedihan.",
  },

  // ---------- BAB 3: BERDAKWAH KE THAIF ----------
  {
    id: 21,
    kategori: "Bab 3 - Berdakwah ke Thaif",
    pertanyaan: "Kota yang paling dekat dengan kota Makkah tempat Nabi berdakwah adalah kota ....................",
    jawaban: "Thaif",
    penjelasan: "Kota yang paling dekat dengan kota Makkah tempat Nabi berdakwah adalah kota Thaif.",
  },
  {
    id: 22,
    kategori: "Bab 3 - Berdakwah ke Thaif",
    pertanyaan: "Nabi Muhammad pergi ke Thaif bertujuan untuk ....................",
    jawaban: "Berdakwah",
    penjelasan: "Nabi Muhammad pergi ke Thaif bertujuan untuk berdakwah.",
  },
  {
    id: 23,
    kategori: "Bab 3 - Berdakwah ke Thaif",
    pertanyaan: "Tokoh pertama yang ditemui Nabi Muhammad di Thaif adalah para .................... Thaif.",
    jawaban: "Pembesar",
    penjelasan: "Tokoh pertama yang ditemui Nabi Muhammad di Thaif adalah para pembesar Thaif.",
  },
  {
    id: 24,
    kategori: "Bab 3 - Berdakwah ke Thaif",
    pertanyaan: "Para pembesar kota Thaif .................... dakwah dan ajakan Nabi Muhammad.",
    jawaban: "Menolak",
    penjelasan: "Para pembesar kota Thaif menolak dakwah dan ajakan Nabi Muhammad.",
  },
  {
    id: 25,
    kategori: "Bab 3 - Berdakwah ke Thaif",
    pertanyaan: "Pembesar kota Thaif mengumpulkan para penduduknya dengan tujuan untuk .................... Nabi Muhammad.",
    jawaban: "Mengusir",
    penjelasan: "Pembesar kota Thaif mengumpulkan para penduduknya dengan tujuan untuk mengusir Nabi Muhammad.",
  },
  {
    id: 26,
    kategori: "Bab 3 - Berdakwah ke Thaif",
    pertanyaan: "Malaikat yang datang menemui Nabi Muhammad bersama dua malaikat penjaga gunung adalah Malaikat ....................",
    jawaban: "Jibril",
    penjelasan: "Malaikat yang datang menemui Nabi Muhammad bersama dua malaikat penjaga gunung adalah Malaikat Jibril.",
  },
  {
    id: 27,
    kategori: "Bab 3 - Berdakwah ke Thaif",
    pertanyaan: "Malaikat menawarkan bantuan untuk melemparkan Gunung Qu'aiqi'an dan Gunung .................... kepada penduduk Thaif.",
    jawaban: "Abu Qubais",
    penjelasan: "Malaikat menawarkan bantuan untuk melemparkan Gunung Qu'aiqi'an dan Gunung Abu Qubais kepada penduduk Thaif.",
  },
  {
    id: 28,
    kategori: "Bab 3 - Berdakwah ke Thaif",
    pertanyaan: "Nabi Muhammad .................... bantuan malaikat karena beliau tidak ingin penduduk Thaif hancur.",
    jawaban: "Menolak",
    penjelasan: "Nabi Muhammad menolak bantuan malaikat karena beliau tidak ingin penduduk Thaif hancur.",
  },
  {
    id: 29,
    kategori: "Bab 3 - Berdakwah ke Thaif",
    pertanyaan: "Nabi Muhammad sangat berharap suatu hari nanti penduduk kota Thaif mau menerima agama ....................",
    jawaban: "Islam",
    penjelasan: "Nabi Muhammad sangat berharap suatu hari nanti penduduk kota Thaif mau menerima agama Islam.",
  },
];
