import React from "react";

const Book = ({ BookName, author,children }) => {
  

  return (
    <div>
      <h1>Book Name: {BookName}</h1>
      <p>Author: {author}</p>
      {children}

      

    </div>
  );
};


export default Book;