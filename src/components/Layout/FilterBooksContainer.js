import { useEffect, useState } from "react";
import { Fragment } from "react";
import Row from "react-bootstrap/Row";
import { map } from "lodash";
import React from "react";
import Book from "../Book/Book";
import { Button } from "react-bootstrap";
import { fetchingBooks } from "../lib/api";
import { Container } from "react-bootstrap";

const FilterBooksContainer = (props) => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState();
  const { search, filter,setSearch } = props;

  useEffect(() => {
    fetchingBooks(filter, search).then((response) => {
      setError(response.msg);
      setBooks(response);
    });
  }, [filter, search]);

  function onRedirectHandler() {
    setSearch('');
  }

  return (
    <Fragment>
      <Container className="pt-4">
        <p className="fw-bolder h4">
          <strong> Filter Results</strong>
        </p>
        <Row>
          {map(books.data, (book, index) => (
            <Book key={index} books={book} />
          ))}
          {error && <div>{error}</div>}
        </Row>
        <div className="text-end">
          <Button onClick={onRedirectHandler}>regresar</Button>
        </div>
      </Container>
    </Fragment>
  );
};

export default FilterBooksContainer;
