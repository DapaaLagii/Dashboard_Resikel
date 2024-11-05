import React from 'react';

const Layanan = () => {
    return (
        <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-emerald-700 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🗑️</span>
            <span className="text-xl font-semibold">RESIKEL</span>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-emerald-200">Beranda</a>
            <a href="#" className="hover:text-emerald-200">Tentang Kami</a>
            <a href="#" className="hover:text-emerald-200">Layanan</a>
            <a href="#" className="hover:text-emerald-200">Program</a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Layanan</h1>
        <p className="text-center text-lg mb-12">Manajemen Limbah Sampah di Kota Batam</p>

        {/* Reward Section */}
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

        {/* Komunitas Section */}
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

        {/* Jemput Sampah Section */}
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
      </main>

      {/* Footer */}
      <footer className="bg-white border-t py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Tentang Kami</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-emerald-700">Resikel</a></li>
                <li><a href="#" className="text-gray-600 hover:text-emerald-700">Pekerjaan</a></li>
                <li><a href="#" className="text-gray-600 hover:text-emerald-700">AgriMadani</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Layanan</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-emerald-700">Rewarding</a></li>
                <li><a href="#" className="text-gray-600 hover:text-emerald-700">Komunitas</a></li>
                <li><a href="#" className="text-gray-600 hover:text-emerald-700">Jemput Sampah</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Program</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-emerald-700">Edukasi</a></li>
                <li><a href="#" className="text-gray-600 hover:text-emerald-700">Event</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-gray-600">
            <p>© 2024 AgriMadani. All Right reserved</p>
          </div>
        </div>
      </footer>
    </div>
    );
};

export default Layanan;