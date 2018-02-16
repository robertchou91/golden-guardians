import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import Player from './Player/Player';
import classes from './Team.css';

class Team extends Component {
  state = {
    players: [
      { playername: 'Lourlo',
        realname: 'Samson Jackson',
        portrait: 'imgs/Lourlo.png'
      },
      { playername: 'Contractz', 
        realname: 'Juan Arturo Garcia',
        portrait: 'imgs/Contractz.png'
      },
      { playername: 'Hai', 
        realname: 'Hai Du Lam',
        portrait: 'imgs/Hai.png'
      },
      { playername: 'Deftly', 
        realname: 'Matthew Chen',
        portrait: 'imgs/Deftly.png'
      },
      { playername: 'Matt',
        realname: 'Matthew Elento',
        portrait: 'imgs/Matt.png'
      }
    ]
    
  }
  
  render () {
    return (
      <Aux>
        <body>
          <div className={classes.Banner}>
            <img src="imgs/teambanner.png" alt="Banner" />
          </div>
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