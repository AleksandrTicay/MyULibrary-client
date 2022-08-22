import { ThemeProvider } from "react-bootstrap";
import BooksContainer from "../components/Layout/BooksContainer";
import Header from "../components/Layout/Header";


const Student = () => { 

  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      <Header />      
      <BooksContainer  />
    </ThemeProvider>
  );
};

export default Student;
