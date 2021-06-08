import React, { useContext, useState } from "react";
import { BookContext } from "../contexts/BookContext";

const NewBookForm = () => {
  const { dispatch } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const handelSubmit = (e) => {
    e.preventDefault();
    if (title !== "" && author !== "") {
      dispatch({ type: "ADD_BOOK", book: { title, author } });
    } else {
      alert("pless add book title and book author");
    }

    setTitle("");
    setAuthor("");
  };
  return (
    <form onSubmit={handelSubmit}>
      <input
        type="text"
        placeholder="book title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="book author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input type="submit" value="add book" />
    </form>
  );
};

export default NewBookForm;
