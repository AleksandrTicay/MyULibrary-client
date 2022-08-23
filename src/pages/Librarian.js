import { Container, ThemeProvider } from "react-bootstrap";
import HeaderLibrarian from "../components/Layout/HeaderLibrarian";
import MenuLibrarian from "../components/Layout/MenuLibrarian";

const Student = () => {
  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      <HeaderLibrarian />
      <Container className="py-5">
        <MenuLibrarian />
      </Container>
    </ThemeProvider>
  );
};

export default Student;
