import Navbar from "react-bootstrap/Navbar";
import React from "react";
import classes from "./Header.module.css";
import Button from 'react-bootstrap/Button';
import SearchBar from "../UI/SearchBar";
import HeaderContainer from "./HeaderContainer";
import BooksModal from "../UI/BooksModal";
import Logo from "../UI/Logo";
import { logout } from "../lib/api";

const Header = (props) => {
  const [modalShow, setModalShow] = React.useState(false);
  const { setRefresh, setFilter, setSearch } = props;

  const loggingOut = () => {
    logout();
    setRefresh(true);
  }

  return (
    <HeaderContainer>
      <Logo />
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse
        id="basic-navbar-nav"
        className=" d-flex justify-content-around"
      >        
        <SearchBar setFilter={setFilter} setSearch={setSearch} />
        <div className={classes.userData}>
          <p className="mb-0 pe-4">
            Hey, <strong>Aleks</strong>
          </p>
          <i className="ri-user-line"></i>
          <Button className={classes.btn} onClick={() => setModalShow(true)}>
            <i className="ri-shopping-cart-2-line ps-4 pe-4"></i>
          </Button>

          <BooksModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />

          <button onClick={loggingOut} className="mb-0 btn">Log out</button>
        </div>
      </Navbar.Collapse>
    </HeaderContainer>
  );
};

export default Header;
