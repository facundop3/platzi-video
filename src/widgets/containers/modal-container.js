import React from 'react'
const {Component} = React
import {createPortal} from 'react-dom'

class ModalContainer extends Component {
  render(){
    // return createPortal(queRender, dondeRender)
    return createPortal(
      this.props.children,
      document.getElementById('modal-container'))
  }
}

export default ModalContainer