import React from 'react'
import Media from '../components/media'
import { connect } from 'react-redux'

class MediaContainer extends React.Component {
  state = {

  }
  render(){
    return <Media {...this.props.data.toJS()}/>

    
  }
}
function mapStateToProps (state, props){
  return {
    data: state.get('data').get('entities').get('media').get(props.id)
  }
}
export default connect(mapStateToProps)(MediaContainer)