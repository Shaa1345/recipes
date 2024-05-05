import React from 'react'
import '../styles/Title.css'

function Title({text_color, color, text, border_color}) {
    const style = {
        background: color,
        color: text_color,
        border: `1px solid ${border_color}`

    }
  return (
    <div className = "Title" style = {style} >
      {text}
    </div>
  )
}

export default Title
