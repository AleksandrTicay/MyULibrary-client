import classes from './Searchbar.module.css';

const SearchBar = () => {
  return (
    <form action="" className={classes.searchForm}>
      <input className="ps-4" placeholder='Search by title, author, genre' />
      <i class="ri-search-line"></i>
    </form>
  );
};

export default SearchBar;
