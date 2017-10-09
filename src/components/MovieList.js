import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';

import Movie from './Movie';
import './MovieList.css';

class MovieList extends Component {
  handleClick = id => {
    this.props.onSelected(id);
  };
  render() {
    const { loading, movies } = this.props.data;
    return loading === true ? (
      <p>Loading...</p>
    ) : (
      <ul className="MovieList">
        {movies.map(movie => (
          <Movie
            key={movie.id}
            id={movie.id}
            poster={movie.poster}
            title={movie.title}
            onClick={this.handleClick}
          />
        ))}
      </ul>
    );
  }
}

const movieQuery = gql`
  query Query {
    movies {
      id
      title
      poster {
        uri
      }
    }
  }
`;

export default graphql(movieQuery)(MovieList);
