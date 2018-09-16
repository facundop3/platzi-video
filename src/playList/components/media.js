import React from 'react'
const {PureComponent} = React
import './media.css'
import PropTypes from 'prop-types'

class Media extends PureComponent {
  animateCheese = ()=>{
    const $authorH1 = document.getElementById('author')
    $authorH1.animate([
       { transform: "scale(1) rotate(0)"},
       { transform: "scale(1.5) rotate(-90deg)"},
       { transform: "scale(3) rotate(360deg)"}
    ],{
      duration:1500,
      fill: 'forwards'
    } )
  }
  render(){
    const {title, cover, author} = this.props
    return (
      <div className="Media" >
        <div>
          <img
          src={cover}
          alt=""
          width={260}
          height={160}
          />
          <h3>{title}</h3>
          <p id="author">{author}</p>
        </div>
      </div>
    )
  }
}

Media.propTypes= {
  cover: PropTypes.string,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['video', 'audio']).isRequired
}
export default Media