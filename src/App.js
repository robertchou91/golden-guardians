import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import News from './components/News/News';
import Team from './components/Team/Team';
import Partners from './components/Partners/Partners';
import Aux from './hoc/Aux/Aux';
import Layout from './hoc/Layout/Layout';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/team" component={Team} />
            <Route path="/"  exact component={News} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
