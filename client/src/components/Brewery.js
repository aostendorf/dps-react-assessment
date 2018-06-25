import React from 'react';
import axios from 'axios';
import Beers from './Beers';
import { Header } from 'semantic-ui-react';

const styles = {
  text: {
    Color: 'white',
  },
}


class Brewery extends React.Component {
  state = { beer: {} }

  componentDidMount() {
    axios.get('http://localhost:3001/api/beer/:name')
    .then( res => this.setState({ beer: res.data}) )
  }
render() {
  return (
    <div>
      <Header style={styles.text}>
        Beers
      </Header>
      <Beers id={this.props.match.params.id} />
    </div>
  )
}
}
export default Brewery;