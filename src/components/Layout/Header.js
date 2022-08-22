import Navbar from "react-bootstrap/Navbar";
import classes from "./Header.module.css";
import SearchBar from "../UI/SearchBar";
import HeaderContainer from "./HeaderContainer";
import Logo from "../UI/Logo";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo/>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse
        id="basic-navbar-nav"
        className=" d-flex justify-content-around"
      >
        <SearchBar />
        <div className={classes.userData}>
          <p className="mb-0 pe-4">
            Hey, <strong>Aleks</strong>
          </p>
          <i className="ri-user-line"></i>
          <i className="ri-shopping-cart-2-line ps-4 pe-4"></i>
          <p className="mb-0">Log out</p>
        </div>
      </Navbar.Collapse>
    </HeaderContainer>
  );
};

export default Header;
