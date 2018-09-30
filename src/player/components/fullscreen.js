import React from 'react'
import './fullscreen.css'
import FullScreenIcon from '../../icons/components/full-screen'

const FullScreen = props => (
  <div 
    className="FullScreen"
    onClick={props.handleFullScreenClick}
    >
    <FullScreenIcon
      color="green"
      size={25}
     />
  </div>
)

export default FullScreen