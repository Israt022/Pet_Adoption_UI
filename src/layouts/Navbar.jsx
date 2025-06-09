import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setShowDropdown(!showDropdown);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 text-2xl font-bold text-gray-800">
          <span className="text-yellow-500 text-3xl">🐾</span> PetBond BD
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6 font-medium text-gray-700">
          <Link to="/#" className="text-yellow-500 flex items-center gap-1">🐾 Home</Link>
          <Link to="about">About</Link>
          <Link to="shop">Pets</Link>
          <a href="#">Services</a>
          <a href="#">Pages</a>
        </div>

        {/* Profile dropdown */}
        <div className="flex items-center gap-4">
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                    <div className="indicator">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
                    <span className="text-yellow-700 indicator-item">8</span>
                    </div>
                </div>
                <div
                    tabIndex={0}
                    className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
                    <div className="card-body">
                    <span className="text-lg font-bold">8 Items</span>
                    <span className="text-info">Subtotal: $999</span>
                    <div className="card-actions">
                        <button className="btn btn-dash btn-warning">View cart</button>
                    </div>
                    </div>
                </div>
            </div>
            <div className="relative hidden md:block">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrkxuyWfQoPkIlAvvRRowppxPnmla0usying&s" // You can use your own profile image here
                    alt="Profile"
                    className="w-10 h-10 rounded-full cursor-pointer border border-gray-300"
                    onClick={toggleDropdown}
                />
                {showDropdown && (
                    <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg z-50">
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 text-black">Dashboard</a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 text-black">Profile</a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 text-red-600">Logout</a>
                    </div>
                )}
            </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-3 text-gray-700 font-medium">
          <a href="#" className="block text-yellow-500">🐾 Home</a>
          <a href="#" className="block">About</a>
          <a href="#" className="block">Pets</a>
          <a href="#" className="block">Services</a>
          <a href="#" className="block">Pages</a>
          <hr />
          {/* Mobile Profile dropdown (can be separated if needed) */}
          <div>
            <a href="#" className="block px-2 py-1 rounded hover:bg-gray-100 text-black">Dashboard</a>
            <a href="#" className="block px-2 py-1 rounded hover:bg-gray-100 text-black">Profile</a>
            <a href="#" className="block px-2 py-1 rounded hover:bg-gray-100 text-red-600">Logout</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
