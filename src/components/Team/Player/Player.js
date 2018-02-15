import React from 'react';
import Aux from '../../../hoc/Aux/Aux';

const player = (props) => {
  return (
    <Aux>
      <p>{props.playerName}</p>
      <p>{props.realName}</p>
      <img alt="Portrait" />
    </Aux>
  );
};

export default player;