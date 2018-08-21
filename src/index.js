import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import logo from './logo.svg'
import data from './apiExample/API.json'
import Playlist from './playList/components/playlist'

render(<Playlist data={data} />, document.getElementById('root'));
registerServiceWorker();
