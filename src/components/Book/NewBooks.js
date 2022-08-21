import classes from './NewBooks.module.css';

const NewBooks = () => {
  return (
    <div className={`${classes['bookCard']} ${classes['card-1']}`}>
      <div className={classes.bookCard__book}></div>
      <div className={classes.bookCard__data}>
        <p className="h4"><strong> Book Title</strong></p>
        <div className='d-flex'>
          <i className="ri-user-line"></i>
          <p className='px-2'>Author Name</p>
        </div>
        <button className={classes.bookCard__btn}>View Details</button>
      </div>
    </div>
  );
};

export default NewBooks;
