//* import React from 'react'
import React from 'react' // OR we can do this way: import { Component } from 'react' and then on the class we can write: class StorePicker extends Component
import { render } from 'react-dom' // In this case we only need "render" from the package that's why we put it inside the curly brackets.

// Need to import our StorePicker.js here so that we don't get an error.
// import StorePicker from './components/StorePicker'
// import App from './components/App'
import Router from './components/Router'

// importing css file here
import './css/style.css'

//* Need to render (get) the class
// render(<App />, document.querySelector('#main'))
// render(<StorePicker />, document.querySelector('#main'))
render(<Router />, document.querySelector('#main'))

//TODO: At the terminal, always do 'npm start' to load the page.
