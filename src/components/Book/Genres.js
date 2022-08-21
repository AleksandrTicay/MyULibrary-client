import { Fragment } from "react";

const Genres = () => {
  return (
    <Fragment>
      <div className="d-flex pt-4 ps-2 align-items-center">
        <i className={"fa-solid fa-star star-icon"}></i>
        <p className="mb-0 h5">Genres</p>
      </div>
      <div className="ps-4 pt-2">
        <ul className="list-group-flush">
            <li className="list-group-item border-bottom">Fantasia</li>
            <li className="list-group-item border-bottom">Fantasia</li>
            <li className="list-group-item border-bottom">Fantasia</li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Genres;
