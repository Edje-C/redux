import React, {Component} from 'react'

class AddComment extends Component {
  render(){
    const {state, id, inputHandler, clickHandler, value} = this.props
    const comments = state.allComments.filter(comment => comment.memeid === id)
    return(
      <div>
        <textarea cols='40'rows='10' onChange={inputHandler} value={value} />
        <input type="submit" onClick={clickHandler} />
        {comments.map( v => <p>{v.comment}</p> )}
      </div>
    )
  }
}

export default AddComment
