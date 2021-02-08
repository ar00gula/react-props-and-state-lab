import React from 'react'

class Pet extends React.Component {
  constructor() {
    super();
    this.state = {
      isAdopted: false
    }
  }
  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.sex/*'♀' OR '♂' */}
            {this.props.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.age}</p>
            <p>Weight: {this.props.weight}</p>
          </div>
        </div>
        <div className="extra content">
          <button className="ui disabled button">Already adopted</button>
          <button className="ui primary button" onClick={ () => this.props.onAdoptPet(this.props.id)}>Adopt pet</button>
        </div>
      </div>
    )
  }
}

export default Pet
