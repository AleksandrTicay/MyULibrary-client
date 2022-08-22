import { Fragment } from "react";
import { useEffect, useState } from "react";
import {map} from "lodash";
import { fetchingGenresApi } from "../lib/api";

const Genres = (props) => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetchingGenresApi().then((response) => {
      setGenres(response);
    });
  }, []);

  
  return (
    <Fragment>
      <p className="h4 fw-bolder">Genre</p>
      <div className="pt-2">
        <ul className="ps-0">
        {map(genres.data,(genre,index) => (
          <li key={index} className="list-group-item ">{genre.name}</li>
          ) )}    
          
        </ul>
      </div>
    </Fragment>
  );
};

export default Genres;
