import {
  Users,
  ShoppingBag,
  TrendingUp,
  DollarSign,
  PawPrint,
  
} from "lucide-react";

const StartCard = ({ title, value, icon, bgColor,  onClick, isSelected }) => {
    return (
        <div 
            // className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
            {/* {stats.map((stat, index) => ( */}
              <div onClick={onClick} 
              className={`cursor-pointer  items-center gap-4 shadow-md bg-gray-800 rounded-lg p-6  ${isSelected ? "ring-4 ring-gray-900" : ""}
                    hover:brightness-110 transition  `}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold">{value}</p>
                    <p className="text-gray-400 text-sm">{title}</p>
                  </div>
                  <div className={`p-3 rounded-full ${bgColor} text-white`}>{icon}</div>
                </div>
              </div>
            {/* ))} */}
          </div>
    );
};

export default StartCard;