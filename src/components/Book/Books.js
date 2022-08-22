import { Fragment } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";
import Button from "react-bootstrap/Button";
import MyModal from "../UI/MyModal";
import classes from "./Book.module.css";

const Books = (props) => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <Fragment>
      <p className="fw-bolder h4">
        <strong> Browse</strong>
      </p>
      <Row>
        <Col md={4} className="pt-3">
          <div className={classes.book}>
            <Button
              variant="primary"
              className={classes.btn}
              onClick={() => setModalShow(true)}
            >
              +
            </Button>
            <MyModal show={modalShow} onHide={() => setModalShow(false)} />
          </div>
          <p className="fw-bolder mb-0 pt-3"> Edipo Rey</p>
          <div className={classes.icon}>
            <i className="ri-user-line"></i>
            <p className="text-start ps-2">Sofocles</p>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Books;
