import classes from "../styles/Pagination.module.css";
const Pagination = ({ totalBills, currentPage, setCurrentPage }) => {
  //console.log(totalBills);
  const totalPage = Math.ceil(totalBills / 5);
  //console.log(currentPage);
  return (
    <div className={classes.paginationContainer}>
      {Array(totalPage)
        .fill(true)
        .map((_, i) => {
          return (
            <button
              onClick={() => setCurrentPage(i + 1)}
              key={i}
              className={`${classes.paginationButton} ${currentPage === i + 1 ? classes.active : ""}`}
            >
              {i + 1}
            </button>
          );
        })}
    </div>
  );
};

export default Pagination;
