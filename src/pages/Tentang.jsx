import React from 'react';

const NavBar = () => {
    return (
      <nav className=" text-white py-3">
        <div className="bg-emerald-600 container mx-auto flex justify-between items-center px-4">
          <div className="flex items-center space-x-4">
            <a href="#" className="flex items-center space-x-2">
              <i className="fab fa-instagram"></i>
              <span>@Resikel</span>
            </a>
            <a href="#" className="flex items-center space-x-2">
              <i className="far fa-envelope"></i>
              <span>resikelbussines@gmail.com</span>
            </a>
            <a href="#" className="flex items-center space-x-2">
              <i className="fas fa-phone"></i>
              <span>123456789012</span>
            </a>
          </div>    
        </div>

        <div className="bg-white text-emerald-600 py-3 px-4 items-center space-x-6">
            <a href="#" className="hover:text-emerald-200">Beranda</a>
            <a href="#" className="hover:text-emerald-200">Tentang Kami</a>
            <a href="#" className="hover:text-emerald-200">Layanan</a>
            <a href="#" className="hover:text-emerald-200">Program</a>
          </div>
      </nav>
    );
  };
  
  const HeroSection = () => {
    return (
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">#Kelola Sampah,Dapat Reward,Lebih Bersih!</h1>
            <p className="text-lg mb-8">Bergabunglah dengan kami dan jadilah bagian dari perubahan positif bersama-sama, kita wujudkan lingkungan yang lebih baik dan lebih sehat!</p>
            <div className="space-x-4">
              <button className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700">Unduh Aplikasi</button>
              <button className="border-2 border-emerald-600 text-emerald-600 px-6 py-2 rounded-lg hover:bg-emerald-50">Lihat Selengkapnya</button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img src="/images/bottles.png" alt="Bottles" className="w-full" />
          </div>
        </div>
      </div>
    );
  };
  
  const MisiSection = () => {
    return (
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/3">
            <img src="/images/logo-resikel.png" alt="Resikel Logo" className="w-full max-w-xs mx-auto" />
          </div>
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold text-emerald-700 mb-4">Misi Kami Adalah Menjembatani Masyarakat</h2>
            <p className="text-gray-600 mb-4">
              Dengan populasi <span className="text-emerald-600">1.196.396</span> jiwa, Kota Batam menghasilkan <span className="text-emerald-600">1.144</span> ton sampah per hari (<span className="text-emerald-600">0.7</span> kg per orang).
            </p>
            <p className="text-gray-600">
              Aplikasi <span className="font-bold">Resikel</span> hadir untuk menawarkan solusi pengelolaan sampah di Kota Batam dengan melibatkan masyarakat secara aktif dan memberi reward berdasarkan sampah yang diserahkan.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  const PelitaSection = () => {
    return (
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold text-emerald-700 mb-4">Pelita Hijau Nusantara</h2>
            <p className="text-gray-600">
              Yayasan Pelita Hijau Nusantara atau yang disingkat PELITA didirikan sebagai badan hukum yang bergerak dalam bidang sosial, kemasyarakatan dan keagamaan yang berwenang dan bertanggung jawab mengelola, membina, mengembangkan dan mengkoordinasikan setiap dan seluruh pelaksanaan kegiatan lingkungan diwilayah hukum Negara Kesatuan Republik Indonesia.
            </p>
          </div>
          <div className="md:w-1/3">
            <img src="/images/pelita-logo.png" alt="Pelita Logo" className="w-full max-w-xs mx-auto" />
          </div>
        </div>
      </div>
    );
  };
  
  const AgriMadaniSection = () => {
    return (
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/3">
            <div className="text-emerald-700 text-4xl font-bold">AGRI MADANI</div>
          </div>
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold text-emerald-700 mb-4">Apa Itu AgriMadani?</h2>
            <p className="text-gray-600">
              AgriMadan Adalah sebuah Grup yang terbentuk dengan sebuah ketulusan dan kesadaran di masyarakat kian aktif, memanfaatkan forum me pra renewable lingkungan yang nyaman di lingkungan ini juga membantu konsentrasi yang solid sehingga bersama-sama mewujudkan dalam mewujudkan lingkungan yang lebih baik
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  const Footer = () => {
    return (
      <footer className="bg-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">Tentang Kami</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-emerald-600">Resikel</a></li>
                <li><a href="#" className="text-gray-600 hover:text-emerald-600">Proposal</a></li>
                <li><a href="#" className="text-gray-600 hover:text-emerald-600">AgriMadani</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Layanan</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-emerald-600">Rewarding</a></li>
                <li><a href="#" className="text-gray-600 hover:text-emerald-600">Komunitas</a></li>
                <li><a href="#" className="text-gray-600 hover:text-emerald-600">Jemput Sampah</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Program</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-emerald-600">Edukasi</a></li>
                <li><a href="#" className="text-gray-600 hover:text-emerald-600">Event</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-8">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <img src="/images/logo-small.png" alt="Resikel" className="h-8 mr-2" />
                <span className="text-gray-600">© 2024 AgriMadani. All Right reserved.</span>
              </div>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-emerald-600">
                  <i className="fas fa-phone"></i>
                </a>
                <a href="#" className="text-gray-600 hover:text-emerald-600">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-gray-600 hover:text-emerald-600">
                  <i className="far fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  };


  const Tentang = () => {
    return (
      <div className="min-h-screen">
        <NavBar />
        <HeroSection />
        <MisiSection />
        <PelitaSection />
        <AgriMadaniSection />
        <Footer />
      </div>
    );
  };
  
  export default Tentang;