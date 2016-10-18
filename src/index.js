import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App.jsx'

import './styles.css'

document.addEventListener( "DOMContentLoaded", () => {
  const reactNode = document.getElementById('react-node');

  if ( reactNode ) {
    ReactDOM.render(
      <App /> , reactNode
    )
  }
});
