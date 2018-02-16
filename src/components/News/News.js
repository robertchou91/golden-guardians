import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import classes from './News.css';
import New from './New/New';
import teamLogo from '../../assets/images/Logo.png';

class News extends Component {
  render() {
    return (
      <Aux>
        <div className={classes.Header}>
          <img src={teamLogo} alt="Logo" />
          <h1>Golden Guardians</h1>
        </div>
        <div className={classes.Body}>
          <h2>Recent News</h2>
          <div>
            <New />
            <New />
            <New />
          </div>
        </div>
      </Aux>
    );
  }
} 

export default News;