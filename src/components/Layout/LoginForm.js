import { Fragment } from "react";
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";
import classes from './LoginForm.module.css';

const LoginForm = () => {
  return (
    <Fragment>
      <p className="h4 fw-bolder">Login</p>
      <Form className="pt-4">
        <Form.Group className="mb-3 text-start">
          <Form.Label className="fw-bolder">
            Email<span className="text-danger"> *</span>
          </Form.Label>
          <Form.Control type="email" placeholder="Write your email" />
        </Form.Group>
        <Form.Group className="mb-3 text-start">
          <Form.Label className="fw-bolder ">
            Password<span className="text-danger"> *</span>
          </Form.Label>
          <Form.Control type="password" placeholder="Write your password" />
        </Form.Group>        
        <div className="">
          <Button className={classes.btn}>Login</Button>          
        </div>
      </Form>
    </Fragment>
  );
};

export default LoginForm;
