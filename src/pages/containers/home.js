import React, {Component} from 'react'
import HomeLayout from '../components/home-layout'
import Categories from '../../categories/components/categories'
import RelatedLayout from '../components/related-layout'
import ModalContainer from '../../widgets/containers/modal-container'
import Modal from '../../widgets/components/modal'
import HandleError from '../../error/containers/handle-error'
import VideoPlayer from '../../player/containers/video-container'
import {connect} from 'react-redux'
import {List as list} from 'immutable'
class Home extends Component {

  handleOpenModal = media =>{
    this.setState({
      modalVisible: true,
      media
    })
  }
  handleCloseModal = (ev) =>{
    this.setState({
      modalVisible: false
    })
  }
  render () {
    return (
      <HandleError errorMessage="Rendering Error">
        <HomeLayout>
          <RelatedLayout/>
          <Categories 
          categories={this.props.categories}
          handleOpenModal={this.handleOpenModal}
          search={this.props.search}
          />
          {
            this.props.modal.get('visibility') &&
            <ModalContainer>
              <Modal handleClick={this.handleCloseModal}>
                <h1>Hey !</h1>
                <VideoPlayer
                  autoPlay
                  id={this.props.modal.get('mediaId')}
                />
              </Modal>
            </ModalContainer>
          }
        </HomeLayout>
      </HandleError>
    )
  }
  }
function mapStateToProps(state, props) {
  const categories = state.get('data').get('categories').map(categoryId =>{
    return state.get('data').get('entities').get('categories').get(categoryId)
  })
  
  let searchresults = list();
  const search = state.get('data').get('search');
  console.log('Search', search)
  if(search){
    const mediaList =  state.get('data').get('entities').get('media')
    searchresults = mediaList.filter(item => {
        return `${item.get('title')} ${item.get('author')}`.toLowerCase().includes(search.toLowerCase())
      }).toList()
  }
  return {
    categories,
    search : searchresults,
    modal: state.get('modal')
  }
}
export default connect(mapStateToProps)(Home)