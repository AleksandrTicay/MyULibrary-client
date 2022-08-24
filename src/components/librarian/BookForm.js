import Button from "react-bootstrap/Button";
import { Fragment, useRef,useState } from "react";
import Form from "react-bootstrap/Form";
import classes from "./BookForm.module.css";
import { addingBooks } from "../lib/api";

const Bookform = () => {
  const [book, setBook] = useState(initialValues());  

  const onSubmitHandler = (event) => {
    console.log(book);
    event.preventDefault();
    addingBooks(book)
      .then((response) => {
        if (response.msg) {
          console.log(response.msg);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onChangeHandler = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  return (
    <Fragment>
      <div className={classes.title}>
        <i className="ri-book-2-line"></i>
        <p className="h4 px-2 fw-bolder">Add Book</p>
      </div>
      <Form
        onChange={onChangeHandler}
        onSubmit={onSubmitHandler}
        className="pt-4"
      >
        <Form.Group className="mb-3">
          <Form.Label className="fw-bolder">
            Title<span className="text-danger"> *</span>
          </Form.Label>
          <Form.Control
            name="title"
            defaultValue={book.title}
            type="text"
            placeholder="Write the title"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="fw-bolder">
            Author<span className="text-danger"> * </span>
            <small>(To add more than one author use commas)</small>
          </Form.Label>
          <Form.Control
            name="authors"
            defaultValue={book.authors}
            type="text"
            placeholder="Write the Author"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="fw-bolder">
            Genre<span className="text-danger"> *</span>
            <small>(To add more than one genre use commas)</small>
          </Form.Label>
          <Form.Control
                name="genres"            
                defaultValue={book.genres}
            type="text"
            placeholder="Write the Genre"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="fw-bolder">
            Amount<span className="text-danger"> *</span>
          </Form.Label>
          <Form.Control
                name="amount"            
                defaultValue={book.amount}
            type="number"
            placeholder="Write the Amount"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="fw-bolder">
            Published Year<span className="text-danger"> *</span>
          </Form.Label>
          <Form.Control
                name="publishedYear"            
                defaultValue={book.publishedYear}
            type="number"
            placeholder="Write the Published Year"
          />
        </Form.Group>

        <div className={classes.btn}>
          <Button type="submit" className="me-4">
            Add Book
          </Button>
          <Button>Cancel</Button>
        </div>
      </Form>
    </Fragment>
  );
};

export default Bookform;

function initialValues() {
  return {
    title: "",
    authors: "",
    genres: "",
    amount: "",
    publishedYear: ""    
  };
}
