import {
  Users,
  ShoppingBag,
  PawPrint,
  
} from "lucide-react";

import StartCard from "../components/Dashboard/StartCard";
import { useState } from "react";
import StartbarItems from "../components/Dashboard/StartbarItems";


import { useEffect } from "react";
import authApiClient from "../services/auth-api-client";

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalPets: 0,
    totalOrders: 0,
    totalUsers: 0,
    totalBalance: 0,
  });

  const [selectedCard, setSelectedCard] = useState("Total Pets");

  useEffect(() => {

    authApiClient.get("/pets/")
      .then(res => {
        console.log("Pets API response:", res.data);
        setStats(prev => ({
          ...prev,
          totalPets: res.data.count || 0,
        }));
      });

    authApiClient.get("/orders/")
      .then(res => {
        setStats(prev => ({
          ...prev,
          totalOrders: res.data.length || 0,
        }));
      });

    authApiClient.get("/auth/users/")
      .then(res => {
        setStats(prev => ({
          ...prev,
          totalUsers: res.data.length || 0,
        }));
      });

    authApiClient.get("/auth/users/")
      .then(res => {
        const totalBalance = res.data.reduce((acc, user) => acc + (user.balance || 0), 0);
        setStats(prev => ({
          ...prev,
          totalBalance: totalBalance,
        }));
      });

  }, []);

  const handleCardClick = (title) => {
    setSelectedCard(title);
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white relative">
      <div className="flex-1 flex flex-col">
        <main className="flex-1 p-6 bg-gray-900 overflow-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StartCard
              title="Total Pets"
              value={stats.totalPets.toLocaleString()}
              icon={<PawPrint size={24} />}
              bgColor="bg-blue-500"
              onClick={() => handleCardClick("Total Pets")}
              isSelected={selectedCard === "Total Pets"}
            />
            <StartCard
              title="Total Orders"
              value={stats.totalOrders.toLocaleString()}
              icon={<ShoppingBag size={24} />}
              bgColor="bg-purple-500"
              onClick={() => handleCardClick("Total Orders")}
              isSelected={selectedCard === "Total Orders"}
            />
            <StartCard
              title="Users"
              value={stats.totalUsers.toLocaleString()}
              icon={<Users size={24} />}
              bgColor="bg-blue-500"
              onClick={() => handleCardClick("Users")}
              isSelected={selectedCard === "Users"}
            />
            <StartCard
              title="Balances"
              value={`$${stats.totalBalance.toLocaleString()}`}
              icon={<Users size={24} />}
              bgColor="bg-orange-500"
              onClick={() => handleCardClick("Balances")}
              isSelected={selectedCard === "Balances"}
            />
          </div>

          <StartbarItems selectedCard={selectedCard} />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
