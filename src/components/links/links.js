import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import LinkList from './linklist';
import SingleLink from './singlelink';
import AddLink from './addlink';

const Links = ({ linkState, commentState, getAllLinks, getSingleLink, addLink, getAllComments, getOneCommment, addComment}) => {

  const renderLinkList = () => {
    return (
      <LinkList
        state={linkState}
        getAllLinks={getAllLinks}
      />
    )
  }

  const renderSingleLink = (props) => {
    const { id } = props.match.params;
    return (
      <SingleLink
        state={linkState}
        commentState={commentState}
        allComments={commentState.allComments}
        getSingleLink={getSingleLink}
        id={id}
        getAllComments={getAllLinks}
        getOneCommment={getOneCommment}
        addComment={addComment}
      />
    )
  }

  const renderAddLink = (props) => {
    return (
      <AddLink addLink={addLink}/>
    )
  }

  return (
    <div>
      <Switch>
        <Route exact path='/links' render={renderLinkList} />
        <Route path='/links/new' component={renderAddLink} />
        <Route path='/links/:id' render={renderSingleLink} />
      </Switch>
    </div>
  )
}

export default Links;
