import Container from "react-bootstrap/Container";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Books from "../Book/Books";
import Sidebar from "./Sidebar";

const BooksContainer = (props) => {
  
  

  return (
    <Container className="py-2">
      <Row>
        <Col md={9}>
          <Books />
        </Col>
        <Col md={3}>
          <Sidebar />
        </Col>
      </Row>
    </Container>
  );
};

export default BooksContainer;
