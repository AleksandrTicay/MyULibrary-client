import { Fragment } from "react";

const Logo = () => {
  return (
    <Fragment>
      <i className="ri-book-2-line h4 text-white bgBlack p-1 px-2 me-3 rounded"></i>
      <a className="text-dark h4 text-decoration-none" href="/">
        <strong>My UI Library</strong>
      </a>
    </Fragment>
  );
};

export default Logo;
