import defaultImage from "../../assets/defaul_pet_img.jpeg";
import { useEffect, useState } from "react"
import { ShoppingCart, List, Search } from "lucide-react"
import apiClient from "../../services/api-client"
import ErrorAlert from "../ErrorAlert";

const ShopPage = () => {
    const [pets,setPets] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [selectedCategory, setSelectedCategory] = useState("All Categories");
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        setLoading(true)
        apiClient
            .get('/pets')
            .then((res) => {
                setPets(res.data)
                console.log(res.data);
            })
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false))
    },[])

    const handleAddToCart = (productId) => {
        console.log(`Added product ${productId} to cart`)
        // Add your cart logic here
    }

    const handleViewDetails = (productId) => {
        console.log(`Viewing details for product ${productId}`)
        // Add your navigation logic here
    }

    const handleViewOptions = (productId) => {
        console.log(`Viewing options for product ${productId}`)
        // Add your options modal logic here
    }

    // Filter
    const uniqueCategories = [...new Set(pets.map(p => p.category))];
    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };
    // const filteredPets = selectedCategory === "All Categories"
    //     ? pets
    //     : pets.filter((pet) => pet.category === selectedCategory.toLowerCase()
    // );

    // Sort 
    const [sortOption, setSortOption] = useState("Latest");
    const handleSortChange = (e) => {
        setSortOption(e.target.value);
    };
    const processedPets = pets
        .filter((pet) =>
            (selectedCategory === "All Categories" || pet.category === selectedCategory.toLowerCase()) &&
            (pet.name.toLowerCase().includes(searchQuery.toLowerCase()))
        )
        .sort((a, b) => {
            if (sortOption === "Price: Low to High") {
            return (a.cost || 0) - (b.cost || 0);
            } else if (sortOption === "Price: High to Low") {
            return (b.cost || 0) - (a.cost || 0);
            } else {
            return 0;
            }
    });


        
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Shop Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Filters and Sorting */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <List size={20} className="text-gray-500" />
            <span className="text-gray-700 font-medium">Filter by:</span>
            <select 
                className="border border-gray-300 text-black rounded-md px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={selectedCategory}
                onChange={handleCategoryChange}
            >
                <option className="text-black">All Categories</option>
                {uniqueCategories.map((category, index) => (
                    <option key={index} className="text-black">
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                    </option>
                ))}
            </select>
          </div>
            <div 
                className="flex gap-2"
            >   
                <div className="flex items-center space-x-2">
                    <span className="text-gray-700 font-medium">Search:</span>
                    <div className="relative hidden md:block">
                        
                        <input
                            type="text"
                            placeholder="Search pets..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="text-black pl-10 pr-4 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        />
                        <Search className="absolute left-3 top-2.5 text-black" size={18} />
                    </div>
                </div>
                <div className="flex items-center space-x-2">
                    <span className="text-gray-700 font-medium">Sort by:</span>
                    <select 
                        value={sortOption}
                        onChange={handleSortChange}
                        className="border border-gray-300 text-black rounded-md px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    >
                    <option>Latest</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    </select>
                </div>
            </div>
        </div>
        {/* Spinner  */}
        {loading ? (
          <div className="flex justify-center mt-16">
            <span className="loading loading-spinner text-orange-500"></span>
          </div>
        ) : (
             <>
            {error && <ErrorAlert error={error}/>}
            {/* Pets Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {processedPets.map((pet) => (
                <div
                key={pet.id}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                {/* Pet Image */}
                <div className="h-64 overflow-hidden">
                    <img
                        src={pet.images.length > 0 ? pet.images[0].image : defaultImage}
                        alt={pet.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                </div>

                {/* Pet Info */}
                <div className="p-4 bg-gray-50">
                    <h3 className="text-lg font-medium text-gray-800 mb-2">{pet.name}</h3>
                    <div className="space-y-1 mb-6 text-sm text-gray-600">
                        <p>
                            <span className="font-medium text-center ">Breed</span>
                            <span className= "text-gray-600"> {pet.breed}</span>
                        </p>
                        <p>
                            <span className="font-medium">Age:</span>
                            <span className="text-gray-700"> {pet.age}</span>
                        </p>
                    </div>
                    <div className="mb-4">
                        {pet.type === "variable" && pet.priceRange ? (
                            <p className="text-orange-600 font-semibold">
                                ${pet.priceRange.min.toFixed(2)} - ${pet.priceRange.max.toFixed(2)}
                            </p>
                            ) : pet.cost ? (
                            <p className="text-orange-600 font-semibold">
                                ${pet.cost.toFixed(2)}
                            </p>
                            ) : (
                            <p className="text-gray-500">Price not available</p>
                        )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-between">
                    {pet.type === "variable" ? (
                        <button
                        onClick={() => handleViewOptions(pet.id)}
                        className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded transition-colors text-sm font-medium"
                        >
                        Options
                        </button>
                    ) : (
                        <>
                        <button
                            onClick={() => handleAddToCart(pet.id)}
                            className="flex-1 mr-2 bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded transition-colors text-sm font-medium flex items-center justify-center gap-2"
                        >
                            <ShoppingCart size={16} />
                            Add
                        </button>
                        <button
                            onClick={() => handleViewDetails(pet.id)}
                            className="flex-1 ml-2 bg-white border border-gray-300 hover:bg-gray-100 text-gray-800 py-2 px-4 rounded transition-colors text-sm font-medium"
                        >
                            Details
                        </button>
                        </>
                    )}
                    </div>
                </div>
                </div>
            ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center">
            <nav className="flex items-center space-x-2">
                <button className="px-3 py-1 rounded border border-gray-300 text-gray-600 hover:bg-gray-100">
                Previous
                </button>
                <button className="px-3 py-1 rounded bg-orange-500 text-white">1</button>
                <button className="px-3 py-1 rounded border border-gray-300 text-gray-600 hover:bg-gray-100">2</button>
                <button className="px-3 py-1 rounded border border-gray-300 text-gray-600 hover:bg-gray-100">3</button>
                <button className="px-3 py-1 rounded border border-gray-300 text-gray-600 hover:bg-gray-100">Next</button>
            </nav>
            </div>
            </>
        )}
      </div>
    </div>
  )
}

export default ShopPage;
