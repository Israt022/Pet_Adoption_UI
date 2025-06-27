// const FilterSection = ({
//   priceRange, handlePriceChange, categories,
//   selectedCategory, handleCategoryChange,
//   searchQuery, handleSearchQuery,
//   sortOrder, handleSorting
// }) => (
//   <div className="mb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//     <input type="text" value={searchQuery} onChange={(e) => handleSearchQuery(e.target.value)} placeholder="Search..." />
//     <select value={selectedCategory} onChange={(e) => handleCategoryChange(e.target.value)}>
//       <option value="">All Categories</option>
//       {categories.map(cat => <option key={cat.id} value={cat.id}>{cat.name}</option>)}
//     </select>
//     <select value={sortOrder} onChange={(e) => handleSorting(e.target.value)}>
//       <option value="">Sort By</option>
//       <option value="asc">Price: Low to High</option>
//       <option value="desc">Price: High to Low</option>
//     </select>
//     <div>
//       <label>Min: {priceRange[0]}</label>
//       <input type="range" min="0" max="1000" value={priceRange[0]} onChange={(e) => handlePriceChange(0, +e.target.value)} />
//     </div>
//     <div>
//       <label>Max: {priceRange[1]}</label>
//       <input type="range" min="0" max="1000" value={priceRange[1]} onChange={(e) => handlePriceChange(1, +e.target.value)} />
//     </div>
//   </div>
// );
// export default FilterSection;
import { List, Search } from "lucide-react";

const FilterSection = ({
  uniqueCategories,
  selectedCategory,
  handleCategoryChange,
  searchQuery,
  setSearchQuery,
  sortOption,
  handleSortChange
}) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 space-y-4 md:space-y-0">
      {/* Filter by category */}
      <div className="flex items-center space-x-2">
        <List size={20} className="text-gray-500" />
        <span className="text-gray-700 font-medium">Filter by:</span>
        <select
          className="border border-gray-300 text-black rounded-md px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-orange-500"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option>All Categories</option>
          {uniqueCategories.map((category, index) => (
            <option key={index}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {/* Search & Sort */}
      <div className="flex gap-2">
        {/* Search */}
        <div className="flex items-center space-x-2">
          <span className="text-gray-700 font-medium">Search:</span>
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search pets..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="text-black pl-10 pr-4 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <Search className="absolute left-3 top-2.5 text-black" size={18} />
          </div>
        </div>

        {/* Sort */}
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
  );
};

export default FilterSection;
