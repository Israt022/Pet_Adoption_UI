import { useState, useEffect } from "react";
import apiClient from "../../services/api-client";
import FilterSection from "../../components/Shop/FilterSection";
import Pagination from "../../components/Shop/Pagination";
import ErrorAlert from "../../components/ErrorAlert";
import PetList from "./PetList";

const ShopPage = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("Latest");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [next, setNext] = useState(null);
  const [previous, setPrevious] = useState(null);

  useEffect(() => {
    fetchPets();
  }, [currentPage]);

  const uniqueCategories = [...new Set(pets.map((p) => p.category))];

  const processedPets = pets
    .filter((pet) =>
      (selectedCategory === "All Categories" || pet.category === selectedCategory.toLowerCase()) &&
      pet.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === "Price: Low to High") return (a.cost || 0) - (b.cost || 0);
      if (sortOption === "Price: High to Low") return (b.cost || 0) - (a.cost || 0);
      return 0;
    });

  const fetchPets = async () => {
    setLoading(true);
    try {
      const res = await apiClient.get(`/pets/?page=${currentPage}`);
      setPets(res.data.results);
      setNext(res.data.next);
      setPrevious(res.data.previous);
      setTotalPages(Math.ceil(res.data.count / 6));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  console.log("ShopPage pets:", pets);
  const handlePageChanges = (pageOrUrl) => {
    if (typeof pageOrUrl === "number") {
      setCurrentPage(pageOrUrl);
    } else {
      const page = getPageNumberFromUrl(pageOrUrl);
      setCurrentPage(page);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getPageNumberFromUrl = (url) => {
    try {
      const params = new URL(url, window.location.origin).searchParams;
      return parseInt(params.get("page")) || 1;
    } catch {
      return 1;
    }
  };

  const handleViewOptions = (id) => console.log("Options:", id);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <FilterSection
          uniqueCategories={uniqueCategories}
          selectedCategory={selectedCategory}
          handleCategoryChange={(e) => setSelectedCategory(e.target.value)}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          sortOption={sortOption}
          handleSortChange={(e) => setSortOption(e.target.value)}
        />

        {loading ? (
          <div className="flex justify-center mt-16">
            <span className="loading loading-spinner text-yellow-500"></span>
          </div>
        ) : (
          <>
            {error && <ErrorAlert error={error} />}
            <PetList
              pets={pets}
              processedPets={processedPets}
              handleViewOptions={handleViewOptions}
            />
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              handlePageChanges={handlePageChanges}
              next={next}
              previous={previous}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default ShopPage;
