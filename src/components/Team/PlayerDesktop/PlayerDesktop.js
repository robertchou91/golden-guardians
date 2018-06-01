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
          <a href={props.playerTwitter} className={classes.Twitter}><img src="imgs/Twitter.png" alt="Twitter" /></a>
          <a href={props.playerTwitch} className={classes.Twitch}><img src="imgs/Twitch.png" alt="Twitch" /></a>
        </div>
      </div>
    </div>
  );
};

export default player;