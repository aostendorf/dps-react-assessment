import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Beer from './Beer';

class Beers extends React.Component {
    state = { beers: [] }


  componentDidMount() {
   axios.get('/api/all_beers')
    .then( res => this.setState({ beers: res.data }) )
   }

  
  render() {
    const {beers} = this.state;
    return (
      <ul>
        <h1> Beers </h1>
         { beers.map( beer =>
          <li key={beer.id}>
            <Beer beer={beer} />
          </li>
        )
      }
      </ul>
    )
  }
}

export default Beers;