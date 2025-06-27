import defaultImage from "../../assets/defaul_pet_img.jpeg";
import { ShoppingCart, Check } from "lucide-react";
import { Link } from "react-router";
import AddToCartButton from "../PetDetails/AddToCartButton";

const PetList = ({ processedPets,  handleViewOptions }) => {
  return (
    // <Link
    //     to={`/shop/${pets.id}`}
    // >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {processedPets.map((pet) => (
            <div key={pet.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            {/* Pet image */}
            <div className="h-64 overflow-hidden">
                <img
                src={pet.images.length > 0 ? pet.images[0].image : defaultImage}
                alt={pet.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
            </div>

            {/* Info */}
            <div className="p-4 bg-gray-50">
                <h3 className="text-lg font-medium text-gray-800 mb-2">{pet.name}</h3>
                <div className="space-y-1 mb-6 text-sm text-gray-600">
                <p><span className="font-medium">Breed:</span> {pet.breed}</p>
                <p><span className="font-medium">Age:</span> {pet.age}</p>
                </div>

                {/* Price */}
                <div className="mb-4">
                {pet.type === "variable" && pet.priceRange ? (
                    <p className="text-orange-600 font-semibold">${pet.priceRange.min.toFixed(2)} - ${pet.priceRange.max.toFixed(2)}</p>
                ) : pet.cost ? (
                    <p className="text-orange-600 font-semibold">${pet.cost.toFixed(2)}</p>
                ) : (
                    <p className="text-gray-500">Price not available</p>
                )}
                </div>

                {/* Buttons */}
                <div className="flex justify-between">
                {pet.type === "variable" ? (
                    <button 
                        onClick={() => handleViewOptions(pet.id)} 
                        className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded text-sm"
                    >
                        Options
                    </button>
                ) : (
                    <>
                    {/* <button
                        onClick={ addToCart}
                        disabled={addingStatus[pet.id] === 'adding' || addingStatus[pet.id] === 'added' || !pet.availability}
                        className="flex-1 mr-2 bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded text-sm flex items-center justify-center gap-2"
                    >
                        {addingStatus[pet.id] === 'adding' ? (
                        <span className="flex items-center"><span className="loading loading-spinner loading-sm mr-2"></span>Adding...</span>
                        ) : addingStatus[pet.id] === 'added' ? (
                        <span className="flex items-center"><Check className="mr-2 h-4 w-4" />Added</span>
                        ) : (
                        <span className="flex items-center"><ShoppingCart className="mr-2 h-4 w-4" />Add</span>
                        )}
                    </button> */}
                    <div className="flex items-center">
                        <AddToCartButton pet={pet} />
                    </div>
                    <Link to={`/shop/${pet.id}`}><button className="flex-1 ml-2 bg-white border border-gray-300 hover:bg-gray-100 text-gray-800 py-2 px-4 rounded text-sm">Details</button></Link>
                    </>
                )}
                </div>
            </div>
            </div>
        ))}
        </div>
    // </Link>
  );
};

export default PetList;
