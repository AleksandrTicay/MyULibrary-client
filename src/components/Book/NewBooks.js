import React from "react";
import classes from './NewBooks.module.css';
import Button from "react-bootstrap/Button";
import MyModal from "../UI/MyModal";

const NewBooks = (props) => {
    const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className={`${classes['bookCard']} ${classes['card-1']}`}>
      <div className={classes.bookCard__book}></div>
      <div className={classes.bookCard__data}>
        <p className="h4"><strong> Book Title</strong></p>
        <div className='d-flex'>
          <i className="ri-user-line"></i>
          <p className='px-2'>Author Name</p>
        </div>
        <Button
              variant="primary"
              className={classes.bookCard__btn}
              onClick={() => setModalShow(true)}
            >
              View Details
            </Button>
            <MyModal show={modalShow} onHide={() => setModalShow(false)} />        
      </div>
    </div>
  );
};

export default NewBooks;
