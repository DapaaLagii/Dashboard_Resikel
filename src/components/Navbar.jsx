import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="justify-center p-3 flex space-x-4  ">
        <Link to="/" className="hover:bg-blue-300 duration-300 ">
          Beranda
        </Link>
        <Link to="/about" className="hover:bg-blue-300 duration-300 ">
          Tentang Kami
        </Link>
        <Link to="/contact" className="hover:bg-blue-300 duration-300 ">
          Layanan
        </Link>
        <Link to="/contact" className="hover:bg-blue-300 duration-300 ">
          Program
        </Link>
      </nav>
    </>
  );
};

export default Navbar;