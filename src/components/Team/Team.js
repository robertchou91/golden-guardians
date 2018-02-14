import React from 'react';
import Aux from '../../hoc/Aux/Aux';
import Player from './Player/Player';

const team = (props) => {
  return (
    <Aux>
      <header>
        This is a header2.
      </header>
      <body>
        <div>
          <Player />
          <Player />
          <Player />
          <Player />
          <Player />
        </div>
      </body>
    </Aux>
  );
};

export default team;