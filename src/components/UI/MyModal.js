import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { map } from "lodash";
import classes from "./MyModal.module.css";

function MyModal(props) {

  function submitFormHandler(event) {

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
        <div className={classes.bodyModal}>
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
            <div>
              <form onSubmit={submitFormHandler}>
                <Button className={classes["bodyModal__btn-black"]}>
                  Add to Cart
                </Button>
              </form>
              <Button
                onClick={props.onHide}
                className={classes["bodyModal__btn-white"]}
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default MyModal;
