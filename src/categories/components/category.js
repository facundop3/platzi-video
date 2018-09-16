import React from 'react'
import Playlist from '../../playList/components/playlist'
import './category.css'
function Category (props) {
  const { playlist,
          title,
          description
        } = props
  return (
    <div>
      <p className="category-subtitle">{description}</p>
      <h3 className="category-title">{title}</h3>
      <Playlist playlist={playlist}/>

    </div>
  )
}

export default Category