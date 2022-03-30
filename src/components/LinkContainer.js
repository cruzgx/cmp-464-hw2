import { toHaveDisplayValue } from '@testing-library/jest-dom/dist/matchers'
import React from 'react'
import Form from './Form'
import Table from './Table'
// import Table from './Table';
// import Form from './Form';

class LinkContainer extends React.Component {
  constructor(props) {
    super(props)
    /* TODO - Create state object for storing favLinks */

    //should be an array of LinkObjs? (name: x, url: y)
    this.state = {
      favLinks: []
    }
  }

  handleRemove = (index) => {
    /* TODO - Create logic for setting the state to filter array and remove favLink at index */
    //TODO: Validate index.

    let newArr = this.state.favLinks
    newArr.splice(index, 1)

    this.setState({
      favLinks: newArr
    })
  }

  //console.log(this.state);

  handleSubmit = (favLink) => {
    /*
    TODO - Create logic to setState and add new favLink to favLinks array in state
    */
   console.log(favLink)

   let myArr = this.state.favLinks
    myArr.push(favLink)

    this.setState({

      // faveLinks: this.state.favLinks.concat(favLink)
      favLinks: myArr
    })  

    console.log(this.state.favLinks)

  }

  formShouldChange = (formInfo) => {
    // Gets notified by <Form> {this is a callback func.}
    //alert("Link Container Notified")

    this.handleSubmit(formInfo)
  }

  // componentDidUpdate() {
  //   console.log(this.state);
  // }

  //will be used by table.js
  removeLink = (index) => {
    //some preventDefault here to stop page refresh?
    this.handleRemove(index)
  }


  render() {
    //console.log(this.state.favLinks)
    return (
      <div className="container">
        <h1>My Favorite Links</h1>
        <p>Add a new url with a name and link to the table.</p>
        {/*TODO - Add Table Component */}
        {/* Try passing state as a prop for <Table>, <Table datum={this.state.favLinks} */}
        <Table info={this.state.favLinks} deleteFunc={this.removeLink} />

        <br />

        <h3>Add New</h3>
        {/*TODO - Add Form Component */}
        <Form sendHandler={this.formShouldChange}/>
      </div>
    )
  }
}

export default LinkContainer
