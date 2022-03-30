import React, { Component } from 'react'
import '../styling/Form.css'

class Form extends Component {
  constructor(props) {
    super(props)

    /*  TODO - set initial state for link name and URL */
    this.state = {
      linkName: "",
      URL: ""
    }
  }

  handleChange = (event) => {
    /* TODO - Logic for changing state based on form changes */

  }

  onFormSubmit = (event) => {
    // to prevent page reload on form submit
    event.preventDefault()
    //console.log(event)

    console.log(event.target[0].value)
    console.log(event.target[1].value)

    this.setState({
      linkName: event.target[0].value,
      URL: event.target[1].value
    })


    /*The following acts a call back, notifiying LinkContainer.
      in which you can pass data back to LinkContainer via the parameter.
    */
    
    const formInfo = {
      name: event.target[0].value,
      URL: event.target[1].value
    }

    console.log(formInfo)

    this.props.sendHandler(formInfo)
    
    /*
    TODO - Logic for calling props to handle submission and setting state changes
    */
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        {/* TODO - Logic for returning a form element with labels and inputs for link name and URL */}
        <label> 
          Name <br/>
        </label>
        <input type="text" name="name" />
        <br/>
        <label>URL </label> <br/>
        <input type="text" name="url" /> <br/>
        {/* <button onClick={this.onFormSubmit}>Submit</button> */}
        <input type="submit" id="submit-button"/>

      </form>
    )
  }
}

export default Form
