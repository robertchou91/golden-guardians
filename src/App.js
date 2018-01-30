import React, { Component } from 'react';
import News from './components/News/News';
import Team from './components/Team/Team';
import Partners from './components/Partners/Partners';
import Aux from './hoc/Aux/Aux';
import Layout from './hoc/Layout/Layout';

class App extends Component {
  render() {
    return (
      <Aux>
        <Layout>
          <News />
          <Team />
          <Partners />
        </Layout>
      </Aux>
    );
  }
}

export default App;
