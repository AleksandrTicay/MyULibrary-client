import classes from "./Book.module.css";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import MyModal from "../UI/MyModal";
import React from "react";

const Book = (props) => {
  const [modalShow, setModalShow] = React.useState(false);

  let names = props.books.authors.map((author) => author.name);
  const authors = names.toString();

    

  return (
    <Col md={2} className="pt-3">
      <div className={classes.book}>
        <Button
          variant="primary"
          className={classes.btn}
          onClick={() => setModalShow(true)}
        >
          +
        </Button>
        <MyModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          key={props.books.id}
          title={props.books.title}
          amount={props.books.amount}
          publishedyear = {props.books.publishedYear}
          authors = {authors}
          genres = {props.books.genres}
        />
      </div>
      <p className="fw-bolder mb-0 pt-3"> {props.books.title}</p>
      <div className={classes.icon}>
        <i className="ri-user-line"></i>
        <p className="text-start ps-2">{authors}</p>
      </div>
    </Col>
  );
};

export default Book;
