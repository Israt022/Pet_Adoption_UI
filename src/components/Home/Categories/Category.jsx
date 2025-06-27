import { Dog, Cat, Bird } from "lucide-react"
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import apiClient from "../../../services/api-client";


const Category = () => {
  const [pet,setPet] = useState([]);
  const [loading, setLoading] = useState(false);
  const { petId } = useParams();
      // console.log("Pet availability:", pet.availability);
  
  const fetchAllPets = async () => {
  let allPets = [];
  let nextUrl = "/pets/";

  while (nextUrl) {
    const res = await apiClient.get(nextUrl);
    const data = res.data;
    allPets = [...allPets, ...data.results];
    nextUrl = data.next ? data.next.replace("https://petbondbd.vercel.app/api/v1", "") : null;
  }

  return allPets;
};


  useEffect(() => {
      setLoading(true);
      fetchAllPets().then((allPets) => {
          setPet(allPets);
          setLoading(false);
          console.log('All pets',allPets);
      });
  }, [petId]);

  if (loading) return <div className="flex justify-center mt-27 mb-30">
            <span className="loading loading-spinner text-yellow-500"></span>
          </div>;
  // category count
  const dogCount = pet.filter((p) => p.category === "dog").length;
  const catCount = pet.filter((p) => p.category === "cat").length;
  const birdCount = pet.filter((p) => p.category === "bird").length;

    const categories = [
    {
      id: 1,
      name: "Dogs",
      icon: <Dog size={48} className="text-yellow-500" />,
      description:
        "Loyal companions with endless energy and love. Find the perfect dog breed for your family.",
      count: dogCount,
    },
    {
      id: 2,
      name: "Cats",
      icon: <Cat size={48} className="text-yellow-500" />,
      description:
        "Independent and affectionate feline friends. Discover cats that match your lifestyle.",
      count: catCount,
    },
    {
      id: 3,
      name: "Birds",
      icon: <Bird size={48} className="text-yellow-500" />,
      description:
        "Colorful and intelligent feathered companions. Explore various bird species and care tips.",
      count: birdCount,
    },
  ]
  const handleCategoryClick = (categoryName) => {
    console.log(`Clicked on ${categoryName} category`)
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Pet Categories</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our amazing collection of pets. Each category offers unique companions waiting to find their
            forever homes.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() => handleCategoryClick(category.name)}
              className="bg-white rounded-lg p-8 text-center shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="p-4 bg-orange-50 rounded-full">{category.icon}</div>
              </div>

              {/* Category Name */}
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-yellow-500 transition-colors duration-300">
                {category.name}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-4 leading-relaxed">{category.description}</p>

              {/* Count Badge */}
              {category.count && (
                <div className="inline-flex items-center px-3 py-1 bg-orange-100 text-yellow-600 rounded-full text-sm font-medium">
                  {category.count} Available
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        {/* <div className="text-center mt-12">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg">
            View All Pets
          </button>
        </div> */}
      </div>
    </section>
  )
}

export default Category;
