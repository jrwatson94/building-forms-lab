// Add BandInput component
import React, { Component } from 'react'
import {connect} from 'react-redux'

class BandInput extends Component {
  state = {
    userInput: ""
  }
  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  submitHandler = event => {
    event.preventDefault()
    this.props.addBand(this.state.userInput)
    this.setState({
      userInput: ""
    })
  }
  render() {
    return(
      <div>
        <form onSubmit={this.submitHandler}>
          <label>Add Band Name:</label>
          <input type="text" name="userInput" onChange={this.changeHandler} value={this.state.userInput}></input>
        </form>
      </div>
    )
  }
}

const mdp = dispatch => {
  return {
    addBand: formData => dispatch({type: "ADD_BAND", payload: formData})
  }
}


export default connect(null, mdp)(BandInput)
