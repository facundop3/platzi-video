import React from 'react'
import Media from './media'
import Play from './../../icons/components/play'
import FullScreen from './../../icons/components/full-screen'
import Volume from './../../icons/components/volume'
import Pause from './../../icons/components/pause'

function Playlist (props) {
    const playlist = props.data.categories[0].playlist
    console.log(playlist)
    return (
      <div>
        Functional component 💁🏻‍♂️
        <Play
          size={60}
          color="red"/>
        <FullScreen
          size={80}
          color="blue"/>
        <Volume
        size={100}
        color="green"/>
        <Pause 
        size={30}
        color= "yellow"/>
        {
          playlist.map(item => <Media {...item} key={item.id}/>)
        }
      </div>
    )
}

export default Playlist