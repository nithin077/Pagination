export default Pagination = ({ setCurrentpage, currentPage, totalPages }) => {
  const handlePagination = (pageNo: number) => {
    setCurrentpage(pageNo);
  };

  const handleNextPage = () => {
    setCurrentpage((prev: number) => prev + 1);
  };

  const handlePrevPage = () => {
    setCurrentpage((prev: number) => prev - 1);
  };

  return (
    <div className="pagination-container">
      <button
        disabled={currentPage === 0}
        className="page-number"
        onClick={() => handlePrevPage()}
      >
        «
      </button>
      {[...Array(totalPages).keys()].map((n) => (
        <button
          key={n}
          className={"page-number " + (n === currentPage ? "page-active" : "")}
          onClick={() => handlePagination(n)}
        >
          {n + 1}
        </button>
      ))}
      <button
        disabled={currentPage === totalPages - 1}
        className="page-number"
        onClick={() => handleNextPage()}
      >
        »
      </button>
    </div>
  );
};
