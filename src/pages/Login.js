import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Logo from "../components/UI/Logo";
import classes from "./Login.module.css";
import LoginForm from "../components/Layout/LoginForm";

const Login = () => {
  return (
    <Container fluid>
      <Row className={classes.form}>
        <Col md={6} className={classes.col}>
          <div className={classes["logo__pos"]}>
            <Logo />
            <h1 className="fw-bolder py-3">Welcome Back!</h1>
          </div>
        </Col>
        <Col md={6} className={classes['col-r']}>
          <div className={classes["logo__pos"]}>
            <LoginForm />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
