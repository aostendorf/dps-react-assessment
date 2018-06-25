import React from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';


class Breweries extends React.Component {
  state = { breweries: [], beers: [] }

  componentDidMount() {
    axios.get('http://localhost:3001/api/all_breweries')
     .then( res => this.setState({ breweries: res.data }) )
    }

    render() {
      const {breweries} = this.state;
      return (
        <ul>
          <h1> Breweries </h1>
           { breweries.map( brewery =>
            <li key={brewery.id}>
              <Link to={`/breweries/${brewery.id}`}>{brewery.name}</Link>
            </li>
          )
        }
        </ul>
      )
    }
  }
  
  export default Breweries;