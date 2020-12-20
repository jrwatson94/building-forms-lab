import React, { Component } from 'react'
import {connect} from 'react-redux'

class BandsContainer extends Component {
  renderBands = () => {
    return this.props.bands.map(band => <li>{band}</li>)
  }
  render() {
    return(
      <div>
        <ul>
          {this.renderBands()}
        </ul>
        
      </div>
    )
  }
}

const msp = state => {
  return {
    bands: state.bands
  }
}

export default connect(msp, null)(BandsContainer)
