import { useRef } from "react";
import classes from "./Searchbar.module.css";

const SearchBar = (props) => {  
  const nameInputRef = useRef();
  const filterInputRef = useRef();

  const {setFilter, setSearch} = props;


  const submitFormHandler = event => {
    event.preventDefault();
    setFilter(filterInputRef.current.value);
    setSearch(nameInputRef.current.value);       
  }

  return (
    <form onSubmit={submitFormHandler} className={classes.searchForm}>
      <div className="d-flex">
        <select ref={filterInputRef} className={classes.searchForm}>
          <option value="authors">authors</option>
          <option value="books">title</option>
        </select>
        <div className="position-relative">
          <input ref={nameInputRef} className="ps-4" placeholder="Search by title or  author" />
          <i className="ri-search-line"></i>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
