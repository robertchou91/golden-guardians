import React from 'react';
import classes from './Player.css';

const player = (props) => {
  return (
    <div className={classes.Info}>
      <div className={classes.Info_portrait}>
        <img src={props.playerPortrait} alt="Portrait" />
      </div>
      <div className={classes.Info_playerinformation}>
        <h1>{props.playerName}</h1>
        <h3>{props.realName}</h3>
        <a href={props.playerTwitter} className={classes.Twitter}><img src="imgs/Twitter.png" alt="Twitter" /></a>
        <a href={props.playerTwitch} className={classes.Twitch}><img src="imgs/Twitch.png" alt="Twitch" /></a>
      </div>
    </div>
  );
};

export default player;