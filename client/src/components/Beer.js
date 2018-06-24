import React from 'react';
import { List, Image } from 'semantic-ui-react';
import axios from 'axios';

const Beer = (props) => {
  const { beer: {name, description }} = props;
  return (
    <div>
      <h2> {name} </h2>
      <h3> {description} </h3>
    </div>
  )
}

export default Beer;