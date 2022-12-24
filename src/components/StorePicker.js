//* Need to import react on this page as well,  otherwise it'll throw an error that StorePicker is not defined.
import React from 'react'

import { getFunName } from '../helpers' // we are importing getFunName from helpers.js file
// import React, { Fragment } from 'react'

// create a class in 'react'
class StorePicker extends React.Component {
  myInput = React.createRef()
  goToStore = (event) => {
    // 1. Stop the form from submitting
    event.preventDefault()
    // 2. get the text from that input
    const storeName = this.myInput.current.value
    // 3. Change the page to /store/whatever they entered
    this.props.history.push(`/store/${storeName}`)
  }
  render() {
    // return <p>Hello!!!</p>
    return (
      // we put parenthesis so that we could write code on seperate lines.
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        {/* <button onClick={this.handleClick}>Click me!</button> */}
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store →</button>
      </form> //* This is called JSX. means that we use html inside of our react.
    )
  }
}

//* Also, at the end of our work we need to export it
export default StorePicker // this is how we export the class
