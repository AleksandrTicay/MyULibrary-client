import Container from "react-bootstrap/Container";
import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Books from "../Book/Books";
import Sidebar from "./Sidebar";

const BooksContainer = (props) => {
  const [genero, setGenero] = useState([]);

  console.log(genero);
  

  return (
    <Container className="py-2">
      <Row>
        <Col md={9}>
          <Books genero={genero} />
        </Col>
        <Col md={3} className="px-3">
          <Sidebar setGenero={setGenero} />
        </Col>
      </Row>
    </Container>
  );
};

export default BooksContainer;
