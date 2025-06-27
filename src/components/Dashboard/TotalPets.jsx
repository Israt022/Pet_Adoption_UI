import { useEffect, useState } from "react";
import authApiClient from "../../services/auth-api-client";

const TotalPets = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    authApiClient.get("/pets/")
      .then((res) => {
        console.log("Pets API response:", res.data); // For debugging
        setPets((res.data.results || []).slice(0, 10));  // Only first 10 pets
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching pets:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-white">Loading pets...</p>;
  }

  return (
    <div className="bg-gray-800 rounded-lg p-6 mt-6">
      <h3 className="text-lg font-semibold mb-4 text-white">Pets List</h3>
      <div className="overflow-x-auto">
        <table className="table w-full text-gray-200">
          <thead>
            <tr className="bg-gray-900 text-gray-100">
              <th>ID</th>
              <th>Name</th>
              <th>Category</th>
              <th>Age (years)</th>
            </tr>
          </thead>
          <tbody>
            {pets.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center py-4 text-gray-400">
                  No pets found.
                </td>
              </tr>
            ) : (
              pets.map((pet) => (
                <tr key={pet.id} className="bg-gray-800 hover:bg-gray-700">
                  <td>{pet.id}</td>
                  <td>{pet.name}</td>
                  <td>{pet.category || "N/A"}</td>
                  <td>{pet.age || "N/A"}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TotalPets;
