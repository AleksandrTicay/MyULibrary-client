import Container from "react-bootstrap/Container";
import { useEffect, useState } from "react";
import {map} from "lodash";
import { fetchingGenre } from "../lib/api";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Books from "../Book/Books";
import Sidebar from "./Sidebar";

const BooksContainer = (props) => {

  const [books, setBooks] = useState([]);

  function fetchGenresHandler(id) {
    fetchingGenre(id).then(response => {
      const transformedBook = response.data.map(bookData => {
        return {
          id: bookData.id,
          title: bookData.title,
          amoount: bookData.amount,
          genres: bookData.genres,
          authors: bookData.authors
        }
      });
      setBooks(transformedBook);
     })
  }

  console.log(books);
  

  return (
    <Container className="py-2">
      <Row>
        <Col md={9}>
          <Books/>
        </Col>
        <Col md={3} className="px-3">
          <Sidebar  onHandler={fetchGenresHandler} />
        </Col>
      </Row>
    </Container>
  );
};

export default BooksContainer;
