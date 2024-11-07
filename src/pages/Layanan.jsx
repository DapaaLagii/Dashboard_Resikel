import React from "react";

const RewardSection = () => (
  <div className="grid md:grid-cols-2 gap-8 mb-16 items-center">
    <div className="space-y-4">
      <div className="inline-block bg-emerald-100 rounded-full px-6 py-2 text-emerald-800 font-medium mb-4">
        Reward
      </div>
      <p className="text-lg">
        Menaikan minat masyarakat dalam mendaur ulang sampah dengan memberikan 
        <span className="text-emerald-700 font-medium"> Reward </span> 
        di setiap sampah yang di kumpulkan
      </p>
    </div>
    <div className="flex justify-center">
      <img src="/api/placeholder/300/600" alt="Reward App Screenshot" className="w-64 rounded-3xl shadow-lg" />
    </div>
  </div>
);

const KomunitasSection = () => (
  <div className="grid md:grid-cols-2 gap-8 mb-16 items-center">
    <div className="flex justify-center md:order-2">
      <div className="flex space-x-4">
        <img src="/api/placeholder/300/600" alt="Community App Screenshot 1" className="w-64 rounded-3xl shadow-lg" />
        <img src="/api/placeholder/300/600" alt="Community App Screenshot 2" className="w-64 rounded-3xl shadow-lg" />
      </div>
    </div>
    <div className="space-y-4 md:order-1">
      <div className="inline-block bg-emerald-100 rounded-full px-6 py-2 text-emerald-800 font-medium mb-4">
        Komunitas
      </div>
      <p className="text-lg">
        Bahkan hal yang membosankan jika di kerjakan beramai ramai akan menjadi menyenangkan.
        Karenanya komunitas hadir untuk menambah keseruan dalam menjaga keberlanjutan lingkungan
      </p>
    </div>
  </div>
);

const JemputSampahSection = () => (
  <div className="grid md:grid-cols-2 gap-8 mb-16 items-center">
    <div className="space-y-4">
      <div className="inline-block bg-emerald-100 rounded-full px-6 py-2 text-emerald-800 font-medium mb-4">
        Jemput Sampah
      </div>
      <p className="text-lg">
        Kami tahu jika tidak semua orang punya waktu, oleh sebab itu kami memfasilitasi pengguna agar tetap
        nyaman dalam mendaur ulang sampah
      </p>
    </div>
    <div className="flex justify-center">
      <div className="flex space-x-4">
        <img src="/api/placeholder/300/600" alt="Pickup App Screenshot 1" className="w-64 rounded-3xl shadow-lg" />
        <img src="/api/placeholder/300/600" alt="Pickup App Screenshot 2" className="w-64 rounded-3xl shadow-lg" />
      </div>
    </div>
  </div>
);

function Layanan () {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Layanan</h1>
        <p className="text-center text-lg mb-12">Manajemen Limbah Sampah di Kota Batam</p>
        <RewardSection />
        <KomunitasSection />
        <JemputSampahSection />
      </main>
    </div>
  );
};

export default Layanan;