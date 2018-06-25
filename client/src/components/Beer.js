import React from 'react';
import { connect } from 'react-redux';


const Beer = ({ beer = {} })=> (
  
  <Container>
    <Header>
      {beer.name}
    </Header>

  </Container>
  )

  const mapStatetoProps = (state, props) => {
    return { beer: state.beers.find( b=> b.id === props.match.params.id )}
  }


export default connect(mapStatetoProps)(Beer);