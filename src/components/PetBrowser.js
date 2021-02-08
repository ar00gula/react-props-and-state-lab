import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  petProperties = () => {
  }

  
  render() {
    // for(let i=0; i < this.props.pets; i++) {
      return <div className="ui cards"><Pet pet={'ugh'} /></div>
    // }
  }
}

export default PetBrowser
