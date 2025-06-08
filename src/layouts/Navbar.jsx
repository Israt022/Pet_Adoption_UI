import { useState } from "react";
import { Menu, X } from "lucide-react";

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
          <a href="#" className="text-yellow-500 flex items-center gap-1">🐾 Home</a>
          <a href="#">About</a>
          <a href="#">Pets</a>
          <a href="#">Services</a>
          <a href="#">Pages</a>
        </div>

        {/* Profile dropdown */}
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
