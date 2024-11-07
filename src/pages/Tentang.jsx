import React from 'react';
const HeroSection = () => {
  return (
    <div className="bg-gray-50 py-0.5 ">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            #Kelola Sampah,Dapat Reward,Lebih Bersih!
          </h1>
          <p className="text-lg mb-8">
            Bergabunglah dengan kami dan jadilah bagian dari perubahan positif bersama-sama, kita wujudkan lingkungan yang lebih baik dan lebih sehat!
          </p>
        </div>
        <div className="w-full md:w-2/3 lg:w-1/2">
          <img src="./images/bottle.png" alt="Bottles" className="w-full" />
        </div>
      </div>
    </div>
  );
};
  
  const MisiSection = () => {
    return (
      <div id="resikel" className="bg-white py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/6">
            <img src="./images/logo2.png" alt="Resikel Logo" className="w-full max-w-xs mx-auto" />
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
      <div id="pejantara" className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold text-emerald-700 mb-4">Pelita Hijau Nusantara</h2>
            <p className="text-gray-600">
              Yayasan Pelita Hijau Nusantara atau yang disingkat PELITA didirikan sebagai badan hukum yang bergerak dalam bidang sosial, kemasyarakatan dan keagamaan yang berwenang dan bertanggung jawab mengelola, membina, mengembangkan dan mengkoordinasikan setiap dan seluruh pelaksanaan kegiatan lingkungan diwilayah hukum Negara Kesatuan Republik Indonesia.
            </p>
          </div>
          <div className="md:w-1/4">
            <img src="./images/pelita.png" alt="Pelita Logo" className="w-full max-w-xs mx-auto" />
          </div>
        </div>
      </div>
    );
  };
  
  const AgriMadaniSection = () => {
    return (
      <div id="agrimadani" className="bg-white py-16">
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

  function Tentang (){
    return (
      <div className="min-h-screen">
        <HeroSection />
        <MisiSection />
        <PelitaSection />
        <AgriMadaniSection />
      </div>
    );
  };
  
  export default Tentang;