import React from 'react'
import './timer.css'


const Timer = props =>(
  <div className="Timer">
    <p>
      <span>{props.duration}/{props.currentTime}</span>
    </p>
  </div>
)
export default Timer