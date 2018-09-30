import React from 'react'
import Category from './category'
import './categories.css'
import Search from '../../widgets/containers/search-container'
function Categories(props) {
  const {categories} = props
  return (
    <div className="categories">
    <Search/>
      {
        categories.map(category =>{
          return <Category
                  {...category} 
                  key={category.id}
                  handleOpenModal={props.handleOpenModal}
                  />
        })
      }
    </div>
  )
}

export default Categories