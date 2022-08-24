import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { map } from "lodash";
import classes from "./MyModal.module.css";

function MyModal(props) {
  const [addBook, setAddBook] = useState([]);
  const [formData, setFormData] = useState(initialValues);

  useEffect(() =>{
    setFormData({title: props.title, amount: props.amount, publishedYear: props.publishedyear});   
  },[]);

  function submitFormHandler(event) {
    event.preventDefault();            
    setAddBook([...addBook, formData]);  
    

    console.log(formData);
    console.log(addBook);
  }
  return (
    
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <form onSubmit={submitFormHandler} className={classes.bodyModal}>
            <div className={classes.bodyModal__img}></div>
            <div className={classes.bodyModal__data}>
              <p className="fw-bolder h4">{props.title}</p>
              <div className="d-flex">
                <i className="ri-user-line"></i>
                <p className="mb-0">{props.authors}</p>
              </div>
              <div className="d-flex">
                <i className="ri-calendar-line"></i>
                <p>{props.publishedyear}</p>
              </div>
              <div className="d-flex">
                {map(props.genres, (genre, index) => (
                  <p key={index} className={classes.bodyModal__genre}>
                    {genre.name}
                  </p>
                ))}
              </div>
              <p className="mb-0">Books available:</p>
              <p className="fw-bolder h4">{props.amount}</p>
              <div className="d-flex">
                <Button
                  type="submit"
                  className={classes["bodyModal__btn-black"]}
                >
                  Add to Cart
                </Button>

                <Button
                  onClick={props.onHide}
                  className={classes["bodyModal__btn-white"]}
                >
                  Cancel
                </Button>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    
  );
}

function initialValues() {
  return {
    title: "initial",
    amount: "",
    publishedYear: "",
  };
}

export default MyModal;
