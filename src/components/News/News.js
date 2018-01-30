import React from 'react';
import Aux from '../../hoc/Aux/Aux';
import classes from './News.css';

const news = (props) => {
  return (
    <Aux>
      <div>
        <div className={classes.Header}>This is a header</div>
        <p>Recent News</p>
      </div>
    </Aux>
  );
};

export default news;