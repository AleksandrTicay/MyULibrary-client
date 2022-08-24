import { Fragment } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import classes from "./LoginForm.module.css";
import { signAPI,  setToken } from "../lib/api";

const LoginForm = (props) => {
  const [user, setUser] = useState(initialValues());
  const [error, setError] = useState();
  const { setRefresh } = props;

  const onSubmitHandler = (event) => {
    event.preventDefault();
    signAPI(user)
      .then((response) => {
        if (response.message) {          
          setError(response.message);
        } else {
          setToken(response);
          setRefresh(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onChangeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <Fragment>
      <p className="h4 fw-bolder">Login</p>
      <Form
        onSubmit={onSubmitHandler}
        onChange={onChangeHandler}
        className="pt-4"
      >
        <Form.Group className="mb-3 text-start">
          <Form.Label className="fw-bolder">
            Email<span className="text-danger"> *</span>
          </Form.Label>
          <Form.Control
            name="email"
            type="email"
            defaultValue={user.email}
            placeholder="Write your email"
          />
        </Form.Group>
        <Form.Group className="mb-3 text-start">
          <Form.Label className="fw-bolder ">
            Password<span className="text-danger"> *</span>
          </Form.Label>
          <Form.Control
            name="password"
            defaultValue={user.password}
            type="password"
            placeholder="Write your password"
          />
        </Form.Group>
        <div className="">
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </Form>
      {error && <div>{error}</div> }
    </Fragment>
  );
};

export default LoginForm;

function initialValues() {
  return {
    email: "",
    password: "",
  };
}
