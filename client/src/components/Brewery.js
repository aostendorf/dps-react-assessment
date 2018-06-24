import React from 'react';
import { List, Image } from 'semantic-ui-react';
import axios from 'axios';
import Beers from './Beers';

class Brewery extends React.Component {
  state = { beer: {} }

  componentDidMount() {
    axios.get('/api/beer/:name')
    .then( res => this.setState({ beer: res.data}) )
  }
render() {
  return (
    <div>
      <h1>
        Beers
      </h1>
      <Beers id={this.props.match.params.id} />
    </div>
  )
}
}
export default Brewery;