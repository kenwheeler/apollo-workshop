import React, { Component } from 'react';

import MovieList from './components/MovieList';
import Modal from './components/Modal';

import './App.css';

class App extends Component {
  state = {
    modalOpen: false,
    selectedId: null,
  };
  handleSelected = id => {
    this.setState({
      selectedId: id,
      modalOpen: true,
    });
  };
  handleClose = () => {
    this.setState({
      selectedId: null,
      modalOpen: false,
    });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-content">
            <h1 className="App-title">KENFLIX</h1>
          </div>
        </header>
        <main className="App-main">
          <div className="App-content">
            <h2>Hot New Releases</h2>
            <MovieList onSelected={this.handleSelected} />
          </div>
        </main>
        {this.state.modalOpen && (
          <Modal movieId={this.state.selectedId} onClose={this.handleClose} />
        )}
      </div>
    );
  }
}

export default App;
