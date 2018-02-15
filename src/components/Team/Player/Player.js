import React from 'react';
import Aux from '../../../hoc/Aux/Aux';
import classes from './Player.css';

const player = (props) => {
  return (
    <Aux>
      <div className={classes.Info}>
        <p>{props.playerName}</p>
        <p>{props.realName}</p>
        <img src={props.playerPortrait} alt="Portrait" />
      </div>
    </Aux>
  );
};

export default player;