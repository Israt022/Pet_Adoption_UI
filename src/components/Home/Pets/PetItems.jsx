import defaultImage from "../../../assets/defaul_pet_img.jpeg";

const PetItems = ({ pet }) => {
  return (
    
    <div className="bg-white rounded-lg p-8 text-center shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group hover:-translate-y-2">
      {/* Spinner  */}
      
      {/* Pet Image */}
      <div className="mb-4">
        <img
          src={pet.images.length > 0 ? pet.images[0].image : defaultImage}
          alt={pet.name}
          className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-white shadow-md"
        />
      </div>

      {/* Pet Name */}
      <h4 className="text-xl font-semibold text-gray-800 mb-4">{pet.name}</h4>

      {/* Pet Details */}
      <div className="space-y-1 mb-6 text-sm text-gray-600">
        <span className="font-bold text-xl text-center ">Description</span>
        <p>
          <span className= "text-gray-600"> {pet.description}</span>
        </p>
        <p>
          <span className="font-medium">Age:</span>
          <span className="text-gray-700"> {pet.age}</span>
        </p>
      </div>

      {/* More Info Button */}
      <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-2 rounded-full transition-colors duration-300 text-sm uppercase tracking-wide">
        MORE INFO
      </button>
    </div>
  );
};

export default PetItems;
