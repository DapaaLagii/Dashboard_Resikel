import React from "react";

function Footer(){
    return(
            <footer className="w-full bg-white text-green-800 mt-auto py-8">
              <div className="max-w-4xl mx-auto grid grid-cols-3 gap-8 text-center">
                <div>
                  <h2 className="font-semibold">Tentang Kami</h2>
                  <ul className="mt-2 space-y-1">
                    <li><a href="#" className="hover:underline">Resikel</a></li>
                    <li><a href="#" className="hover:underline">Pejantara</a></li>
                    <li><a href="#" className="hover:underline">AgriMadani</a></li>
                  </ul>
                </div>
                <div>
                  <h2 className="font-semibold">Layanan</h2>
                  <ul className="mt-2 space-y-1">
                    <li><a href="#" className="hover:underline">Rewarding</a></li>
                    <li><a href="#" className="hover:underline">Komunitas</a></li>
                    <li><a href="#" className="hover:underline">Jemput Sampah</a></li>
                  </ul>
                </div>
                <div>
                  <h2 className="font-semibold">Program</h2>
                  <ul className="mt-2 space-y-1">
                    <li><a href="#" className="hover:underline">Edukasi</a></li>
                    <li><a href="#" className="hover:underline">Event</a></li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 text-center text-sm">
                RESIKEL © 2024 AgriMadani. All Rights Reserved.
              </div>
            </footer>
    )
}

export default Footer;