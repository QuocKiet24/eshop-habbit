import { Link } from "react-router-dom";
import {
  HiOutlineUser,
  HiOutlineShoppingBag,
  HiBars3BottomRight,
} from "react-icons/hi2";
import SearchBar from "./SearchBar";
import CartDrawer from "../Layout/CartDrawer";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const toggleCartDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <>
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* left - logo */}
        <div className="">
          <Link to="/" className="text-3xl font-bold">
            E-Shop
          </Link>
        </div>
        {/* center - navigation link */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/collections/all"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Nam
          </Link>
          <Link
            to="#"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Nữ
          </Link>
          <Link
            to="#"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Quần áo
          </Link>
          <Link
            to="#"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Phụ kiện
          </Link>
        </div>
        {/* right section */}
        <div className="flex items-center space-x-4">
          <Link to="/profile" className=" hover:text-black">
            <HiOutlineUser className="size-6 text-gray-700" />
          </Link>
          <button
            onClick={toggleCartDrawer}
            className="relative hover:text-black"
          >
            <HiOutlineShoppingBag className="size-6 text-gray-700" />
            <span className="absolute -top-1 bg-primary text-white text-xs rounded-full px-2 py-0.5">
              0
            </span>
          </button>
          {/* search */}
          <div className="overflow-hidden">
            <SearchBar />
          </div>

          <button onClick={toggleNavbar} className=" md:hidden">
            <HiBars3BottomRight className="size-6 text-gray-700" />
          </button>
        </div>
      </nav>
      <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />

      {/* mobile navigation */}
      <div
        className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          navbarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button>
            <IoMdClose
              onClick={toggleNavbar}
              className="size-6 text-gray-700"
            />
          </button>
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4">Menu</h2>
          <nav className="space-y-4">
            <Link
              to="#"
              onClick={toggleNavbar}
              className="block text-gray-600 hover:text-black"
            >
              Nam
            </Link>
            <Link
              to="#"
              onClick={toggleNavbar}
              className="block text-gray-600 hover:text-black"
            >
              Nữ
            </Link>
            <Link
              to="#"
              onClick={toggleNavbar}
              className="block text-gray-600 hover:text-black"
            >
              Quần áo
            </Link>
            <Link
              to="#"
              onClick={toggleNavbar}
              className="block text-gray-600 hover:text-black"
            >
              Phụ kiện
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
