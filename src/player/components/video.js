import React from 'react'
const {Component} = React
import './video.css'
class Video extends Component {
  componentWillReceiveProps(nextProps){
    (nextProps.pause !== this.props.pause) && this.togglePlay()
  }
  togglePlay = ()=>{
    this.props.pause ? this.video.play() : this.video.pause()
  }
  setRef = elem =>{
    this.video = elem
  }
  render(){
    const {
      handleLoadedMetadata,
      handleTimeUpdate,
      handleSeeking,
      handleSeeked,
      volume
    } = this.props
    return (
      <div 
        className="Video"
      >
      <video
        autoPlay={this.props.autoPlay}
        src={this.props.src}
        ref={this.setRef}
        onLoadedMetadata={handleLoadedMetadata}
        onTimeUpdate={handleTimeUpdate}
        onSeeking={handleSeeking}
        onSeeked={handleSeeked}
        volume={volume}
      />
      </div>
    )
  }
}

export default Video