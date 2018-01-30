import React, { Component } from 'react';
import './App.css';
import News from './News/News';
import Team from './Team/Team';
import Partners from './Partners/Partners';

class App extends Component {
  render() {
    return (
      <div>
        <News />
        <Team />
        <Partners />
      </div>
    );
  }
}

export default App;
