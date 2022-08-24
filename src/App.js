import "./App.css";
import { Route } from 'react-router-dom';
import "remixicon/fonts/remixicon.css";
import Student from "./pages/Student";
import Librarian from "./pages/Librarian";
import Login from "./pages/Login";

function App() {
  return (
    <div>
      <Route path="/student">
        <Student/>
      </Route>
      <Route path="/librarian">
        <Librarian/>
      </Route>
      <Route path="/login">
        <Login/>
      </Route>
    </div>
  );
}

export default App;
