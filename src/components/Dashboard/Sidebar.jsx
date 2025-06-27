import { useState } from "react";
import {
  Settings,
  User,
  LayoutDashboard,
  PawPrint,
  CirclePlus,
  ShoppingCart,
  Star,
  ShoppingBag,
} from "lucide-react";
import { Link } from "react-router";
import useAuthContext from "../../hooks/useAuthContext";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {

    const [activeTab, setActiveTab] = useState("dashboard");
    // const [sidebarOpen, setSidebarOpen] = useState(false);
    const {user} = useAuthContext();

    const customerMenues = [
        { id: "dashboard", to: "/dashboard", label: "Dashboard", icon: <LayoutDashboard size={18} /> },
        { id: "shop", to: "/dashboard/pets", label: "Pet", icon: <PawPrint size={18} />, badge: "New" },
        { id: "carts", to: "/dashboard/cart", label: "Carts", icon: <ShoppingCart size={18} />},
        { id: "orders", to: "/dashboard/orders", label: "Orders", icon: <ShoppingBag size={18} />, badge: "1.2k" },
    ];
    const adminMenues = [
        { id: "dashboard", to: "/dashboard", label: "Dashboard", icon: <LayoutDashboard size={18} /> },
        { id: "shop", to: "/dashboard/pets", label: "Pet", icon: <PawPrint size={18} />, badge: "New" },
        { id: "addpets", to: "/dashboard/pets/add", label: "Add Pets", icon: <CirclePlus size={18} /> },
        { id: "carts", to: "/dashboard/cart", label: "Carts", icon: <ShoppingCart size={18} />},
        { id: "orders", to: "/dashboard/orders", label: "Orders", icon: <ShoppingBag size={18} />, badge: "1.2k" },
        { id: "reviews", to: "/dashboard/review", label: "Reviews", icon: <Star size={18} /> }
    ];

    const settingsItems = [
        { id: "profile", to: "/dashboard/profile", label: "Profile", icon: <User size={18} /> },
        { id: "settings", to: "settings", label: "Settings", icon: <Settings size={18} /> },
    ];

    const menuItems = user.is_staff ? adminMenues : customerMenues;
    return (
        <div
            className="flex h-screen bg-gray-900 text-white relative z-10"
        >
            {/* Overlay for mobile */}
            {sidebarOpen && (
                <div
                onClick={() => setSidebarOpen(false)}
                className="fixed inset-0 bg-black opacity-50 z-20 md:hidden"
                />
            )}
            <div
                className={`fixed inset-y-0 left-0 z-30 w-64 bg-gray-800 p-4 transform transition-transform duration-200 ease-in-out
                ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:static md:inset-auto md:z-auto`}
            >
                {/* SIDE PET BOND  */}
                {/* <div className="flex items-center mb-8">
                <div className="w-10 h-10 bg-gray-600 rounded mr-3 flex items-center justify-center">
                    <User size={20} />
                </div>
                <span className="font-semibold">ADMIN</span>
                </div> */}
                <a
                href="/"
                className="flex items-center mb-8 hover:opacity-80 transition-opacity"
                >
                {/* <div className="w-10 h-10 bg-gray-600 rounded mr-3 flex items-center justify-center">
                    <User size={20} />
                </div> */}
                <span className="text-yellow-500 text-3xl">🐾</span>
                <span className="font-bold text-lg">PetBond BD</span>
                </a>
                <div className="mb-8">
                <h3 className="text-xs font-semibold text-gray-400 mb-4 uppercase tracking-wider">Main</h3>
                <nav className="space-y-2">
                    {menuItems.map((item) => (
                    <Link
                        key={item.id}
                        to={item.to}
                        onClick={() => setActiveTab(item.id)}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors ${
                            activeTab === item.id ? "bg-gray-700 text-white" : "text-gray-300 hover:bg-gray-700"
                        }`}
                        >
                        <div className="flex items-center">
                            {item.icon}
                            <span className="ml-3">{item.label}</span>
                        </div>
                        {item.badge && (
                            <span
                            className={`px-2 py-1 text-xs rounded-full ${
                                item.badge === "New" ? "bg-blue-500" : "bg-red-500"
                            }`}
                            >
                            {item.badge}
                            </span>
                        )}
                    </Link>
                    ))}
                </nav>
                </div>

                <div>
                <h3 className="text-xs font-semibold text-gray-400 mb-4 uppercase tracking-wider">Settings</h3>
                <nav className="space-y-2">
                    {settingsItems.map((item) => (
                    <Link
                        key={item.id}
                        to={item.to}
                        onClick={() => setActiveTab(item.id)}
                        className={`w-full flex items-center px-3 py-2 rounded-lg transition-colors ${
                        activeTab === item.id ? "bg-gray-700 text-white" : "text-gray-300 hover:bg-gray-700"
                        }`}
                    >
                        {item.icon}
                        <span className="ml-3">{item.label}</span>
                    </Link>
                    ))}
                </nav>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;