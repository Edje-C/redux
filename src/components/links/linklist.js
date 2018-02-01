import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import SingleLink from './singlelink';
import AddLink from './addlink';

class LinkList extends Component {
  componentDidMount() {
    this.props.getAllLinks();
  }

  render() {
    const { state } = this.props;

    const allList = state.allMemes.map((item) => {
      return (
        <Link to={`/links/${item.id}`}>
          <li id={item.id}>
            {item.title}
          </li>
        </Link>
      )
    });

    return (
      <div>
        <ul>
          {allList}
        </ul>
        <Link to="/links/new">Add link</Link>
      </div>
    )
  }
}

export default LinkList;
