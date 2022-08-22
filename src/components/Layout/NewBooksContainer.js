import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NewBooks from "../Book/NewBooks";
import { map } from "lodash";
import { fetchingApi } from "../lib/api";

const NewBooksContainer = () => {
  const [books, setBooks] = useState([]);  

  useEffect(() => {
    fetchingApi().then((response) => {
      setBooks(response);
    });
  }, []);

  return (
    <Container className="py-5">
      <p className="h4 fw-bolder">New Releases</p>
      <Row className="pt-4">
        {map(books.data, (book, index) => (            
          <Col key={index} md={4}>
            <NewBooks  books={book} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default NewBooksContainer;
