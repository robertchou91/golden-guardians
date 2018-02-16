import React from 'react';
import classes from './New.css';

const news = (props) => {
  return (
    <div className={classes.News}>
      <div className={classes.New}>
        <a href={props.link}><img src={props.newsImage} alt="News" /></a>
      </div>
    </div>
  );
};

export default news;