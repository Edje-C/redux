import React, { Component } from 'react';
import { connect } from 'react-redux';
import Links from '../components/comments/comments'

class CommentsContainer extends Component {
  const { dispatch } = this.props

  getAllComments = ( ) => {
    return dispatch({type: 'GET_ALL'})
  }

  getOneCommment = (id) => {
      dispatch({type: 'GET_ONE', id})
  }

  addComment = (memeid, comment) => {
    return dispatch({type: 'ADD_COMMENT', memeid, comment})
  }
}

export default connect(state => state)(CommentsContainer)
