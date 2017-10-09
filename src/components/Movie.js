import React, { Component } from 'react';

import './Movie.css';

export default class Movie extends Component {
  handleClick = () => {
    this.props.onClick(this.props.id);
  };
  render() {
    const { title, poster } = this.props;
    return (
      <li className="Movie" onClick={this.handleClick}>
        <img className="Movie-poster" src={poster.uri} alt={title} />
      </li>
    );
  }
}
