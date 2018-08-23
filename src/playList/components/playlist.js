import React from 'react'
import Media from './media'
import Play from './../../icons/components/play'

function Playlist (props) {
    const playlist = props.data.categories[0].playlist
    console.log(playlist)
    return (
      <div>
        Functional component 💁🏻‍♂️
        <Play
          size={60}
          color="red"
        />
        {
          playlist.map(item => <Media {...item} key={item.id}/>)
        }
      </div>
    )
}

export default Playlist