import { Fragment } from "react";
import SearchBar from "../UI/SearchBar";
import Genres from "../Book/Genres";

const Sidebar = () => {
    return ( 
        <Fragment>
            <SearchBar/>
            <Genres/>
        </Fragment>        
     );
}
 
export default Sidebar;