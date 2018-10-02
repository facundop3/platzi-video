import React from 'react'
const {PureComponent} = React
import './media.css'
import PropTypes from 'prop-types'

class Media extends PureComponent {
  handleClick = () =>{
    this.props.openModal(this.props.id)
  }
  render(){
    const {title, cover, author} = this.props
    return (
      <div 
        className="Media" 
        onClick={this.handleClick}
      >
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