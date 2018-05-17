import React from 'react';
import classes from './PlayerDesktop.css';

const player = (props) => {
  return (
    <div className={classes.Info}>
      <div className={classes.Info_portrait}>
        <img src={props.playerPortrait} alt="Portrait" />
      </div>
      <div className={classes.Info_playerinformation}>
        <h1>{props.playerrealName}</h1>
        <h2>{props.playerBio}</h2>
        <div className={classes.Info_social}>
          <a href={props.playerTwitter}><img src="imgs/Twitter.png" alt="Twitter" /></a>
        </div>
      </div>
    </div>
  );
};

export default player;