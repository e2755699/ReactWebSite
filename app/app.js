import '../lib/bootstrap/css/bootstrap.min.css'
import '../lib/bootstrap/css/bootstrap-theme.min.css'
import '../lib/bootstrap/js/bootstrap.min.js'
import '../lib/bootstrap/js/bootstrap.min.js'
import './css/react-select.css'
import './css/styles.css'

import React from 'react'
import { render } from 'react-dom'
import { Router, hashHistory} from 'react-router'

import routes from './routes'

if(module.hot) {
  module.hot.accept();
}

render((
	<Router
		routes={routes} 
		history={hashHistory}
	/>
), document.getElementById('app'));