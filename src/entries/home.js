import React from 'react'
import {render} from 'react-dom'

import Home from '../pages/containers/home'

import data from '../api.json'
// console.log('Hola mundo! 🚀')

// render(
//   que renderear, dondeRenderear
// )
const $container = document.getElementById('app')
render(
  <div>
    <Home data={data}/>
  </div>
, $container)