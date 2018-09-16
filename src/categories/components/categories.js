import React from 'react'
import Category from './category'
import './categories.css'
function Categories(props) {
  const {categories} = props
  return (
    <div className="categories">
      {
        categories.map(category =>{
          return <Category {...category} key={category.id}/>
        })
      }
    </div>
  )
}

export default Categories