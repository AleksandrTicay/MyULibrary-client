import { useState } from "react";
import { ThemeProvider } from "react-bootstrap";
import BooksContainer from "../components/Layout/BooksContainer";
import FilterBooksContainer from "../components/Layout/FilterBooksContainer";
import Header from "../components/Layout/Header";


const Student = (props) => { 

  const [search, setSearch] = useState();
  const [filter, setFilter ] = useState();
  const {setRefresh} = props;

  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      <Header setRefresh={setRefresh} setSearch={setSearch} setFilter={setFilter}/>           
      {search ? <FilterBooksContainer setSearch={setSearch} search={search} filter={filter}/>: <BooksContainer  />}
    </ThemeProvider>
  );
};

export default Student;
