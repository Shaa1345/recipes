import React from "react";
import "../styles/AddRecipeBoxButton.css";

function RecipeBoxDemoButton({togglePopup}) {

    return (
      <div>
        <button onClick={togglePopup} className="AddBookButton">
          + Box
        </button>
      </div>
    );
  }

export default RecipeBoxDemoButton;