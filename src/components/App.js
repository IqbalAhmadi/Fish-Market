import React from 'react'
import Header from './Header'
import Order from './Order'
import Inventory from './Inventory'
import sampleFishes from '../sample-fishes'
import Fish from './Fish'
import { object } from 'prop-types'
class App extends React.Component {
  // creating state property
  state = {
    fishes: {},
    order: {},
  }
  addFish = (fish) => {
    //TODO: In order to update state, we need to use their existing set state API. Otherwise it's not going to work
    // Steps to take to update a state
    // 1. Take a copy of existing state. It's because of it is called mutation where you don't reach directly into an object
    const fishes = { ...this.state.fishes }

    // 2. Add our new fish to that fishes variable
    fishes[`fish${Date.now()}`] = fish

    // 3. Set the new fishes object to state
    this.setState({ fishes: fishes })
    console.log('Adding a fish')
  }
  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes })
  }
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="fishes">{object.keys(this.state.fishes)}</ul>
        </div>
        <Order />
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    )
  }
}

export default App
