import React, {Component} from 'react'

class AddComment extends Component {
  render(){
    const {state, id, inputHandler, clickHandler} = this.props
    const comments = state.allComments.filter(comment => comment.memeid === id)
    return(
      <div>
        <textarea cols='40'rows='10' onChange={inputHandler}></textarea>
        <input type="submit" onClick={clickHandler}/>
        {comments.map( v => <p>{v.comment}</p> )}
      </div>
    )
  }
}

export default AddComment
