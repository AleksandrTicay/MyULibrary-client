import { Fragment } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import classes from "./HeaderContainer.module.css";

const HeaderContainer = (props) => {
  return (
    <Fragment>
      <div className={classes.bgWhite}>
        <Container className="py-3">
          <Navbar expand="lg">{props.children}</Navbar>
        </Container>
      </div>
    </Fragment>
  );
};

export default HeaderContainer;
