import { useEffect, useState } from "react";
import { Fragment } from "react";
import Row from "react-bootstrap/Row";
import { map } from "lodash";
import React from "react";
import Book from "../Book/Book";
import { fetchingApi, fetchingGenre } from "../lib/api";

const FilterBooksContainer = (props) => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState();
  const { genero } = props;

  useEffect(() => {
    if (genero > 0) {
      fetchingGenre(genero).then((response) => {
        setError(response.msg);
        setBooks(response);
      });
    } else {
      fetchingApi().then((response) => {
        setBooks(response);
      });

    }
    
  }, [genero]);  

  return (
    <Fragment>
      <p className="fw-bolder h4">
        <strong> Filter Results</strong>
      </p>
      <Row>        
        {map(books.data, (book, index) => (                    
          <Book key={index} books={book} />
        ))}
        {error && <div>{error}</div>}
      </Row>
    </Fragment>
  );
};

export default FilterBooksContainer;
