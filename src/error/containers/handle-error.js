import React from 'react'
const {Component} = React
import Error from '../components/error'
class HandleError extends Component {
  state = {
    handleError : false
  }
  componentDidCatch = (error, info) => {
    this.setState({
      handleError : true,
    })
  }
  render(){
    if(this.state.handleError) {
      return <Error errorMessage={this.props.errorMessage}/>
    }
    return this.props.children
  }
}

export default HandleError