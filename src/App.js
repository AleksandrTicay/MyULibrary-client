import Header from "./components/Layout/Header";
import "./App.css";
import { ThemeProvider } from "react-bootstrap";
import BooksContainer from "./components/Layout/BooksContainer";

function App() {
  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      <main className="App-bg">
        <Header />
        <BooksContainer/>
      </main>
    </ThemeProvider>
  );
}

export default App;
