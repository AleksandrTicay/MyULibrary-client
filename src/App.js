import Header from "./components/Layout/Header";
import "./App.css";
import { ThemeProvider } from "react-bootstrap";
import "remixicon/fonts/remixicon.css";
import BooksContainer from "./components/Layout/BooksContainer";
import NewBooksContainer from "./components/Layout/NewBooksContainer";

function App() {
  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      <Header />
      <NewBooksContainer/>
      <BooksContainer />
    </ThemeProvider>
  );
}

export default App;
