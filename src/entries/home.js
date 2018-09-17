import React from 'react'
import {render} from 'react-dom'

import Home from '../pages/containers/home'

import data from '../api.json'
// console.log('Hola mundo! 🚀')

// render(
//   que renderear, dondeRenderear
// )
const $home = document.getElementById('home-container')
render(
  <div>
    <Home data={data}/>
  </div>
, $home)