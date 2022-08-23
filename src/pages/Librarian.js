import { ThemeProvider } from "react-bootstrap";
import HeaderLibrarian from "../components/Layout/HeaderLibrarian";
import LibrarianContainer from "../components/Layout/LibrarianContainer";


const Student = () => {
  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      <HeaderLibrarian/>
      <LibrarianContainer/>
      
    </ThemeProvider>
  );
};

export default Student;
