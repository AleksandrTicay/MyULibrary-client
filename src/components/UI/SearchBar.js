import classes from "./Searchbar.module.css";

const SearchBar = () => {

  

  function submitFormHandler(event) {

  }
  return (
    <form onSubmit={submitFormHandler} className={classes.searchForm}>
      <div className="d-flex">
        <select className={classes.searchForm}>
          <option value="volvo">Author</option>
          <option value="saab">Genre</option>
        </select>
        <div className="position-relative">
          <input className="ps-4" placeholder="Search by title, author" />
          <i className="ri-search-line"></i>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
