const Pagination = ({totalPages , currentPage, handlePageChanges,next,previous}) => {
    return (
        <div
            className="mt-12 flex justify-center"
        >
            <nav className="flex items-center space-x-2">
                 <button 
                    disabled={!previous}
                    onClick={() => handlePageChanges(previous)}
                    className="px-3 py-1 rounded border border-gray-300 text-gray-600 hover:bg-gray-100 disabled:opacity-50"
                    >
                        Previous
                    </button>
                {Array.from({length: totalPages}, (_,i) => (
                    <button 
                        key={i}
                        onClick = {() => handlePageChanges(i+1)}
                        className= {`px-3 py-1 rounded ${currentPage === i+1 ? 'bg-yellow-500 text-white' : ' rounded border border-gray-300 text-gray-600 hover:bg-gray-100'}`}
                    >
                        {i + 1}
                    </button>
                ))}
                <button 
                    disabled={!next}
                    onClick={() => handlePageChanges(next)}
                    className="px-3 py-1 rounded border border-gray-300 text-gray-600 hover:bg-gray-100 disabled:opacity-50"
                >
                    Next
                </button>
            </nav>
        </div>
    );
};

export default Pagination;

// const Pagination = ({ totalPages, currentPage, handlePageChange }) => (
//   <div className="mt-6 flex justify-center gap-2">
//     {Array.from({ length: totalPages }, (_, i) => (
//       <button
//         key={i}
//         className={`btn ${currentPage === i + 1 ? "btn-primary" : "btn-outline"}`}
//         onClick={() => handlePageChange(i + 1)}
//       >
//         {i + 1}
//       </button>
//     ))}
//   </div>
// );
// export default Pagination;
