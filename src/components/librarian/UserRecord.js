import classes from "./UserRecord.module.css";

const UserRecord = () => {
  return (
    <div className={classes.title}>
      <i className="ri-history-line"></i>
      <p className="h4 px-2 fw-bolder">Record</p>
    </div>
  );
};

export default UserRecord;
