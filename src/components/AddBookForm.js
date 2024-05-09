import React from "react";
import "../styles/AddBookForm.css";

function AddBookForm({ onClose }) {
  return (
    <div className="AddBookForm">
      <div className="CloseBar">
        <button id="CloseBut" onClick={onClose}>
          X
        </button>
      </div>
      <div className = "BookFormContent">
        <label htmlFor="BookName">
            Book Name
        </label>
        <input
          type="text"
          id="BookName"
          placeholder="Enter text here..."
        ></input>
      </div>
    </div>
  );
}

export default AddBookForm;
