import React from "react"
import "../styles/DemoRecipeBox.css"

function DemoRecipeBox({onClose}){
    return (
        <div className="DemoRecipeBox">
          <div className="CloseBoxBar">
            <button id="CloseBoxBut" onClick={onClose}>
              X
            </button>
          </div>
          <div className = "RecipeBoxContent">
            RECIPE
          </div>
        </div>
      );
}

export default DemoRecipeBox;