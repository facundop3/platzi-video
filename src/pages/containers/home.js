import React, {Component} from 'react'
import HomeLayout from '../components/home-layout'
import Categories from '../../categories/components/categories'
import RelatedLayout from '../components/related-layout'
import ModalContainer from '../../widgets/containers/modal-container'
import Modal from '../../widgets/components/modal'
import HandleError from '../../error/containers/handle-error'
import VideoPlayer from '../../player/containers/video-container'
class Home extends Component {
  state= {
    modalVisible: false
  }
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
          categories={this.props.data.categories}
          handleOpenModal={this.handleOpenModal}
          />
          {
            this.state.modalVisible &&
            <ModalContainer>
              <Modal handleClick={this.handleCloseModal}>
                <h1>Hey !</h1>
                <VideoPlayer
                  autoPlay
                  src={this.state.media.src}
                  title={this.state.media.title}
                />
              </Modal>
            </ModalContainer>
          }
        </HomeLayout>
      </HandleError>
    )
  }
  }

export default Home