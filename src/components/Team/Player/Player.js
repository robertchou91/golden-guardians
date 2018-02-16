import React from 'react';
import classes from './Player.css';

const player = (props) => {
  return (
    <div className={classes.Info}>
      <div className={classes.Info_portrait}>
        <img src={props.playerPortrait} alt="Portrait" />
      </div>
      <div className={classes.Info_playerinformation}>
        <p>{props.playerName}</p>
        <p>{props.realName}</p>
      </div>
    </div>
  );
};

export default player;