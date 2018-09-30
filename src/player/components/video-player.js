import React from 'react'
import './video-player.css'

const VideoPlayer = props => (
  <div 
    className="VideoPlayer"
    ref={props.setRef}
    >
    <h1>{props.children}</h1>
  </div>
)

export default VideoPlayer