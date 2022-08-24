import Button from "react-bootstrap/Button";
import { Fragment, useRef } from "react";
import Form from "react-bootstrap/Form";
import classes from "./BookForm.module.css";
import { addingBooks } from "../lib/api";

const Bookform = () => {

    const titleNameInputRef = useRef();
    const authorsInputRef = useRef();
    const amountInputRef = useRef();
    const yearInputRef = useRef();
    const genreInputRef = useRef();

    const onSubmitHandler = event => {
        event.preventDefault();
       
        const values = {
            title: titleNameInputRef.current.value,
            authors: authorsInputRef.current.value,
            amount: amountInputRef.current.value,
            year: yearInputRef.current.value,
            genre: genreInputRef.current.value
        }
                
        addingBooks(values);
    }

  return (
    <Fragment>
      <div className={classes.title}>
        <i className="ri-book-2-line"></i>
        <p className="h4 px-2 fw-bolder">Add Book</p>
      </div>
      <Form onSubmit={onSubmitHandler} className="pt-4">
        <Form.Group className="mb-3" >
          <Form.Label className="fw-bolder">
            Title<span className="text-danger"> *</span>
          </Form.Label>
          <Form.Control ref={titleNameInputRef} type="text" placeholder="Write the title" />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label className="fw-bolder">
            Author<span className="text-danger"> * </span><small>(To add more than one author use commas)</small>
          </Form.Label>
          <Form.Control ref={authorsInputRef} type="text" placeholder="Write the Author" />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label className="fw-bolder">
            Genre<span className="text-danger"> *</span><small>(To add more than one genre use commas)</small>
          </Form.Label>
          <Form.Control ref={genreInputRef} type="text" placeholder="Write the Genre" />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label className="fw-bolder">
            Amount<span className="text-danger"> *</span>
          </Form.Label>
          <Form.Control ref={amountInputRef} type="number" placeholder="Write the Amount" />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label className="fw-bolder">
            Published Year<span className="text-danger"> *</span>
          </Form.Label>
          <Form.Control ref={yearInputRef} type="number" placeholder="Write the Published Year" />
        </Form.Group>
        
        <div className={classes.btn}>
          <Button type="submit" className="me-4">Add Book</Button>
          <Button>Cancel</Button>
        </div>
      </Form>
    </Fragment>
  );
};

export default Bookform;
