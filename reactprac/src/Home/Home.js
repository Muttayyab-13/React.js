import React from "react";
import { Link } from "react-router-dom";

const Home=()=>{
    return(
        <>
        
       <Link to="/Login"><h1>Click to go to the Login Page</h1></Link>
       <Link to=""><h1>Click to go to All Books  Page</h1></Link>
       <Link to="/BookList"><h1>Click to go to Your Books</h1></Link> 
        </>
    )
}
export default Home;