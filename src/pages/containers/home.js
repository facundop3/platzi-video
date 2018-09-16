import React from 'react'
const {Component} = React
import HomeLayout from '../components/home-layout'
import Categories from '../../categories/components/categories'
import RelatedLayout from '../components/related-layout'
class Home extends Component {
  render () {
    return (
      <HomeLayout>
        <RelatedLayout/>
        <Categories categories={this.props.data.categories}/>
      </HomeLayout>
    )
  }
}

export default Home