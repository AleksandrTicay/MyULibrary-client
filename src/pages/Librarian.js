import { ThemeProvider } from "react-bootstrap";
import BooksContainer from "../components/Layout/BooksContainer";
import HeaderContainer from "../components/Layout/HeaderContainer";
import Logo from "../components/UI/Logo";



const Student = () => { 

  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      <HeaderContainer >
        <Logo/>
      </HeaderContainer>      
      
    </ThemeProvider>
  );
};

export default Student;
