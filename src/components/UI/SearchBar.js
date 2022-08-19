import classes from './Searchbar.module.css';
import magnifyImage from '../../assets/magnify.png';

const SearchBar = () => {
  return (
    <form action="" className="position-relative">
      <input className="form-control pe-4" />
      <button className={classes["btn-search"]}><img src={magnifyImage} alt="" class="img-fluid"/></button>
    </form>
  );
};

export default SearchBar;
