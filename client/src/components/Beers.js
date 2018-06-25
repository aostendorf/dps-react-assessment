import React from 'react';
import { connect } from 'react-redux';
import { getBeers } from '../actions/beers';
import { Card, Container, Header } from 'semantic-ui-react';




class Beers extends React.Component {
  state = { page: 1 }

  componentDidMount() {
      this.props.dispatch(getBeers())
    }
  
    Beers = (props) => {
      return this.props.beers.map( beer => {
      return(
        <Card>
          <Card.Content>
            <Card.Header>
            {beer.name}
            </Card.Header>
          </Card.Content>
        </Card>
        )
      })
    }
  
    render() {
      return (
        <Container>
          <Header as="h3" textAlign="center">Beers</Header>
            <div>
             {this.beers}
            </div>
          </Container>
        )
      }
    }

    const mapStateToProps = (state) => {
      return { beers: state.beers }
    }
    
    
    export default connect(mapStateToProps)(Beers);