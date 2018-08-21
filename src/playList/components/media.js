import React, {Component} from 'react'
import './media.css'
import PropTypes from 'prop-types' 


class Media extends Component {
  state = {
    author: this.props.author
  }
  handleClick = () =>{
    console.log(this.state.author)
    this.setState({
      author: "twitter: @facup3"
    })
  }
  render () {
    return (
      <div className="Media" onClick={this.handleClick}>
        <div>
          <img
            src={this.props.cover}
            alt=""
            width={260}
            heigth={160}
          />
          <h3>{this.props.title}</h3>
          <p>{this.state.author}</p>
        </div>
      </div>
    )
  }
}
Media.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['video', 'audio']).isRequired
}
export default Media
