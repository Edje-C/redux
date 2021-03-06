import React, {Component} from 'react'
import AddComment from './addcomment'

class Comments extends Component{
  state = { comment: '' }

  inputHandler = (e) => {
    this.setState({comment: e.target.value})
  }

  clickHandler = (e) => {
    const {id, addComment} = this.props
    console.log('done', id, this.state.comment)
    addComment(id, this.state.comment)
    this.setState({comment: ''})
  }

  render(){
    const {state, id, getAllComments, getOneCommment, addComment} = this.props
    console.log('state', this.state)
    return(
      <AddComment
        state={state}
        id={id}
        inputHandler={this.inputHandler}
        clickHandler={this.clickHandler}
        value={this.state.comment}
      />
    )
  }
}

export default Comments
