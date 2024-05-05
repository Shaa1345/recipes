import "../styles/Main.css";
import Title from "../components/Title"
import AddBookBut from "../components/AddBookButton"
import React from 'react'

function Main() {
  return (
    <div>
        <div class = 'Add_Buttons'>
            <div id = "Add_Book">
                <AddBookBut/>
            </div>
        </div>
        <div id = 'Title'>
        <Title text_color = "#767B8B" color = "#BCF9F6" text = "Recipe Books" border_color= "#196C4E"/> 
        </div>
    </div>
  )
}

export default Main
