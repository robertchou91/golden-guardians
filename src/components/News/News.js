import React from 'react';
import Aux from '../../hoc/Aux/Aux';
import classes from './News.css';
import teamLogo from '../../assets/images/Logo.png';

const news = (props) => {
  return (
    <Aux>
      <div className={classes.Header}>
        <img src={teamLogo} alt="Logo" />
        <h1>Golden Guardians</h1>
      </div>
      <div className={classes.Body}>
        <p>Recent News</p>
      </div>
    </Aux>
  );
};

export default news;