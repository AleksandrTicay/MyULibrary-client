import { ThemeProvider } from "react-bootstrap";
import BooksContainer from "../components/Layout/BooksContainer";
import NewBooksContainer from "../components/Layout/NewBooksContainer";
import Header from "../components/Layout/Header";

const Student = () => {
  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      <Header />
      <NewBooksContainer />
      <BooksContainer />
    </ThemeProvider>
  );
};

export default Student;
