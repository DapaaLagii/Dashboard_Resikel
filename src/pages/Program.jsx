import React from 'react';

const IntroductionSection = () => (
  <>
    <div className="grid md:grid-cols-2 gap-8 mb-16">
      <div className="space-y-4">
        <p className="text-lg">
          Platform digital kami hadir sebagai solusi nyata untuk mengatasi permasalahan penumpukan sampah di Kota Batam. Dengan menggunakan aplikasi ini, Anda bisa berperan aktif dalam pengelolaan sampah sekaligus mendapatkan reward berdasarkan jumlah sampah yang Anda serahkan. Aplikasi kami menjadi penghubung langsung antara masyarakat dan pengepul, mempermudah proses transaksi dan pengelolaan sampah dengan cepat dan efisien.
        </p>
      </div>
      <div className="flex justify-center">
        <img src="./images/img1.png" alt="Waste Sorting" className="rounded-lg shadow-lg object-cover" />
      </div>
    </div>

    <div className="grid md:grid-cols-2 gap-8 mb-16">
      <div className="md:order-1">
        <img src="./images/img2.png" alt="Community Activity" className="rounded-lg shadow-lg object-cover" />
      </div>
      <div className="space-y-4 md:order-2">
        <p className="text-lg">
          Lebih dari sekadar solusi pengelolaan sampah, aplikasi ini juga menyediakan panduan praktis mengenai berbagai jenis sampah dan cara penanganan yang tepat. Dengan demikian, Anda tidak hanya berkontribusi dalam menjaga kebersihan lingkungan, tetapi juga mendapatkan edukasi untuk menciptakan lingkungan yang lebih bersih dan berkelanjutan.
        </p>
      </div>
    </div>
  </>
);

const EducationSection = () => (
  <div id="edukasi" className="mb-16">
  <div className="grid md:grid-cols-2 gap-8 items-center">
    <div className="space-y-4">
      <h2 className="text-3xl font-bold text-emerald-700 mb-4">Edukasi</h2>
      <p className="text-lg">
        Resikel Menghadirkan Fitur Berita & Edukasi untuk mengenalkan masyarakat umum tentang sampah yang akan mereka daur ulang, seperti jenis-jenis sampah dan cara penanganannya, serta fitur berita, yang diharapkan meningkatkan kesadaran masyarakat tentang masalah sampah yang ada di sekitar mereka.
      </p>
    </div>
    <div className="flex justify-center">
      <img src="./images/nokia5.png" alt="Education Feature" className="w-64" />
    </div>
  </div>
</div>
);

const EventSection = () => (
  <div id="event" className="mb-16">
  <div className="grid md:grid-cols-2 gap-8 items-center">
    <div className="md:order-1">
      <img src="./images/nokia6.png" alt="Event Feature" className="w-64 mx-auto md:mx-0" />
    </div>
    <div className="space-y-4 md:order-2">
      <h2 className="text-3xl font-bold text-emerald-700 mb-8">Event</h2>
      <p className="text-lg">
        Resikel menjembatani komunitas komunitas yang bergerak di bidang lingkungan untuk menjangkau lebih banyak orang untuk bergabung dalam membangun lingkungan yang lebih baik. Event komunitas dapat menjadwalkan acara acara mereka dimana mereka dibebaskan membuat acara apapun yang masih berkaitan dengan daur ulang.
      </p>
    </div>
  </div>
</div>
);

function Program  ()  {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-4">Program</h1>
        <p className="text-center text-lg mb-12">
          Mengapa <span className="text-emerald-800">Resikel</span>?
        </p>
        <IntroductionSection />
        <EducationSection />
        <EventSection />
      </main>
    </div>
  );  
};

export default Program;