import React from 'react';
import logo from './logo.svg';
import './App.css';
import { response } from 'express';

class App extends React.Component {
  movieSearch() {
    let inputElement = document.querySelector("#movieInput");

    let inputValue = inputElement.value;

    // protects us from searching for nothing
    if(inputValue.length === 0) {
      inputValue = "~~";
    }

    fetch("http://localhost:80/movies/title/" + inputValue)
    .then((response) => {return response.json(); })
    .then((processed) => {
      console.log(processed);
    });
  }
  render() {
    return (
      <div>
        <input type="text" id="movieInput" onKeyUp={this.movieSearch} />
      </div>
    );
  }
}

export default App;
