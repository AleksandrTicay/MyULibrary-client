import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import classes from './MyModal.module.css';

function MyModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        
      </Modal.Header>
      <Modal.Body>
        <div className={classes.bodyModal}>
          <div className={classes.bodyModal__img}>            
          </div>          
          <div className={classes.bodyModal__data}>
            <p className='fw-bolder h4'>Long Book Title</p>
            <div className="d-flex">
              <i className="ri-user-line"></i>
              <p className='mb-0'>Author Name</p>
            </div>
            <div className="d-flex">
              <i className="ri-calendar-line"></i>
              <p>1978</p>
            </div>
            <div className="d-flex">
              <p className={classes.bodyModal__genre}>Mystery</p>
              <p className={classes.bodyModal__genre}>Thriller</p>
            </div>
            <p className='mb-0'>Books available:</p>
            <p className='fw-bolder h4'>8</p>
            <div>
              <Button className={classes['bodyModal__btn-black']}>
                Add to Cart
              </Button>
              <Button onClick={props.onHide} className={classes['bodyModal__btn-white']}>Cancel</Button>          
            </div>            
          </div>         
        </div>
      </Modal.Body>     
    </Modal>
  );
}

export default MyModal;