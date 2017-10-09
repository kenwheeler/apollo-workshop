import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';

import './Modal.css';

class Modal extends Component {
  render() {
    const { onClose, data: { loading, movie } } = this.props;
    return (
      <div className="Modal">
        <div className="Modal-content">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="Modal-details">
              <div>
                <img
                  src={movie.poster.uri}
                  alt={movie.title}
                  className="Modal-image"
                />
              </div>
              <div className="Modal-info">
                <h2 className="Modal-title">{movie.title}</h2>
                <p>
                  <strong>Released:</strong> {movie.releaseDate}
                </p>
                <p>
                  <strong>Directed By:</strong> {movie.director}
                </p>
                <p className="Modal-description">{movie.description}</p>
                <p>
                  <i>{movie.genres.join(', ')}</i>
                </p>
              </div>
            </div>
          )}
          <button onClick={onClose} className="Modal-close" type="button">
            Close
          </button>
        </div>
      </div>
    );
  }
}

const movieQuery = gql`
  query Query($id: String) {
    movie(id: $id) {
      id
      title
      description
      director
      releaseDate
      genres
      poster {
        uri
      }
    }
  }
`;

export default graphql(movieQuery, {
  options: props => ({
    variables: {
      id: props.movieId,
    },
  }),
})(Modal);
