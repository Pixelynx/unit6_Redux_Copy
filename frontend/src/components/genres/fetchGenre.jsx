import React, { Component } from 'react';
import axios from 'axios';
import * as util from '../../utils/apiCalls.js';

class Genres extends Component {
  state = {
    genres: []
  }

  componentDidMount = () => {
    this.fetchGenres()
  }

  fetchGenres = () => {
    axios.get('/movies/byGenre')
    .then(res => {
      console.log(res)
    })
  }

  render() {
    console.log('hello')
    return(
      <div>hello</div>
    )
  }
}

export default Genres;
