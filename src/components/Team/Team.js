import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import Player from './Player/Player';

class Team extends Component {
  state = {
    players: [
      { playername: 'Lourlo' },
      { playername: 'Contractz' },
      { playername: 'Hai' },
      { playername: 'Deftly' },
      { playername: 'Matt' }
    ]
    
  }
  
  render () {
    return (
      <Aux>
        <header>
          This is a header2.
        </header>
        <body>
          <div>
            {this.state.players.map(player => {
              return <Player 
                playerName={player.playername} />
            })}
          </div>
        </body>
      </Aux>
    );
  }
} 

export default Team;