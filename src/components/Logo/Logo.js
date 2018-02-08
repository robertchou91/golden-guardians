import React from 'react';

import classes from './Logo.css';
import teamLogo from '../../assets/images/Logo.png';

const logo = (props) => (
  <div className={classes.Logo}>
    <img src={teamLogo} alt="Logo" />
  </div>
);

export default logo;