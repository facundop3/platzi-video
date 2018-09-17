import React from 'react'
import './modal.css'
function Modal (props) {
  return(
    <div className="modal">
      this is our modal 🧙🏼‍♂️
      {props.children}
    </div>
  )
}
export default Modal