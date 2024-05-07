import React from "react";
import { useState } from "react";
import BookForm from "../components/AddBookForm.js";
import "../styles/AddBookButton.css";

function AddBookButton() {
  //pop up function
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div>
      <button onClick={togglePopup} className="AddBookButton">
        + Book
      </button>
      {isPopupOpen && <BookForm />}
    </div>
  );
}

export default AddBookButton;
