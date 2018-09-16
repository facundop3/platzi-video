import React from 'react'
import logo from '../../assets/images/logo.png'
import './related-layout.css'
function RelatedLayout(props){
  return (
    <div className="RealatedSideBar">
      <img src={logo} width={250}></img>
    </div>
  )
}

export default RelatedLayout