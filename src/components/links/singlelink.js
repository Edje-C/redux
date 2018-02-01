import React, { Component } from 'react';
import Comments from '../comments/comments'

class SingleLink extends Component {
  componentDidMount () {
    this.props.getSingleLink(this.props.id);
  }

  render () {
    const { state, commentState, getAllComments, getOneCommment, addComment} = this.props;
    return (
      <div>
        <h3>{state.oneMeme.title}</h3>
        <a href={state.oneMeme.url} target="_blank">
          <p>
            Go to Site
          </p>
        </a>
        <Comments
          state={commentState}
          id={this.props.id}
          getAllComments={getAllComments}
          getOneCommment={getOneCommment}
          addComment={addComment}
        />
      </div>
    );
  }
}

export default SingleLink;
