import React from 'react'
const {Component} = React
import HomeLayout from '../components/home-layout'
import Categories from '../../categories/components/categories'
import RelatedLayout from '../components/related-layout'
import ModalContainer from '../../widgets/containers/modal-container'
import Modal from '../../widgets/components/modal'
class Home extends Component {
  render () {
    return (
      <HomeLayout>
        <RelatedLayout/>
        <Categories categories={this.props.data.categories}/>
        <ModalContainer>
          <Modal>
            <h1>Hey !</h1>
          </Modal>
        </ModalContainer>
      </HomeLayout>
    )
  }
}

export default Home