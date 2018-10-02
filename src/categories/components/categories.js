import React from 'react'
import Category from './category'
import './categories.css'
import Search from '../../widgets/containers/search-container'
import Media from '../../playList/components/media'
function Categories(props) {
  const {categories, search} = props
  return (
    <div className="categories">
    <Search/>
      {
        search.map((item, index) =>(
        <Media
          {...item.toJS()}
          key={index}
        />))
      }
      {
        categories.map(category =>{
          return <Category
                  {...category.toJS()} 
                  key={category.get('id')}
                  handleOpenModal={props.handleOpenModal}
                  />
        })
      }
    </div>
  )
}

export default Categories