import React from 'react'
import './error.css'
function Error (props) {
  const {errorMessage} = props
  return (
    <div className="div-container">
      <div className="Error-box">
        <h3>{errorMessage}💔</h3>
        <hr/>
        <p>Sorry , something went worng while rendering website's components.
          Sometimes it happen, just saty strong !
          We'll resolve this briefly.
          May be this site don't works but here you have a potatoe:
        </p>
        <h1>🥔</h1>
      </div>
    </div>
  )
}
export default Error