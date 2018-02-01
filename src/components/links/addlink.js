import React, { Component } from 'react';

class AddLink extends Component {
  state = {}

  inputHandler = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitHandler = (e) => {
    const {addLink} = this.props
    const {title, url} = this.state
    addLink(title, url)
  }

  render(){
    console.log(this.state)
    return(<div>
      <label> title
        <input type="text" name="title" onChange={this.inputHandler} />
      </label>
      <label> url
        <input type="text" name="url" onChange={this.inputHandler} />
      </label>
      <input type="submit" onClick={this.submitHandler}/>
    </div>)
  }
}

export default AddLink
