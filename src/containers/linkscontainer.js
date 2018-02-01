import React, { Component } from 'react';
import { connect } from 'react-redux';
import Links from '../components/links/links'

class LinksContainer extends React.Component {
  getAllLinks = () => {
    const { dispatch } = this.props;
    dispatch({ type: "GET_ALL_MEMES" });
  };

  getSingleLink = (id) => {
    const { dispatch } = this.props;
    dispatch({ type: "GET_ONE_MEME", id });
  }

  addLink = (title, url) => {
    const { dispatch } = this.props;
    dispatch({ type: "ADD_MEME", title, url });
  }

  getAllComments = () => {
    const { dispatch } = this.props;
    dispatch({ type: "GET_ALL_COMMENTS" });
  };

  getSingleComment = (id) => {
    const { dispatch } = this.props;
    dispatch({ type: "GET_ONE_COMMENT", id });
  }

  addComment = (memeid, comment) => {
    const { dispatch } = this.props;
    dispatch({ type: "ADD_COMMENT", memeid, comment });
  }

  render() {
    const { links, comments } = this.props;

    return (
      <Links
        linkState={links}
        commentState={comments}
        getAllLinks={this.getAllLinks}
        getSingleLink={this.getSingleLink}
        addLink={this.addLink}
        getAllComments={this.getAllComments}
        getSingleComment={this.getSingleComment}
        addComment={this.addComment}
      />
    );
  }
}

export default connect(state => state)(LinksContainer);
