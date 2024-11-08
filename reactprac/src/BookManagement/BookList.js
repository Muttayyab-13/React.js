import React, { useState } from "react";
import Book from "./Book";
import "../BookManagement/BookList.css";

const BookList = () => {
  const [page, setPage] = useState("Sign");

  const handleChange = (event) => {};
  return (
    <>
      <label className={page}>Enter Your UserName</label>
      <input type="text" onChange={handleChange} />

      {/* <Book BookName="Maybe Now" author="Myself" >
    <button>Click to Read</button>
    </Book>

    <Book BookName="May I Die" author="Him" >
    <button>Click to Read</button>
    </Book>

    <Book BookName="Maybe I leave" author="Her" >
    <button>Click to Read</button>
    </Book> */}
    </>
  );
};

export default BookList;
