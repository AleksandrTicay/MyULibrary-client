import "./App.css";
import "remixicon/fonts/remixicon.css";
import Student from "./pages/Student";
import Librarian from "./pages/Librarian";
import Login from "./pages/Login";
import { UserContext } from "./components/utils/book-context";
import { Fragment, useEffect, useState } from "react";
import { getUser, getRole } from "./components/lib/api";

function App() {
  const [user, setUser] = useState();
  const [role, setRole] = useState();
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    setUser(getUser());
    setRole(getRole());    
    setRefresh(false);
  }, [refresh]);

  return (
    <div>
      <UserContext.Provider value={user}>
        {user ? (
          <Fragment>
            {role==='Student' ? (<Student setRefresh={setRefresh}/>): (<Librarian setRefresh={setRefresh} />)}            
          </Fragment>
        ) : (
          <Login setRefresh={setRefresh} />
        )}
      </UserContext.Provider>
    </div>
  );
}

export default App;
