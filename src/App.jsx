// src/App.jsx
import React, { useState, useEffect } from "react";
import logo from "./assets/logo.png";
import card1 from "./assets/card/card1.png";
import card2 from "./assets/card/card2.png";
import card3 from "./assets/card/card3.png";
import card4 from "./assets/card/card4.png";
import card5 from "./assets/card/card5.png";
import card6 from "./assets/card/card6.png";
import card7 from "./assets/card/card7.png";
import card8 from "./assets/card/card8.png";
import card9 from "./assets/card/card9.png";
import card10 from "./assets/card/card10.png";
import card11 from "./assets/card/card11.png";
import card12 from "./assets/card/card12.png";
import card13 from "./assets/card/card13.png";
import card14 from "./assets/card/card14.png";
import PembelianPopup from "./pembelian";


export default function App() {
  // --- Countdown Diskon ---
  const targetDate = new Date();
  targetDate.setHours(targetDate.getHours() + 8); // diskon habis 12 jam dari sekarang

  const calculateTimeLeft = () => {
    const difference = +targetDate - +new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-gray-900">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 shadow">
        <h1 className="font-bold text-xl text-white">LearnWithBims</h1>
        <a
          href="https://wa.me/6281234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-yellow-400 text-black font-semibold rounded-lg shadow hover:bg-yellow-500 transition"
        >
          Refund
        </a>
      </header>

      {/* Hero Section */}
      <section className="text-center px-6 py-20 bg-yellow-500">
        <img
          src={logo}
          alt="Logo"
          className="h-28 w-28 rounded-full border-4 border-black shadow-xl mx-auto mb-6 object-cover"
        />

        <h2 className="text-4xl font-extrabold mb-4 text-black">
          Belajar Fundamental Blockchain Dengan Analogi Dan Ilustrasi
        </h2>
        <p className="text-black font-bold max-w-2xl mx-auto mb-6">
          Kursus Video Lengkap dari Dasar sampai Kamu Bisa Memahami Apa Itu
          Blockchain. Cocok untuk pemula yang ingin memahami teknologi blockchain,
          smart contract, dan aplikasi Web3. Pembelajaran menggunakan analogi dan
          ilustrasi yang menarik supaya dapat dimengerti oleh Peserta.
        </p>
        <a
          href="https://wa.me/6281234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-green-600 text-black font-bold rounded-lg shadow hover:bg-yellow-600 transition"
        >
          Daftar Sekarang
        </a>
      </section>

      {/* Alasan Kenapa Belajar Blockchain */}
      <section className="px-6 py-16 bg-black-500 text-white text-center">
        <h2 className="text-3xl  font-bold mb-8">
          Kenapa Harus Belajar Blockchain?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="p-6 bg-white rounded-xl shadow-lg">
            <h3 className="text-xl text-black font-bold mb-2">📈 Tren Masa Depan</h3>
            <p className="text-black">
              Blockchain adalah teknologi masa depan yang akan dipakai di banyak
              industri, dari finansial, supply chain, hingga gaming.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg">
            <h3 className="text-xl text-black font-bold mb-2">💼 Peluang Karir</h3>
            <p className="text-black">
              Banyak perusahaan mencari talenta blockchain. Dengan skill ini, kamu
              punya peluang besar di dunia kerja.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg">
            <h3 className="text-xl text-black font-bold mb-2">🚀 Skill Berharga</h3>
            <p className="text-black">
              Tidak hanya teori, kamu akan belajar praktik Konsepetual Dengan Kode Yang Sudah Di Sediakan langsung yang bisa
              dipakai untuk membangun project Web3.
            </p>
          </div>
        </div>
      </section>

   {/* Kurikulum */}
<section className="px-6 py-16 bg-gray-100 text-center">
  <h2 className="text-3xl font-bold mb-10 text-black">Kurikulum Belajar</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {[
      {
        title: "Ide Blockchain",
        img: card1,
        desc: "Konsep dasar blockchain dan Cryptocurrency.",
      },
      {
        title: "Jaringan Blockchain, Koin Dan Token",
        img: card2,
        desc: "Kamu dapat membedakan antara Blockchain Koin dan Token.",
      },
      {
        title: "Apa Itu Jaringan Terdesentralisasi",
        img: card3,
        desc: "Mengenal Cara kerja Jaringan Terdesentralisasi.",
      },
      {
        title: "Apa Itu Hash",
        img: card4,
        desc: "Kita Akan Mengerti Apa Itu Hash Di Blockchain.",
      },
      {
        title: "Apa Itu Block",
        img: card5,
        desc: "Apa Itu Block Sebenarnya Pada Blockchain Mengetahui Strukturnya.",
      },
      {
        title: "Apa Itu Merklee Root",
        img: card6,
        desc: "Mengetahui Cara Transaksi Di Gabungkan Dengan Merklee Tree.",
      },
      {
        title: "Nonce",
        img: card7,
        desc: "Apa Itu Nonce Untuk Apa Di Dalam Blockchain.",
      },
      {
        title: "Node",
        img: card8,
        desc: "Mengetahui Perbedaan Full Node Dan Light Node.",
      },
      {
        title: "Jenis Konsensus",
        img: card9,
        desc: "Kita Dapat Mengetahui Perbedaan Konsensus.",
      },
      {
        title: "Konsesus Proof Of Work",
        img: card10,
        desc: "Mengetahui Cara Kerja POW Di Bitcoin.",
      },
      {
        title: "Konsensus Proof Of Stake",
        img: card11,
        desc: "Mengetahui Cara Kerja POS Di Ethereum.",
      },
      {
        title: "Enkripsi",
        img: card12,
        desc: "Belajar Bagaiamana Cara Kerja Enkripsi Simetris & Asimetris.",
      },
      {
        title: "Tanda Tangan Digital",
        img: card13,
        desc: "Mengatuhi Cara Kerja Tanda Tangan Digital.",
      },
      {
        title: "Apa Itu Alamat Wallet",
        img: card14,
        desc: "Cara kerja Proses Cara Kerja Pembuatan Wallet .",
      },
      {
        title: "Liquidity Pool",
        img: "https://source.unsplash.com/400x300/?pool,crypto",
        desc: "Bagaimana pool likuiditas bekerja di DeFi.",
      },
      {
        title: "Staking & Yield Farming",
        img: "https://source.unsplash.com/400x300/?staking,crypto",
        desc: "Mendapatkan reward dari staking token.",
      },
      {
        title: "DAO (Decentralized Autonomous Org)",
        img: "https://source.unsplash.com/400x300/?community,blockchain",
        desc: "Konsep organisasi terdesentralisasi di blockchain.",
      },
      {
        title: "Security Blockchain",
        img: "https://source.unsplash.com/400x300/?security,blockchain",
        desc: "Risiko dan best practice keamanan di blockchain.",
      },
      {
        title: "Scalability & Layer 2",
        img: "https://source.unsplash.com/400x300/?scalability,tech",
        desc: "Optimisasi transaksi dengan Layer 2.",
      },
      {
        title: "Bridges & Interoperability",
        img: "https://source.unsplash.com/400x300/?bridge,blockchain",
        desc: "Menghubungkan blockchain yang berbeda.",
      },
      {
        title: "NFT Marketplace",
        img: "https://source.unsplash.com/400x300/?marketplace,nft",
        desc: "Membangun marketplace NFT sederhana.",
      },
      {
        title: "Metaverse & Blockchain",
        img: "https://source.unsplash.com/400x300/?metaverse,vr",
        desc: "Hubungan metaverse dengan teknologi blockchain.",
      },
      {
        title: "GameFi",
        img: "https://source.unsplash.com/400x300/?game,crypto",
        desc: "Game berbasis blockchain dan play-to-earn.",
      },
      {
        title: "Crypto Regulations",
        img: "https://source.unsplash.com/400x300/?law,crypto",
        desc: "Regulasi cryptocurrency di berbagai negara.",
      },
      {
        title: "Stablecoin",
        img: "https://source.unsplash.com/400x300/?stablecoin,finance",
        desc: "Jenis stablecoin dan penggunaannya.",
      },
      {
        title: "CBDC (Central Bank Digital Currency)",
        img: "https://source.unsplash.com/400x300/?bank,digital",
        desc: "Konsep mata uang digital bank sentral.",
      },
      {
        title: "Blockchain Supply Chain",
        img: "https://source.unsplash.com/400x300/?supply,chain",
        desc: "Penggunaan blockchain di rantai pasokan.",
      },
      {
        title: "Healthcare & Blockchain",
        img: "https://source.unsplash.com/400x300/?health,blockchain",
        desc: "Penerapan blockchain di bidang kesehatan.",
      },
      {
        title: "Blockchain & IoT",
        img: "https://source.unsplash.com/400x300/?iot,blockchain",
        desc: "Integrasi blockchain dengan Internet of Things.",
      },
      {
        title: "Masa Depan Blockchain",
        img: "https://source.unsplash.com/400x300/?future,blockchain",
        desc: "Prediksi dan tren blockchain ke depan.",
      },
    ].map((item, i) => (
      <div
        key={i}
        className="bg-white rounded-xl shadow-lg overflow-hidden text-left transform transition duration-300 hover:scale-105 hover:shadow-2xl"
      >
        <img
          src={item.img}
          alt={item.title}
          className="w-full h-50 "
        />
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">{item.title}</h3>
          <p className="text-gray-700">{item.desc}</p>
        </div>
      </div>
    ))}
  </div>
</section>
{/* Contoh Video Tutorial */}
{/* Contoh Video Tutorial */}
<section className="px-6 py-16 bg-black text-center">
  <h2 className="text-3xl font-bold mb-8 text-white">
    Contoh Video Pembelajaran
  </h2>
  <p className="text-white max-w-2xl mx-auto mb-8">
    Tonton cuplikan singkat dari beberapa materi kami untuk merasakan
    bagaimana cara belajar di <span className="font-bold">LearnWithBims</span>.
  </p>

  <div className="flex flex-col space-y-8 max-w-3xl mx-auto">
      <p className="text-white max-w-2xl mx-auto mb-8">
    <span className="font-bold">1. Video Menjelaskan Bagaimana Tanda Tangan Digital Bekerja</span>.
  </p>
    {/* Video 1 */}
    <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg">
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/qy18rPOJleo?si=VS3AGFQKY-4ryIYb"
        title="Contoh Video Tutorial 1"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
 <span className=" text-white font-bold">2. Video Menjelaskan Mengintegrasikan Smart Contract Dengan Front End Mobilqu</span>.
    {/* Video 2 */}
    <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg">
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/APV9td0ee64?rel=0&modestbranding=1"
        title="Contoh Video Tutorial 2"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
 <span className=" text-white font-bold">3. Video Menjelaskan Mengintegrasikan Smart Contract Dengan Front End My-UangKas</span>.
    {/* Video 3 */}
    <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg">
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/mSybnXqoZaQ?si=4f54P2kalx7O7zF"
        title="Contoh Video Tutorial 3"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  </div>
</section>

{/* FAQ */}
<section className="px-6 py-16 bg-gray-100 text-black">
  <h2 className="text-3xl font-bold mb-10 text-center">FAQ DISCLAIMER</h2>
  <div className="max-w-4xl mx-auto space-y-4">
    {[
      {
        q: "Apakah kursus ini cocok untuk pemula?",
        a: "Ya, kursus ini dirancang untuk pemula yang belum memiliki pengalaman di blockchain.",
      },
      {
        q: "Apakah saya akan mendapatkan source code dalam video ini?",
        a: "Ya, setelah menyelesaikan kursus, kamu akan mendapatkan link Source Code.",
      },
      {
        q: "Bagaimana cara saya mengakses materi?",
        a: "Kamu akan mendapatkan akses ke platform belajar online setelah melakukan pembayaran.",
      },
      {
        q: "Apakah ada garansi setelah kursus mendapat pekerjaan?",
        a: "Tidak ada. Kami tidak memberikan jaminan pekerjaan setelah kursus.",
      },
      {
        q: "Apakah di kursus ini mengajarkan Front End React JS?",
        a: "Tidak. Tapi kami menyediakan kode front end seperti React yang tinggal kamu copy-paste.",
      },
      {
        q: "Apakah kursus ini menjanjikan setelah belajar fundamental blockchain menjadi pintar?",
        a: "Tidak. Kami tidak menjanjikan hal itu. Semua kembali pada konsistensi belajar kamu.",
      },
      {
        q: "Apakah bisa refund?",
        a: "Bisa, dengan syarat melakukan refund maksimal 1 x 24 jam setelah pembelian dan Melampirkan Bukti.",
      },
      {
        q: "Di mana jika saya bingung ingin bertanya tentang materi kursus ini?",
        a: "Kami menyediakan grup komunitas untuk saling sharing dan bertanya.",
      },
    ].map((item, i) => (
      <details
        key={i}
        className="bg-white rounded-lg shadow p-4 cursor-pointer border border-gray-200"
      >
        <summary className="font-semibold text-lg flex justify-between items-center">
          {item.q}
          <span className="text-gray-500">➕</span>
        </summary>
        <p className="mt-2 text-gray-700">{item.a}</p>
      </details>
    ))}
  </div>
</section>



  {/* Disclaimer */}
<section className="px-6 py-10 bg-yellow-100 border-l-4 border-r-4 border-yellow-500 text-yellow-800 rounded-md shadow-md">
  <div className="max-w-6xl mx-auto flex items-start space-x-3">
    {/* Icon Warning */}
    <div className="text-yellow-500 text-6xl">⚠️</div>

    {/* Text Disclaimer */}
    <p className="text-left text-sm leading-relaxed">
      <span className="font-bold">Disclaimer:</span> Materi yang disediakan di kursus ini 
      hanya untuk tujuan edukasi mengenai <span className="font-semibold">teknologi blockchain</span>. 
      Kami <span className="font-semibold">tidak memberikan pelatihan trading cryptocurrency</span>, 
      tidak menjamin keuntungan finansial, dan tidak memberikan saran investasi. 
      Harap gunakan pengetahuan ini secara bijak.
    </p>
  </div>
</section>



      {/* Section Harga Diskon - dipindahkan ke bawah */}
      <section className="px-6 py-16 bg-gray-900 text-center">
        <h2 className="text-3xl font-bold text-yellow-400 mb-6">
          Promo Spesial Untuk 10 Orang Saja!
        </h2>
        <p className="text-white mb-4">Dapatkan harga diskon terbatas Hanya Untuk :</p>

        <div className="flex justify-center items-center space-x-6 mb-6">
          <span className="text-3xl font-bold text-red-500 line-through">
            Rp 321.200
          </span>
          <span className="text-4xl font-extrabold text-green-400">
            Rp 89.940
          </span>
        </div>

        {/* Countdown Timer */}
        <div className="bg-yellow-400 text-black px-6 py-4 rounded-lg shadow inline-block">
          <p className="font-bold">Diskon Berakhir Dalam:</p>
          <div className="flex justify-center space-x-4 mt-2 text-lg font-mono">
            <span>{timeLeft.hours ?? "00"}h</span>:
            <span>{timeLeft.minutes ?? "00"}m</span>:
            <span>{timeLeft.seconds ?? "00"}s</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16 bg-green-600 text-center text-white">
        <h2 className="text-3xl font-bold mb-6">Siap Belajar Blockchain?</h2>
        <p className="max-w-2xl mx-auto mb-6">
          Jangan lewatkan kesempatan untuk memahami teknologi yang akan mengubah
          dunia. Daftar sekarang dan mulai perjalananmu!
        </p>
        <a
          href="https://wa.me/6281234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-yellow-400 text-black font-bold rounded-lg shadow hover:bg-yellow-500 transition"
        >
          Daftar Sekarang
        </a>
      </section>

      

      {/* Testimoni */}
{/* <section className="px-6 py-16 bg-white text-center">
  <h2 className="text-3xl font-bold mb-10 text-black">Apa Kata Mereka?</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {[
      {
        name: "Andi Pratama",
        role: "Mahasiswa ITB",
        comment:
          "Kursus ini sangat membantu saya memahami dasar blockchain dengan cara yang sederhana. Cocok banget buat pemula!",
        img: "https://randomuser.me/api/portraits/men/32.jpg",
      },
      {
        name: "Siti Aisyah",
        role: "Freelancer Web3",
        comment:
          "Materinya jelas dan langsung ke inti. Saya bisa mulai bikin project kecil-kecilan di Web3 setelah ikut kursus ini.",
        img: "https://randomuser.me/api/portraits/women/44.jpg",
      },
      {
        name: "Budi Santoso",
        role: "Software Engineer",
        comment:
          "Belajar blockchain jadi lebih gampang dengan analogi dan ilustrasi. Recommended banget!",
        img: "https://randomuser.me/api/portraits/men/12.jpg",
      },
    ].map((item, i) => (
      <div
        key={i}
        className="bg-gray-100 rounded-xl p-6 shadow-lg hover:shadow-2xl transition"
      >
        <img
          src={item.img}
          alt={item.name}
          className="w-20 h-20 rounded-full mx-auto mb-4 object-cover shadow-md"
        />
        <h3 className="font-bold text-lg">{item.name}</h3>
        <p className="text-sm text-gray-500 mb-2">{item.role}</p>
        <p className="text-gray-700 italic">“{item.comment}”</p>
      </div>
    ))}
  </div>
</section> */}

      {/* Footer */}
      <footer className="px-6 py-6 bg-black text-center text-white text-sm">
        © {new Date().getFullYear()} LearnWithBims. All rights reserved.
      </footer>

       <PembelianPopup />
    </div >
  );
}
