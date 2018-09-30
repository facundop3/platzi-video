import React,{Component} from 'react'
import VideoPlayer from '../components/video-player'
import Video from '../components/video'
import Title from '../components/title'
import PlayPause from '../components/play-pause'
import Timer from '../components/timer'
import Controls from '../components/video-player-controls'
import {formatedTime} from '../../utils/time-formatting'
import ProgresBar from '../components/progress-bar'
import Spinner from '../components/spinner'
import Volume from '../components/volume'
import FullScreen from '../components/fullscreen'
class VideoPlayerContainer extends Component {
  state ={
    pause: true,
    duration: 0,
    currentTime: 0,
  }
  togglePlay = ()=>{
    this.setState({
      pause: !this.state.pause,
      loading: false
    })
  }
  componentDidMount(){
    this.setState({
      pause: !this.props.autoPlay
    })
  }

  handleLoadedMetadata = event =>{
    this.video = event.target
    this.setState({
      duration: this.video.duration,
      formateDuration: formatedTime(this.video.duration)
    })
  }

  handleTimeUpdate = event => {
    this.setState({
      currentTime: Math.round(this.video.currentTime),
      formatedCurrentTime: formatedTime( Math.round(this.video.currentTime))
    })
  }
  handleProgressBarChange = event => {
    this.video.currentTime = event.target.value
  }

  handleSeeking = event =>{
    this.setState({
      loading: true
    })
  }
  handleSeeked = event =>{
    this.setState({
      loading: false
    })
  }
  handleVolumeChange = event => {
    this.setState({ 
      volume : event.target.value
    })
    this.video.volume = event.target.value
  }
  handleMuteClick = event =>{
    if(this.video.volume === 0) {
      this.video.volume = 0.5
    } else {
      this.video.volume = 0 
    }
  }
  handleFullScreenClick = event => {
    if(!document.webkitIsFullScreen){
      this.videoPlayer.webkitRequestFullscreen()
    } else {
      document.webkitExitFullscreen()
    }
  }
  setRef = element => {
    this.videoPlayer = element
  }
  render(){
    return (
      <VideoPlayer
        setRef={this.setRef}
      >
        <Title 
        title={this.props.title}
        />
        <Controls>
          <PlayPause
            pause={this.state.pause}
            handleClick = {this.togglePlay}
          />
          <Timer 
            duration={this.state.formateDuration}
            currentTime={this.state.formatedCurrentTime}
          />
          <ProgresBar 
            duration={this.state.duration}
            currentTime={this.state.currentTime}
            handleProgressBarChange={this.handleProgressBarChange}
          />
          <Volume
            handleMuteClick = {this.handleMuteClick}
            handleVolumeChange={this.handleVolumeChange}
          />
          <FullScreen handleFullScreenClick={this.handleFullScreenClick} />
        </Controls>
        <Spinner
         active={this.state.loading}
         />
        <Video
          src={this.props.src}
          autoPlay={this.props.autoPlay}
          pause={this.state.pause}
          handleLoadedMetadata={this.handleLoadedMetadata}
          handleTimeUpdate={this.handleTimeUpdate}
          handleSeeking={this.handleSeeking}
          handleSeeked={this.handleSeeked}
        />
      </VideoPlayer>
    )
  }
}
export default VideoPlayerContainer