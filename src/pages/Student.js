import { useState } from "react";
import { ThemeProvider } from "react-bootstrap";
import BooksContainer from "../components/Layout/BooksContainer";
import FilterBooksContainer from "../components/Layout/FilterBooksContainer";
import Header from "../components/Layout/Header";


const Student = () => { 

  const [search, setSearch] = useState();
  const [filter, setFilter ] = useState();

  console.log(search);
  console.log(filter);

  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      <Header setSearch={setSearch} setFilter={setFilter}/>           
      {search ? <FilterBooksContainer setSearch={setSearch} search={search} filter={filter}/>: <BooksContainer  />}
    </ThemeProvider>
  );
};

export default Student;
