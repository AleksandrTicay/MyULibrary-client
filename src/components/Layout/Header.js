import Navbar from "react-bootstrap/Navbar";
import cartImage from "../../assets/cart.svg";
import classes from "./Header.module.css";
import Container from "react-bootstrap/Container";

const Header = () => {
  return (    
      <Container className={classes.bgWhite} >
        <Navbar expand="lg">
            <h1 className="">
              <a className="text-dark text-decoration-none" href="/">
                My U Library
              </a>
            </h1>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
              <div className="d-flex align-items-end ms-auto me-5">
                <img src={cartImage} alt="" width="40px" height="40px" />
                <h5>Login</h5>
              </div>
            </Navbar.Collapse>          
        </Navbar>
      </Container>               
  );
};

export default Header;
