// ============================================================
// DATA SOAL - TEBAK IPAS (Kelas 5 SD - Kurikulum Merdeka)
// Sumber Materi: Buku Siswa IPAS Kelas 5 (Bab 1 & Bab 2) + STS
// Bab 1: Melihat karena Cahaya, Mendengar karena Bunyi
// Bab 2: Harmoni dalam Ekosistem
// ------------------------------------------------------------
// CARA MENAMBAH GAMBAR SENDIRI NANTI:
// - Gambar foto/file : gambar: { tipe: "img", src: "gambar/nama_file.jpg" }
// - Deretan emoji    : gambar: { tipe: "emoji", scene: ["🌱", "☀️", "💧"] }
// - Diagram SVG      : gambar: { tipe: "svg", id: "kunci_svg" } (isi di DAFTAR_GAMBAR)
// - Tanpa gambar     : gambar: null
// ============================================================

const DATA = [
  // ==========================================================
  // BAB 1 - TOPIK A: SIFAT-SIFAT CAHAYA
  // ==========================================================
  {
    id: 1,
    kategori: "Sifat Cahaya",
    pertanyaan: "Cahaya matahari yang masuk ke dalam ruangan melalui celah-celah genting membuktikan bahwa cahaya memiliki sifat merambat ....................",
    jawaban: "Lurus",
    penjelasan: "Cahaya selalu merambat lurus dari sumbernya. Hal ini terlihat jelas saat berkas sinar matahari menembus celah atap, jendela, atau pepohonan rindang.",
    gambar: null
  },
  {
    id: 2,
    kategori: "Sifat Cahaya",
    pertanyaan: "Kaca jendela yang jernih dapat dilalui seluruh cahaya secara sempurna. Benda yang meneruskan cahaya seperti ini disebut benda ....................",
    jawaban: "Bening",
    penjelasan: "Benda bening (transparan) dapat ditembus cahaya secara sempurna, misalnya kaca jendela bening, plastik mika jernih, dan air jernih.",
    gambar: null
  },
  {
    id: 3,
    kategori: "Sifat Cahaya",
    pertanyaan: "Sendok yang dimasukkan ke dalam gelas berisi air tampak patah atau bengkok karena adanya peristiwa .................... cahaya.",
    jawaban: "Pembiasan",
    penjelasan: "Pembiasan (refraksi) terjadi ketika cahaya merambat melalui dua medium yang berbeda kerapatannya, yaitu dari udara ke dalam air.",
    gambar: null
  },
  {
    id: 4,
    kategori: "Sifat Cahaya",
    pertanyaan: "Dasar kolam renang yang airnya jernih akan terlihat lebih .................... dari kedalaman aslinya akibat pembiasan cahaya.",
    jawaban: "Dangkal",
    penjelasan: "Cahaya yang dibelokkan saat melewati air membuat dasar kolam renang tampak terangkat dan terlihat lebih dangkal dari kenyataannya.",
    gambar: null
  },
  {
    id: 5,
    kategori: "Sifat Cahaya",
    pertanyaan: "Pelangi terbentuk setelah hujan karena butiran air hujan berfungsi seperti prisma yang memicu peristiwa .................... cahaya matahari.",
    jawaban: "Penguraian",
    penjelasan: "Cahaya putih matahari diuraikan (dispersi) oleh butiran air hujan menjadi tujuh warna: merah, jingga, kuning, hijau, biru, nila, dan ungu (Me-Ji-Ku-Hi-Bi-Ni-U).",
    gambar: null
  },
  {
    id: 6,
    kategori: "Sifat Cahaya",
    pertanyaan: "Kaca spion kendaraan bermotor menggunakan cermin .................... agar pengendara dapat melihat area belakang lebih luas.",
    jawaban: "Cembung",
    penjelasan: "Cermin cembung memiliki sifat menyebarkan cahaya dan menghasilkan bayangan yang tegak, diperkecil, serta memiliki jangkauan pandangan yang sangat luas.",
    gambar: null
  },
  {
    id: 7,
    kategori: "Sifat Cahaya",
    pertanyaan: "Cermin yang menghasilkan bayangan tegak dan ukurannya persis sama besar dengan tubuh kita saat bercermin adalah cermin ....................",
    jawaban: "Datar",
    penjelasan: "Cermin datar menghasilkan bayangan yang sama besar, tegak, bersifat semu (maya), dan jarak benda ke cermin sama dengan jarak bayangan ke cermin.",
    gambar: null
  },
  {
    id: 8,
    kategori: "Sifat Cahaya",
    pertanyaan: "Ketika berkas cahaya mengenai permukaan benda gelap yang tidak tembus cahaya, maka di belakang benda tersebut akan terbentuk ....................",
    jawaban: "Bayangan",
    penjelasan: "Cahaya hanya merambat lurus dan tidak dapat membelok melewati benda gelap, sehingga daerah di belakang benda yang terhalang menjadi gelap membentuk bayangan.",
    gambar: null
  },

  // ==========================================================
  // BAB 1 - TOPIK B: INDRA PENGLIHATAN (MATA)
  // ==========================================================
  {
    id: 9,
    kategori: "Indra Penglihatan",
    pertanyaan: "Bagian luar mata berupa rambut tebal di atas mata yang berfungsi menahan keringat agar tidak masuk ke bola mata yaitu ....................",
    jawaban: "Alis mata",
    penjelasan: "Alis mata melindungi mata dari tetesan keringat dan air hujan dari dahi, sedangkan bulu mata melindungi mata dari debu dan kotoran.",
    gambar: null
  },
  {
    id: 10,
    kategori: "Indra Penglihatan",
    pertanyaan: "Celah bulat berwarna hitam di tengah iris mata yang berfungsi mengatur banyak sedikitnya cahaya yang masuk ke mata disebut ....................",
    jawaban: "Pupil",
    penjelasan: "Pupil akan membesar di tempat yang gelap atau redup agar cahaya masuk lebih banyak, dan mengecil di tempat terang agar mata tidak silau.",
    gambar: null
  },
  {
    id: 11,
    kategori: "Indra Penglihatan",
    pertanyaan: "Bagian mata yang memberi warna pada bola mata manusia (seperti hitam, cokelat, atau biru) adalah ....................",
    jawaban: "Iris",
    penjelasan: "Iris mengandung pigmen warna mata dan berfungsi mengatur besar kecilnya ukuran pupil.",
    gambar: null
  },
  {
    id: 12,
    kategori: "Indra Penglihatan",
    pertanyaan: "Lapisan paling belakang pada bola mata yang peka cahaya dan menjadi tempat jatuhnya bayangan benda dinamakan ....................",
    jawaban: "Retina",
    penjelasan: "Retina (selaput jala) menangkap bayangan nyata, terbalik, dan diperkecil, lalu mengirimkan sinyal informasi tersebut melalui saraf optik ke otak.",
    gambar: null
  },
  {
    id: 13,
    kategori: "Indra Penglihatan",
    pertanyaan: "Orang yang kesulitan melihat benda-benda jarak jauh (rabun jauh/miopi) dapat dibantu menggunakan kacamata berlensa cekung atau kacamata ....................",
    jawaban: "Minus",
    penjelasan: "Miopi (rabun jauh) terjadi karena bayangan jatuh di depan retina. Lensa cekung (minus) membantu menyebarkan cahaya agar jatuh tepat di retina.",
    gambar: null
  },
  {
    id: 14,
    kategori: "Indra Penglihatan",
    pertanyaan: "Kacamata berlensa cembung atau kacamata plus digunakan untuk membantu orang yang menderita rabun ....................",
    jawaban: "Dekat",
    penjelasan: "Rabun dekat (hipermetropi) membuat seseorang sulit membaca atau melihat jelas benda yang dekat karena bayangan jatuh di belakang retina.",
    gambar: null
  },

  // ==========================================================
  // BAB 1 - TOPIK C & D: BUNYI DAN INDRA PENDENGARAN
  // ==========================================================
  {
    id: 15,
    kategori: "Sifat Bunyi",
    pertanyaan: "Segala bunyi atau suara dihasilkan oleh benda yang ....................",
    jawaban: "Bergetar",
    penjelasan: "Semua sumber bunyi (seperti senar gitar, pita suara, atau drum) menghasilkan getaran yang merambat membentuk gelombang bunyi.",
    gambar: null
  },
  {
    id: 16,
    kategori: "Sifat Bunyi",
    pertanyaan: "Bunyi dapat merambat melalui tiga jenis medium, yaitu zat padat, zat cair, dan ....................",
    jawaban: "Gas",
    penjelasan: "Bunyi membutuhkan medium perantara untuk merambat. Bunyi merambat paling cepat pada zat padat dan tidak dapat merambat di ruang hampa udara.",
    gambar: null
  },
  {
    id: 17,
    kategori: "Sifat Bunyi",
    pertanyaan: "Bunyi pantul yang terdengar hampir bersamaan dengan bunyi asli sehingga mengganggu kejelasan suara asli disebut ....................",
    jawaban: "Gaung",
    penjelasan: "Gaung (atau kerdam) terjadi di ruangan sempit berdinding keras karena bunyi pantul datang sebelum bunyi asli selesai diucapkan.",
    gambar: null
  },
  {
    id: 18,
    kategori: "Sifat Bunyi",
    pertanyaan: "Bunyi pantul yang terdengar lengkap dan jelas setelah bunyi asli selesai diucapkan di area terbuka luas disebut ....................",
    jawaban: "Gema",
    penjelasan: "Gema terjadi di tebing pegunungan, bukit, atau lembah yang jauh, di mana bunyi pantul sampai setelah bunyi asli selesai terdengar.",
    gambar: null
  },
  {
    id: 19,
    kategori: "Sifat Bunyi",
    pertanyaan: "Dinding bioskop dan studio rekaman dilapisi busa atau karpet empuk dengan tujuan untuk .................... bunyi pantul.",
    jawaban: "Meredam",
    penjelasan: "Bahan lunak dan berpori seperti karpet, busa, dan wol menyerap energi gelombang bunyi sehingga mencegah terjadinya gaung.",
    gambar: null
  },
  {
    id: 20,
    kategori: "Sifat Bunyi",
    pertanyaan: "Kemampuan hewan seperti kelelawar dan lumba-lumba memanfaatkan pantulan bunyi untuk mengenali mangsa dan rintangan disebut ....................",
    jawaban: "Ekolokasi",
    penjelasan: "Ekolokasi adalah navigasi berbasis pantulan gelombang bunyi ultrasonik yang dipancarkan kelelawar atau lumba-lumba ke lingkungan sekitarnya.",
    gambar: null
  },
  {
    id: 21,
    kategori: "Indra Pendengaran",
    pertanyaan: "Selaput tipis di dalam telinga yang bergetar saat menerima gelombang bunyi dari luar adalah .................... telinga.",
    jawaban: "Gendang",
    penjelasan: "Gendang telinga (membran timpani) menangkap getaran suara dari liang telinga lalu meneruskannya ke tiga tulang pendengaran.",
    gambar: null
  },
  {
    id: 22,
    kategori: "Indra Pendengaran",
    pertanyaan: "Bagian telinga dalam yang bentuknya melingkar mirip cangkang siput dan berisi cairan penerima getaran disebut ....................",
    jawaban: "Rumah siput",
    penjelasan: "Rumah siput (koklea) mengubah getaran cairan menjadi impuls saraf listrik untuk dikirim ke otak melalui saraf pendengaran.",
    gambar: null
  },

  // ==========================================================
  // BAB 2 - TOPIK A & B: RANTAI DAN JARING-JARING MAKANAN
  // ==========================================================
  {
    id: 23,
    kategori: "Rantai Makanan",
    pertanyaan: "Makhluk hidup yang mampu membuat makanannya sendiri melalui proses fotosintesis berperan sebagai ....................",
    jawaban: "Produsen",
    penjelasan: "Tumbuhan hijau di darat dan fitoplankton di laut berperan sebagai produsen utama penyedia energi bagi makhluk hidup lainnya.",
    gambar: null
  },
  {
    id: 24,
    kategori: "Rantai Makanan",
    pertanyaan: "Hewan herbivora pemakan tumbuhan pada rantai makanan selalu menempati tingkatan sebagai konsumen tingkat ....................",
    jawaban: "Satu (I)",
    penjelasan: "Konsumen tingkat I (primer) langsung memakan produsen. Contohnya ulat, belalang, kelinci, dan sapi.",
    gambar: null
  },
  {
    id: 25,
    kategori: "Rantai Makanan",
    pertanyaan: "Bakteri, jamur, dan cacing tanah yang menguraikan bangkai makhluk hidup serta menyuburkan tanah berperan sebagai ....................",
    jawaban: "Dekomposer",
    penjelasan: "Dekomposer (pengurai) menguraikan sisa-sisa organisme mati menjadi humus dan unsur hara tanah yang kembali diserap akar tanaman.",
    gambar: null
  },
  {
    id: 26,
    kategori: "Rantai Makanan",
    pertanyaan: "Pada ekosistem laut, tumbuhan mikroskopis bersel satu yang melayang di permukaan air dan berperan sebagai produsen adalah ....................",
    jawaban: "Fitoplankton",
    penjelasan: "Fitoplankton melakukan fotosintesis di permukaan laut dengan bantuan sinar matahari dan menjadi dasar rantai makanan laut.",
    gambar: null
  },
  {
    id: 27,
    kategori: "Rantai Makanan",
    pertanyaan: "Urutan rantai makanan di laut: Fitoplankton dimakan oleh hewan kecil bersel satu yang bernama ....................",
    jawaban: "Zooplankton",
    penjelasan: "Zooplankton berperan sebagai konsumen tingkat I di laut yang memakan fitoplankton, lalu zooplankton dimakan oleh ikan-ikan kecil.",
    gambar: null
  },
  {
    id: 28,
    kategori: "Rantai Makanan",
    pertanyaan: "Kumpulan dari beberapa rantai makanan yang saling terhubung dan tumpang tindih dalam suatu ekosistem disebut jaring-jaring ....................",
    jawaban: "Makanan",
    penjelasan: "Di alam nyata, satu jenis hewan bisa memakan lebih dari satu jenis makanan, sehingga rantai-rantai makanan bergabung membentuk jaring-jaring makanan.",
    gambar: null
  },
  {
    id: 29,
    kategori: "Piramida Makanan",
    pertanyaan: "Pada piramida makanan, tingkat paling bawah yang memiliki jumlah populasi dan energi paling besar ditempati oleh ....................",
    jawaban: "Produsen",
    penjelasan: "Dasar piramida selalu ditempati produsen (tumbuhan). Semakin ke atas puncaknya, energi dan jumlah populasinya semakin sedikit.",
    gambar: null
  },
  {
    id: 30,
    kategori: "Transfer Energi",
    pertanyaan: "Sumber energi utama dan pertama bagi seluruh kelangsungan kehidupan di bumi berasal dari cahaya ....................",
    jawaban: "Matahari",
    penjelasan: "Matahari memancarkan energi cahaya yang diserap tanaman untuk fotosintesis, lalu energinya berpindah ke hewan dan manusia melalui makanan.",
    gambar: null
  },

  // ==========================================================
  // BAB 2 - TOPIK C: KESEIMBANGAN EKOSISTEM & LINGKUNGAN
  // ==========================================================
  {
    id: 31,
    kategori: "Keseimbangan Ekosistem",
    pertanyaan: "Upaya menanam kembali pohon-pohon pada lahan atau hutan yang gundul dinamakan ....................",
    jawaban: "Reboisasi",
    penjelasan: "Reboisasi memulihkan fungsi hutan sebagai penyerap air, pencegah erosi/banjir, serta habitat alami hewan dan tumbuhan.",
    gambar: null
  },
  {
    id: 32,
    kategori: "Keseimbangan Ekosistem",
    pertanyaan: "Jika ular di area persawahan diburu habis oleh manusia, maka populasi hama .................... akan meningkat drastis dan merusak panen.",
    jawaban: "Tikus",
    penjelasan: "Ular sawah adalah predator alami tikus. Hilangnya populasi ular menyebabkan ledakan populasi hama tikus di sawah.",
    gambar: null
  },
  {
    id: 33,
    kategori: "Keseimbangan Ekosistem",
    pertanyaan: "Hewan yang memakan hewan lain dalam rantai makanan disebut karnivora atau ....................",
    jawaban: "Predator",
    penjelasan: "Predator (pemangsa) mengontrol jumlah populasi hewan mangsa agar ekosistem tetap berjalan seimbang.",
    gambar: null
  },
  {
    id: 34,
    kategori: "Keseimbangan Ekosistem",
    pertanyaan: "Pupuk alami yang dibuat dari pembusukan sampah organik seperti sisa sayur dan daun kering dengan bantuan dekomposer disebut pupuk ....................",
    jawaban: "Kompos",
    penjelasan: "Kompos memanfaatkan mikroorganisme dan dekomposer untuk mengurai sampah organik menjadi pupuk kaya nutrisi bagi tanah.",
    gambar: null
  },
  {
    id: 35,
    kategori: "Keseimbangan Ekosistem",
    pertanyaan: "Perburuan liar elang dan burung hantu dapat menyebabkan ketidakseimbangan ekosistem karena memutus rantai aliran ....................",
    jawaban: "Energi",
    penjelasan: "Setiap kepunahan satu komponen makhluk hidup akan mengganggu transfer energi dan menimbulkan lonjakan atau kepunahan hewan lainnya.",
    gambar: null
  },
  {
    id: 36,
    kategori: "Sifat Cahaya",
    pertanyaan: "Berdasarkan gambar, berkas sinar matahari yang menerobos celah pepohonan membuktikan bahwa cahaya memiliki sifat merambat ....................",
    jawaban: "Lurus",
    penjelasan: "Cahaya merambat lurus dari sumbernya. Peristiwa ini terlihat jelas saat berkas sinar matahari menembus celah rimbunnya dedaunan di hutan.",
    // HINT KEYWORD GOOGLE: "sunlight through trees crepuscular rays" atau "sinar matahari celah pohon hutan"
    gambar: {
      tipe: "img",
      src: "https://images.unsplash.com/photo-1462290625486-c142817fb94d?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  },
  {
    id: 37,
    kategori: "Sifat Cahaya",
    pertanyaan: "Perhatikan gambar. Pensil yang dicelupkan ke dalam gelas air tampak patah pada batas air karena peristiwa .................... cahaya.",
    jawaban: "Pembiasan",
    penjelasan: "Pembiasan cahaya terjadi karena cahaya merambat melewati dua zat yang berbeda kerapatannya, yaitu dari udara ke dalam air jernih.",
    // HINT KEYWORD GOOGLE: "pensil patah dalam air pembiasan" atau "pencil refraction in water"
    gambar: {
      tipe: "img",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcARvDjQM4DDSo_0XmDdwIJkY2g0PUkVNhAzsDS8Z3aNw6v4QqZ280VWI&s=10"
    }
  },
  {
    id: 38,
    kategori: "Sifat Cahaya",
    pertanyaan: "Berdasarkan gambar, bayangan hitam di dinding terbentuk karena cahaya terhalang oleh benda yang bersifat ....................",
    jawaban: "Gelap",
    penjelasan: "Benda gelap tidak dapat ditembus cahaya sama sekali sehingga di belakang benda tersebut terbentuk daerah gelap yang disebut bayangan.",
    // HINT KEYWORD GOOGLE: "shadow puppet hands" atau "bayangan tangan kelinci senter"
    gambar: {
      tipe: "img",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD8ox35_JltgtmTZCoHzECcXDngK9z8jcKqFIWQUE1Zg&s"
    }
  },
  {
    id: 39,
    kategori: "Sifat Cahaya",
    pertanyaan: "Perhatikan gambar. Spektrum warna pelangi yang keluar dari prisma kaca menunjukkan bahwa cahaya matahari mengalami ....................",
    jawaban: "Penguraian",
    penjelasan: "Prisma kaca dapat menguraikan cahaya putih matahari menjadi tujuh warna penyusunnya: merah, jingga, kuning, hijau, biru, nila, dan ungu.",
    // HINT KEYWORD GOOGLE: "light prism rainbow spectrum" atau "prisma penguraian cahaya pelangi"
    gambar: {
      tipe: "img",
      src: "https://asset.kompas.com/crops/x7defCEtuF0XnMg2Rryg5Fmaeno=/0x0:1190x793/750x500/data/photo/2020/10/15/5f885852ded9a.jpg"
    }
  },
  {
    id: 40,
    kategori: "Sifat Cahaya",
    pertanyaan: "Cermin cembung di tikungan jalan seperti pada gambar menghasilkan bayangan yang tegak dan berukuran .................... agar area pandang lebih luas.",
    jawaban: "Diperkecil",
    penjelasan: "Cermin cembung menghasilkan bayangan maya, tegak, dan diperkecil, sehingga mampu memperlihatkan sudut pandang area jalan yang lebih lebar.",
    // HINT KEYWORD GOOGLE: "cermin cembung tikungan jalan" atau "convex safety mirror road"
    gambar: {
      tipe: "img",
      src: "https://cdn.salla.sa/DeAKd/VhEWhA9i6n6Ph3WBAq5aZiUV3PY045tfu3dGkO2F.png"
    }
  },

  // ==========================================================
  // BAB 1: INDRA PENGLIHATAN (MATA)
  // ==========================================================
  {
    id: 41,
    kategori: "Indra Penglihatan",
    pertanyaan: "Perhatikan bagian mata pada gambar. Bagian lingkaran hitam di tengah yang dapat mengecil saat terkena cahaya terang disebut ....................",
    jawaban: "Pupil",
    penjelasan: "Pupil mata berfungsi sebagai pintu masuk cahaya. Pupil akan mengecil saat suasana terang agar mata tidak silau, dan membesar di tempat gelap.",
    // HINT KEYWORD GOOGLE: "human eye pupil constriction" atau "pupil mata membesar mengecil"
    gambar: {
      tipe: "img",
      src: "https://my.clevelandclinic.org/-/scassets/Images/org/health/articles/eye-miosis"
    }
  },
  //anyu 
  {
    id: 42,
    kategori: "Indra Penglihatan",
    pertanyaan: "Berdasarkan diagram mata, lapisan dinding paling belakang bola mata yang bertugas menangkap bayangan benda adalah ....................",
    jawaban: "Retina",
    penjelasan: "Retina (selaput jala) dilapisi sel-sel peka cahaya yang bertugas menangkap bayangan benda lalu mengirimkannya ke otak melalui saraf penglihatan.",
    // HINT KEYWORD GOOGLE: "diagram anatomi mata retina ipas kelas 5" atau "eye anatomy retina diagram"
    gambar: {
      tipe: "img",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGYjHcw3USyOKQg38jz1gGR4uZPHq-0FkedUxkFQGCv9RXS0bW7qgaQuZz&s=10"
    }
  },
  {
    id: 43,
    kategori: "Indra Penglihatan",
    pertanyaan: "Seseorang yang kesulitan melihat tulisan di papan tulis dari kejauhan seperti pada gambar dapat dibantu dengan kacamata berlensa ....................",
    jawaban: "Cekung",
    penjelasan: "Penderita rabun jauh (miopi) membutuhkan kacamata berlensa cekung (minus) agar bayangan benda dapat jatuh tepat pada permukaan retina.",
    // HINT KEYWORD GOOGLE: "anak memakai kacamata membaca papan tulis" atau "myopia eye vision student"
    gambar: {
      tipe: "img",
      src: "https://eyesplusears.com/wp-content/uploads/2023/06/myopia-vision-simulation-1.webp"
    }
  },

  // ==========================================================
  // BAB 1: BUNYI DAN INDRA PENDENGARAN
  // ==========================================================
  {
    id: 44,
    kategori: "Sifat Bunyi",
    pertanyaan: "Percobaan menempelkan telinga pada meja kayu saat diketuk membuktikan bahwa bunyi dapat merambat melalui benda ....................",
    jawaban: "Padat",
    penjelasan: "Bunyi merambat paling cepat melalui benda padat (meja kayu) karena partikel zat padat tersusun sangat rapat dibanding zat cair atau gas.",
    // HINT KEYWORD GOOGLE: "percobaan mengetuk meja perambatan bunyi" atau "tapping wooden table sound conduction"
    gambar: {
      tipe: "img",
      src: "tebak_ipas/gambar/kuping_nempel.jpeg"
    }
  },
  {
    id: 45,
    kategori: "Sifat Bunyi",
    pertanyaan: "Percobaan dua anak yang berbicara menggunakan kaleng dan benang tegang membuktikan bahwa bunyi merambat melalui media perantara tali berupa zat ....................",
    jawaban: "Padat",
    penjelasan: "Getaran suara merambat dari dasar kaleng pertama melewati benang kasur yang tegang (zat padat) menuju kaleng penerima.",
    // HINT KEYWORD GOOGLE: "tin can telephone kids" atau "telepon kaleng benang perambatan bunyi"
    gambar: {
      tipe: "img",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8ydLiJ-F95ItGFWbE5hAYog4S8pKWDAk3etH0vqmGfNK5xB9HKFEN4fL8&s=10"
    }
  },
  {
    id: 46,
    kategori: "Sifat Bunyi",
    pertanyaan: "Pada gambar, kelelawar dapat terbang malam hari tanpa menabrak berkat kemampuan mendeteksi pantulan suara yang disebut ....................",
    jawaban: "Ekolokasi",
    penjelasan: "Kelelawar memancarkan gelombang bunyi ultrasonik berfrekuensi tinggi lalu mendengarkan bunyi pantulnya untuk memperkirakan posisi mangsa dan rintangan.",
    // HINT KEYWORD GOOGLE: "bat echolocation illustration" atau "kelelawar ekolokasi gelombang bunyi"
    gambar: {
      tipe: "img",
      src: "https://www.shutterstock.com/image-vector/bat-echolocation-sysem-explanation-sonar-260nw-2456263333.jpg"
    }
  },
  {
    id: 47,
    kategori: "Indra Pendengaran",
    pertanyaan: "Perhatikan gambar bagian telinga. Bagian telinga dalam yang berbentuk melingkar mirip cangkang hewan siput dinamakan ....................",
    jawaban: "Rumah siput",
    penjelasan: "Rumah siput (koklea) berisi cairan dan sel-sel rambut halus yang mengubah getaran mekanik menjadi sinyal saraf ke otak.",
    // HINT KEYWORD GOOGLE: "cochlea inner ear diagram" atau "bagian telinga rumah siput koklea"
    gambar: {
      tipe: "img",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlgwP-ufk1A12Fi8dE0YGzd4QTNwr3YXxzeADJ-iaIbx599MG--6XtURQ-&s=10"
    }
  },

  // ==========================================================
  // BAB 2: RANTAI & JARING-JARING MAKANAN
  // ==========================================================
  {
    id: 48,
    kategori: "Rantai Makanan",
    pertanyaan: "Berdasarkan bagan rantai makanan di atas, makhluk hidup yang menempati posisi konsumen tingkat 1 adalah hewan ....................",
    jawaban: "Kelinci",
    penjelasan: "Kelinci adalah herbivora yang langsung memakan rumput (produsen), sehingga bertindak sebagai konsumen tingkat 1 (primer).",
    // HINT KEYWORD GOOGLE: "rantai makanan rumput kelinci elang" atau "food chain grass rabbit eagle"
    gambar: {
      tipe: "img",
      src: "https://static.vecteezy.com/system/resources/thumbnails/046/551/536/small_2x/food-chain-showing-the-relationships-between-a-grass-rabbit-fox-eagle-fungi-and-bacteria-illustration-vector.jpg"
    }
  },
  {
    id: 49,
    kategori: "Rantai Makanan",
    pertanyaan: "Perhatikan gambar rantai makanan laut. Organisme mikroskopis penghasil makanan di permukaan laut pada nomor 1 adalah ....................",
    jawaban: "Fitoplankton",
    penjelasan: "Fitoplankton adalah tumbuhan mikro bersel satu yang berfotosintesis dan menjadi produsen utama bagi seluruh kehidupan laut.",
    // HINT KEYWORD GOOGLE: "marine food chain phytoplankton zooplankton" atau "rantai makanan laut fitoplankton pelikan"
    gambar: {
      tipe: "img",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV5Oz4eV6is8it2A9lWma4jmJbqeoxqjE6p1rAphLMqvU7k0C0shUAo6Z3&s=10"
    }
  },
  {
    id: 50,
    kategori: "Rantai Makanan",
    pertanyaan: "Berdasarkan gambar, jamur yang tumbuh subur pada batang pohon lapuk berperan penting di ekosistem sebagai ....................",
    jawaban: "Dekomposer",
    penjelasan: "Jamur dan bakteri bertindak sebagai dekomposer (pengurai) yang menghancurkan sisa organisme mati menjadi nutrisi penyubur tanah.",
    // HINT KEYWORD GOOGLE: "mushrooms on dead wood log decomposer" atau "jamur pengurai batang pohon lapuk"
    gambar: {
      tipe: "img",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8uhfkzi9kIWQcoeM5fAZKvMSuf3r5S-j_Ae9Vs5vpHaNYFO6-939S91I&s=10"
    }
  },
  {
    id: 51,
    kategori: "Rantai Makanan",
    pertanyaan: "Perhatikan jaring-jaring makanan di sawah pada gambar. Jika katak habis diburu, populasi hewan yang akan melonjak drastis adalah ....................",
    jawaban: "Belalang",
    penjelasan: "Katak adalah pemangsa alami belalang. Jika katak musnah, tidak ada yang memangsa belalang sehingga populasinya membludak.",
    // HINT KEYWORD GOOGLE: "jaring jaring makanan sawah ipas kelas 5" atau "food web grassland diagram"
    gambar: {
      tipe: "img",
      src: "https://c8.alamy.com/comp/2GW2D0R/education-poster-of-biology-for-food-chains-diagram-2GW2D0R.jpg"
    }
  },
  {
    id: 52,
    kategori: "Piramida Makanan",
    pertanyaan: "Pada gambar piramida makanan di atas, tingkatan paling dasar dengan jumlah energi terbesar selalu diisi oleh kelompok ....................",
    jawaban: "Produsen",
    penjelasan: "Dasar piramida makanan selalu ditempati oleh produsen (tumbuhan hijau) yang menyerap energi cahaya matahari secara langsung.",
    // HINT KEYWORD GOOGLE: "energy pyramid ecosystem diagram" atau "piramida makanan ekosistem kurikulum merdeka"
    gambar: {
      tipe: "img",
      src: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Ecological_Pyramid.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"
    }
  },

  // ==========================================================
  // BAB 2: KESEIMBANGAN EKOSISTEM & LINGKUNGAN
  // ==========================================================
  {
    id: 53,
    kategori: "Keseimbangan Ekosistem",
    pertanyaan: "Kegiatan seperti pada gambar, yaitu menanam kembali bibit pohon di lahan hutan gundul, disebut program ....................",
    jawaban: "Reboisasi",
    penjelasan: "Reboisasi bertujuan memulihkan ekosistem hutan, mencegah bencana banjir dan tanah longsor, serta menjaga ketersediaan oksigen bumi.",
    // HINT KEYWORD GOOGLE: "reboisasi menanam pohon anak sekolah" atau "kids planting tree reforestation"
    gambar: {
      tipe: "img",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS154fARZytC-ohcMOH3chkLrOVL9JIaTX5t8zladjmxB4K28PBN2e1T0&s=10"
    }
  },
  {
    id: 54,
    kategori: "Keseimbangan Ekosistem",
    pertanyaan: "Perburuan liar pada burung hantu dan ular sawah akan merugikan petani karena memicu ledakan hama ....................",
    jawaban: "Tikus",
    penjelasan: "Ular dan burung hantu adalah predator pengendali hama tikus. Hilangnya kedua pemangsa ini membuat tanaman padi habis dimakan tikus.",
    // HINT KEYWORD GOOGLE: "hama tikus makan padi sawah" atau "rat pest damaging rice crops"
    gambar: {
      tipe: "img",
      src: "https://blog.plantwise.org/wp-content/uploads/sites/7/2023/04/Rice-field-rat.jpg"
    }
  },
  {
    id: 55,
    kategori: "Keseimbangan Ekosistem",
    pertanyaan: "Wadah komposter pada gambar mengolah sisa sayuran dan daun kering menjadi pupuk alami penyubur tanah yang disebut pupuk ....................",
    jawaban: "Kompos",
    penjelasan: "Kompos adalah pupuk organik hasil daur ulang sisa sampah organik dapur/kebun yang diuraikan oleh cacing dan bakteri pengurai.",
    // HINT KEYWORD GOOGLE: "komposter ember sampah organik kompos" atau "compost bin organic waste garden"
    gambar: {
      tipe: "img",
      src: "https://gardenorganic-assets.s3.eu-west-2.amazonaws.com/images/_1920x1080_crop_center-center_60_line/Compost-bin.jpg"
    }
  }
];

// Wadah SVG kosong siap pakai jika ingin menambahkan diagram vektor sendiri
const DAFTAR_GAMBAR = {};