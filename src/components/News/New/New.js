import React from 'react';
import classes from './New.css';

const news = (props) => {
  return (
    <div className={classes.News}>
      <a href={props.link}><img src={props.newsImage} alt="News" /></a>
    </div>
  );
};

export default news;