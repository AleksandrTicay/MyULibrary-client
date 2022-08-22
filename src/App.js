import "./App.css";
import { Route } from 'react-router-dom';
import "remixicon/fonts/remixicon.css";
import Student from "./pages/Student";

function App() {
  return (
    <div>
      <Route path="/student">
        <Student/>
      </Route>
    </div>
  );
}

export default App;
