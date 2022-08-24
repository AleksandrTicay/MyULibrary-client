import HeaderContainer from "./HeaderContainer";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../UI/Logo";
import classes from "./HeaderLibrarian.module.css";
import { logout } from "../lib/api";

const HeaderLibrarian = (props) => {
  const loggingOut = () => {
    logout();
    setRefresh(true);
  };

  const { setRefresh } = props;
  return (
    <HeaderContainer>
      <Logo />
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse
        id="basic-navbar-nav"
        className=" d-flex justify-content-end"
      >
        <div className={classes.userData}>
          <div className="ms-auto d-flex">
            <p className="mb-0 pe-4">
              Hey, <strong>Aleks</strong>
            </p>
            <i className="ri-user-line mx-3"></i>
            <button onClick={loggingOut} className="mb-0 btn">
              Log out
            </button>
          </div>
        </div>
      </Navbar.Collapse>
    </HeaderContainer>
  );
};

export default HeaderLibrarian;
