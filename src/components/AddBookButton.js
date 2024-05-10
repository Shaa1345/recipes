import React from "react";
import "../styles/AddBookButton.css";

function AddBookButton({togglePopup}) {

  return (
    <div>
      <button onClick={togglePopup} className="AddBookButton">
        + Book
      </button>
    </div>
  );
}

export default AddBookButton;
