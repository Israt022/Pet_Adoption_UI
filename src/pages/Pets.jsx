import { useEffect, useState } from "react";
import { PawPrint } from "lucide-react";
import ErrorAlert from "../components/ErrorAlert.jsx";
import apiClient from "../../src/services/api-client.js";
import defaultImage from "../../src/assets/defaul_pet_img.jpeg";
import { Link } from "react-router";

const Pets = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    apiClient
      .get("/pets/")
      .then((res) => setPets(res.data.results))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="py-16 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <PawPrint size={48} className="mx-auto mb-4 text-yellow-500" />
        
        {/* Spinner */}
        {loading ? (
          <div className="flex justify-center mt-16">
            <span className="loading loading-spinner text-yellow-500"></span>
          </div>
        ) : (
          <>
            {error && <ErrorAlert error={error} />}

            {/* Pet Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pets.map((pet) => (
                <Link key={pet.id} to={`/shop/${pet.id}`}>
                  <div className="border border-base-200 bg-gray-950 rounded-lg p-8 text-center shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group hover:-translate-y-2">
                    {/* Pet Image */}
                    <div className="mb-4">
                      <img
                        src={pet.images.length > 0 ? pet.images[0].image : defaultImage}
                        alt={pet.name}
                        className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-white shadow-md"
                      />
                    </div>

                    {/* Pet Name */}
                    <h4 className="text-xl font-semibold text-white mb-4">{pet.name}</h4>

                    {/* Pet Details */}
                    <div className="space-y-1 mb-6 text-sm text-gray-300">
                      <span className="font-bold text-xl">Description</span>
                      <p>{pet.description}</p>
                      <p>
                        <span className="font-medium">Age:</span> {pet.age}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}

        {!loading && !error && pets.length === 0 && (
          <p className="text-center text-gray-500 mt-6">
            No Pets Available
          </p>
        )}
      </div>
    </div>
  );
};

export default Pets;
