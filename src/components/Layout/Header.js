import Navbar from "react-bootstrap/Navbar";
import classes from "./Header.module.css";
import SearchBar from "../UI/SearchBar";
import Container from "react-bootstrap/Container";

const Header = () => {
  return (
    <div className={classes.bgWhite}>
      <Container className="py-3">
        <Navbar expand="lg">
          <i className="ri-book-2-line h4 text-white bgBlack p-1 px-2 me-3 rounded"></i>
          <a className="text-dark h4 text-decoration-none" href="/">
            <strong>My UI Library</strong> 
          </a>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className=" d-flex justify-content-around">
            <SearchBar/>
            <div className={classes.userData}>
              <p className="mb-0 pe-4">Hey, <strong>Aleks</strong></p>
              <i className="ri-user-line"></i>
              <i class="ri-shopping-cart-2-line ps-4 pe-4"></i>              
              <p className="mb-0">Log out</p>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
};

export default Header;
