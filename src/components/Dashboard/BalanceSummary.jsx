import { useEffect, useState } from "react";
import authApiClient from "../../services/auth-api-client";

const BalanceSummary = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    authApiClient.get("/auth/users/")
      .then(res => {
        setUsers(res.data);  // যদি API তে results থাকে তাহলে res.data.results দিতে হবে
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching users:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-white">Loading balance summary...</p>;
  }

  return (
    <div className="bg-gray-800 rounded-lg p-6 mt-6">
      <h3 className="text-lg font-semibold mb-4 text-white">User Balance Summary</h3>
      <div className="overflow-x-auto">
        <table className="table w-full text-gray-200">
          <thead>
            <tr className="bg-gray-900 text-gray-100">
              <th>ID</th>
              <th>Email</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 ? (
              <tr>
                <td colSpan="3" className="text-center py-4 text-gray-400">
                  No users found.
                </td>
              </tr>
            ) : (
              users.map(user => (
                <tr key={user.id} className="bg-gray-800 hover:bg-gray-700">
                  <td>{user.id}</td>
                  <td>{user.email || "N/A"}</td>
                  <td>${user.balance ? user.balance.toFixed(2) : "0.00"}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BalanceSummary;
