import React from 'react';
import classes from './PlayerDesktop.css';

const player = (props) => {
  return (
    <div className={classes.Info}>
      <div className={classes.Info_portrait}>
        <img src={props.playerPortrait} alt="Portrait" />
        <h1>{props.playerName}</h1>
        <h3>{props.realName}</h3>
      </div>
      <div className={classes.Info_playerinformation}>
        <h1>Testing</h1>
        <h1>{props.playerBio}</h1>
      </div>
    </div>
  );
};

export default player;