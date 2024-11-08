import "./App.css";
import Home from "../src/Home/Home";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Login from "./Login/Login";
import BookList from "./BookManagement/BookList";
// import Book from "./BookManagement/Book";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/Login" Component={Login} />
          <Route path="/BookList" Component={BookList} />
          {/* <Route path="/Book" Component={Book} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
