import React from 'react'
import Media from './media'

function Playlist (props) {
    const playlist = props.data.categories[0].playlist
    console.log(playlist)
    return (
      <div>
        Functional component 💁🏻‍♂️
        {
          playlist.map(item => <Media {...item} key={item.id}/>)
        }
        <Media/>
      </div>
    )
}

export default Playlist