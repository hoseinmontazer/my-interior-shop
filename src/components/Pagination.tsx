import { useState } from "react";

interface PaginationProps {
  items: any;
  itemsPerPage: number;
}

const Pagination: React.FC<PaginationProps> = ({ items, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const handlePageChange = (page: number): void => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-2 mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 disabled:opacity-50"
        >
          Previous
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 ${
              currentPage === index + 1 ? "bg-yellow-500 text-white" : ""
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
