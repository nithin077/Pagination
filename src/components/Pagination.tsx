export default Pagination = ({ setCurrentpage, currentPage, totalPages }) => {
  handlePagination = (pageNo) => {
    setCurrentpage(pageNo);
  };

  handleNextPage = () => {
    setCurrentpage((prev) => prev + 1);
  };

  handlePrevPage = () => {
    setCurrentpage((prev) => prev - 1);
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
