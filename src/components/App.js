import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  changeType = event => {
    this.setState({
      filters: { ...this.state.filters,
        type: event.target.value
      }
    })
  };

  petsClick = () => {
    if (this.state.filters.type === 'all') {
      fetch(`/api/pets`)
      .then(results => results.json())
      .then(result => {
        this.setState({pets: result})
      })
    } else {
      fetch(`/api/pets?type=${this.state.filters.type}`)
      .then(results => results.json())
      .then(result => {
        this.setState({pets: result})
      })
    }
  }

  adoptPet = id => {
    for(let i=0; i < this.state.pets; i++) {
      if (this.state.pets[i].id === id) {
        this.stateState({
            isAdopted: true
          })
        }
      }
    }


  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.changeType} onFindPetsClick={this.petsClick}/>
              {console.log(this.state.pets[0])}
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.adoptPet} pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
