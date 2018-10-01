import React from 'react'
import {render} from 'react-dom'
import Home from '../pages/containers/home'
// import data from '../schemas'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from '../reducers'
import {Map as map} from 'immutable'

// const initialState = {
//   data:{
//     entities: data.entities,
//     categories: data.result.categories,
//     search: []
//   },
//   modal:{
//     visibility: false,
//     mediaId: null
//   }
// }

const store = createStore(
  reducer,
  map(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

console.log(store.getState())

const $home = document.getElementById('home-container')
render(
  <Provider store={store}>
    <Home/>
  </Provider>
, $home)