import { LayoutDashboard, LogOut, Search, Star, User } from "lucide-react";
import useAuthContext from "../../hooks/useAuthContext";

const Navbar = ({ sidebarOpen, setSidebarOpen }) => {
  const { logoutUser , user } = useAuthContext();
    return (
        <header className="bg-gray-800 p-4 flex items-center justify-between">
          {/* Toggle Button for Sidebar */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="md:hidden p-2 rounded-lg text-gray-300 hover:bg-gray-700"
          >
            <LayoutDashboard size={20} />
          </button>

          <div className="flex-1 max-w-md mx-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-10 pr-4 py-2 bg-white text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
            {/* Nav  */}
          {/* <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-700 rounded-lg transition-colors">
              <Star size={20} />
            </button>
            <button className="flex items-center space-x-2 px-3 py-2 hover:bg-gray-700 rounded-lg transition-colors">
              <LogOut size={18} />
              <span>Logout</span>
            </button>
          </div> */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2 bg-gray-700 px-3 py-1 rounded-lg">
              <User size={16} />
              <span className="text-sm">{user?.is_staff ? "Admin" : "User"}</span>
            </div>
            <button className="p-2 hover:bg-gray-700 rounded-lg transition-colors">
              <Star size={20} />
            </button>
            <button className="flex items-center space-x-2 px-3 py-2 hover:bg-gray-700 rounded-lg transition-colors">
              <LogOut size={18} />
                <a onClick={logoutUser}><span>Logout</span></a>
            </button>
          </div>
        </header>
    );
};

export default Navbar;