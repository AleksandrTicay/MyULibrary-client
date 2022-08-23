import Button from 'react-bootstrap/Button';
import { Fragment } from "react";
import Form from "react-bootstrap/Form";
import classes from "./UserForm.module.css";

const UserForm = () => {
  return (
    <Fragment>
      <div className={classes.title}>
        <i className="ri-user-line"></i>
        <p className="h4 px-2 fw-bolder">Add User</p>
      </div>
      <Form className="pt-4">
        <Form.Group className="mb-3" >
          <Form.Label className="fw-bolder">
            First Name<span className="text-danger"> *</span>
          </Form.Label>
          <Form.Control type="text" placeholder="Write the users First Name" />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label className="fw-bolder">
            Last Name<span className="text-danger"> *</span>
          </Form.Label>
          <Form.Control type="text" placeholder="Write the users Last Name" />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label className="fw-bolder">
            E-mail<span className="text-danger"> *</span>
          </Form.Label>
          <Form.Control type="email" placeholder="Write the users email" />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label className="fw-bolder">
            Role<span className="text-danger"> *</span>
          </Form.Label>
          {["radio"].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                inline
                label="Student"
                name="group1"
                type={type}
                id={`inline-${type}-1`}
              />
              <Form.Check
                inline
                label="Librarian"
                name="group1"
                type={type}
                id={`inline-${type}-2`}
              />
            </div>
          ))}
        </Form.Group>
        <div className={classes.btn}>
          <Button className="me-4">Create User</Button>
          <Button>Cancel</Button>
        </div>
      </Form>
    </Fragment>
  );
};

export default UserForm;
