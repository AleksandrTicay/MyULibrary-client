import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const BooksModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body className="px-md-5 px-3">
        <div className="d-flex">
          <p className="h4">Edipo Rey</p>
          <p className="h4 ms-auto">x3</p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default BooksModal;
