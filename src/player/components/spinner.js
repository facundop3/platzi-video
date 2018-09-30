import React from 'react'
import './spinner.css'
const Spinner = porps =>{
  if(!porps.active) return null
  return (<div>
            <h1 className="Spinner">Spinner</h1>
        </div>) 
}
  

export default Spinner