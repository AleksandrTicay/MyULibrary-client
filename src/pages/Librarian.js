import { Container, ThemeProvider } from "react-bootstrap";
import HeaderLibrarian from "../components/Layout/HeaderLibrarian";
import MenuLibrarian from "../components/Layout/MenuLibrarian";

const Librarian = (props) => {

  const {setRefresh} = props;
  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      <HeaderLibrarian  setRefresh={setRefresh}/>
      <Container className="py-5">
        <MenuLibrarian />
      </Container>
    </ThemeProvider>
  );
};

export default Librarian;
