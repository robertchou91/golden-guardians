import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import Player from './Player/Player';

class Team extends Component {
  state = {
    players: [
      { playername: 'Lourlo',
        realname: 'Samson Jackson',
        portrait: 'Lourlo'
      },
      { playername: 'Contractz', 
        realname: 'Juan Arturo Garcia'
      },
      { playername: 'Hai', 
        realname: 'Hai Du Lam'
      },
      { playername: 'Deftly', 
        realname: 'Matthew Chen'
      },
      { playername: 'Matt',
        realname: 'Matthew Elento' 
      }
    ]
    
  }
  
  render () {
    return (
      <Aux>
        <header>
          This is a header2.
          <img src="imgs/Matt.png" alt="testing" />
        </header>
        <body>
          <div>
            {this.state.players.map(player => {
              return <Player 
                playerName={player.playername}
                realName={player.realname}
                playerPortrait={player.portrait} />
            })}
          </div>
        </body>
      </Aux>
    );
  }
} 

export default Team;