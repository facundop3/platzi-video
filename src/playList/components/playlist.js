import React from 'react'
import Media from '../containers/media'
import './playlist.css'

function Playlist(props) {
  const { playlist } = props
  console.log(playlist)
  return (
    <div>
      <div className="media-list">
      {
        playlist.map(mediaId => {
          return <Media 
                  key={mediaId}
                  id={mediaId}
                  openModal={props.handleOpenModal}
                  />
        })
        
      }
      </div>
    </div>
  )

}

export default Playlist