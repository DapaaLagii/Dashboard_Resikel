import React from "react";

const RewardSection = () => (
  <div id="rewarding" className="mb-16">
    <div className="hidden md:grid md:grid-cols-2 gap-8 items-center">
      <div className="space-y-4">
        <div className="inline-block bg-emerald-100 rounded-full px-6 py-2 text-emerald-800 font-medium mb-4">
          Reward
        </div>
        <p className="text-lg text-justify">
          Menaikan minat masyarakat dalam mendaur ulang sampah dengan memberikan 
          <span className="text-emerald-700 font-medium"> Reward </span> 
          di setiap sampah yang di kumpulkan
        </p>
      </div>
      <div className="flex justify-center">
        <img src="./images/nokia2.png" alt="Reward App Screenshot" className="w-48" />
      </div>
    </div>

    <div className="md:hidden flex flex-col items-center">
      <div className="inline-block bg-emerald-100 rounded-full px-6 py-2 text-emerald-800 font-medium mb-4 text-center">
        Reward
      </div>
      <p className="text-lg text-justify mb-4 px-4">
        Menaikan minat masyarakat dalam mendaur ulang sampah dengan memberikan 
        <span className="text-emerald-700 font-medium"> Reward </span> 
        di setiap sampah yang di kumpulkan
      </p>
      <img src="./images/nokia2.png" alt="Reward App Screenshot" className="w-48" />
    </div>
  </div>
);

const KomunitasSection = () => (
  <div id="komunitas" className="mb-16">
    <div className="hidden md:grid md:grid-cols-2 gap-8 items-center">
      <div className="flex justify-center md:order-1">
        <div className="flex space-x-4">
          <img src="./images/nokia3.png" alt="Community App Screenshot 1" className="w-64" />
        </div>
      </div>
      <div className="space-y-4 md:order-2">
        <div className="inline-block bg-emerald-100 rounded-full px-6 py-2 text-emerald-800 font-medium mb-4">
          Komunitas
        </div>
        <p className="text-lg text-justify">
          Bahkan hal yang membosankan jika di kerjakan beramai-ramai akan menjadi menyenangkan.
          Karenanya komunitas hadir untuk menambah keseruan dalam menjaga keberlanjutan lingkungan.
        </p>
      </div>
    </div>

    <div className="md:hidden flex flex-col items-center">
      <div className="inline-block bg-emerald-100 rounded-full px-6 py-2 text-emerald-800 font-medium mb-4 text-center">
        Komunitas
      </div>
      <p className="text-lg text-justify mb-4 px-4">
        Bahkan hal yang membosankan jika di kerjakan beramai-ramai akan menjadi menyenangkan.
        Karenanya komunitas hadir untuk menambah keseruan dalam menjaga keberlanjutan lingkungan.
      </p>
      <img src="./images/nokia3.png" alt="Community App Screenshot 1" className="w-64" />
    </div>
  </div>
);

const JemputSampahSection = () => (
  <div id="jemput" className="mb-16">
    <div className="hidden md:grid md:grid-cols-2 gap-8 items-center">
      <div className="space-y-4 md:order-1">
        <div className="inline-block bg-emerald-100 rounded-full px-6 py-2 text-emerald-800 font-medium mb-4">
          Jemput Sampah
        </div>
        <p className="text-lg text-justify">
          Kami tahu jika tidak semua orang punya waktu, oleh sebab itu kami memfasilitasi pengguna agar tetap
          nyaman dalam mendaur ulang sampah.
        </p>
      </div>
      <div className="flex justify-center md:order-2">
        <div className="flex space-x-4">
          <img src="./images/nokia4.png" alt="Pickup App Screenshot 1" className="w-64" />
        </div>
      </div>
    </div>

    <div className="md:hidden flex flex-col items-center">
      <div className="inline-block bg-emerald-100 rounded-full px-6 py-2 text-emerald-800 font-medium mb-4 text-center">
        Jemput Sampah
      </div>
      <p className="text-lg text-justify mb-4 px-4">
        Kami tahu jika tidak semua orang punya waktu, oleh sebab itu kami memfasilitasi pengguna agar tetap
        nyaman dalam mendaur ulang sampah.
      </p>
      <img src="./images/nokia4.png" alt="Pickup App Screenshot 1" className="w-64" />
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
        <hr className="border-t-2 border-gray-200 my-8" />
        <KomunitasSection />
        <hr className="border-t-2 border-gray-200 my-8" />
        <JemputSampahSection />
      </main>
    </div>
  );
};

export default Layanan;