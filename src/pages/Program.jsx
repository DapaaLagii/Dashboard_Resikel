import React from 'react';

const Program = () => {
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
            <a href="#" className="font-medium">Program</a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-4">Program</h1>
        <p className="text-center text-lg mb-12">
          Mengapa <span className="text-emerald-700">Resikel</span>?
        </p>

        {/* Introduction Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="space-y-4">
            <p className="text-lg">
              Platform digital kami hadir sebagai solusi nyata untuk mengatasi permasalahan penumpukan sampah di Kota Batam. Dengan menggunakan aplikasi ini, Anda bisa berperan aktif dalam pengelolaan sampah sekaligus mendapatkan reward berdasarkan jumlah sampah yang Anda serahkan. Aplikasi kami menjadi penghubung langsung antara masyarakat dan pengepul, mempermudah proses transaksi dan pengelolaan sampah dengan cepat dan efisien.
            </p>
          </div>
          <div className="flex justify-center">
            <img src="/api/placeholder/500/300" alt="Waste Sorting" className="rounded-lg shadow-lg object-cover" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="md:order-1">
            <img src="/api/placeholder/500/300" alt="Community Activity" className="rounded-lg shadow-lg object-cover" />
          </div>
          <div className="space-y-4 md:order-2">
            <p className="text-lg">
              Lebih dari sekadar solusi pengelolaan sampah, aplikasi ini juga menyediakan panduan praktis mengenai berbagai jenis sampah dan cara penanganan yang tepat. Dengan demikian, Anda tidak hanya berkontribusi dalam menjaga kebersihan lingkungan, tetapi juga mendapatkan edukasi untuk menciptakan lingkungan yang lebih bersih dan berkelanjutan.
            </p>
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-emerald-700 mb-8">Edukasi</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-lg">
                Resikel Menghadirkan Fitur Berita & Edukasi untuk mengenalkan masyarakat umum Tentang sampah yang akan mereka daur ulang,seperti jenis jenis sampah dan cara penanganan nya,serta fitur berita,yang Di harapkan meningkatkan kesadaran masyarakat tentang masalah sampah yang ada di sekitar mereka
              </p>
            </div>
            <div className="flex justify-center">
              <img src="/api/placeholder/300/600" alt="Education Feature" className="w-64 rounded-3xl shadow-lg" />
            </div>
          </div>
        </div>

        {/* Event Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-emerald-700 mb-8">Event</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="md:order-2">
              <img src="/api/placeholder/300/600" alt="Event Feature" className="w-64 rounded-3xl shadow-lg mx-auto" />
            </div>
            <div className="space-y-4 md:order-1">
              <p className="text-lg">
                Resikel menjembatani komunitas komunitas yang bergerak di bidang lingkungan untuk menjangkau lebih banyak orang untuk bergabung dalam membangun lingkungan yang lebih baik.Event komunitas dapat menjadwalkan acara acara mereka dimna mereka di bebaskan membuat acara apapun yang masih berkaitan denga daur ulang
              </p>
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
            <div className="flex justify-center items-center">
              <span className="text-2xl mr-2">🗑️</span>
              <span className="font-semibold">RESIKEL</span>
            </div>
            <p className="mt-2">© 2024 AgriMadani. All Right reserved</p>
          </div>
        </div>
      </footer>
    </div>
    )
}

export default Program;