import { useEffect, useState } from "react";
import PetItems from "./PetItems";
import { PawPrint } from "lucide-react";
import ErrorAlert from "../../ErrorAlert";
import apiClient from "../../../services/api-client.js";

const Pet = () => {
  const [pets, setPets] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true)
    apiClient
      .get("/pets/")
      .then((res) => setPets(res.data.results))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, []);

  const visiblePets = showAll ? pets : pets.slice(0, 3); // Show 3 or all

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <PawPrint size={48} className="mx-auto mb-4 text-yellow-500"/>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Adopt a Pet</h2>
          <h3 className="text-2xl md:text-3xl text-gray-600 mb-4">Find a new furry Friend</h3>
          <p className="text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Discover your perfect companion among our adorable pets. Whether you're looking for a loyal friend or a playful partner, we’re here to help you find the furry friend that fits right into your heart and home.
          </p>
        </div>
        {/* Spinner  */}
        {loading ? (
          <div className="flex justify-center mt-16">
            <span className="loading loading-spinner text-yellow-500"></span>
          </div>
        ) : (
          <>
            {error && <ErrorAlert error={error}/>}

            {/* Pet Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {visiblePets.map((pet) => (
                <PetItems key={pet.id} pet={pet} />
              ))}
            </div>

            {/* See More Button */}
            {!showAll && pets.length > 3 && (
              <div className="text-center mt-8">
                <button
                  onClick={() => setShowAll(true)}
                  className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-8 py-3 rounded-full transition-colors duration-300 uppercase tracking-wide"
                >
                  See More
                </button>
              </div>
            )}
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

export default Pet;
