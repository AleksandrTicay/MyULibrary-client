import { useEffect, useState } from "react";
import { Fragment } from "react";
import Row from "react-bootstrap/Row";
import {map} from "lodash";
import React from "react";
import Book from "./Book";
import {fetchingApi} from "../lib/api";

const Books = (props) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
   fetchingApi()
   .then(response => {
    setBooks(response);
   })
  }, []);
 
console.log(books);

  return (
    <Fragment>
      <p className="fw-bolder h4">
        <strong> Browse</strong>
      </p>
      <Row>   
      {map(books.data,(book,index) => (        
          <Book key={index} books={book}/>
        ) )}       
          
      </Row>
    </Fragment>
  );
};

export default Books;
