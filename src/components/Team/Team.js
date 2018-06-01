import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import Player from './Player/Player';
import PlayerDesktop from './PlayerDesktop/PlayerDesktop';
import classes from './Team.css';

class Team extends Component {
  state = {
    players: [
      { playername: 'Lourlo',
        realname: 'Samson Jackson',
        playerrealname: 'Samson "Lourlo" Jackson',
        portrait: '../imgs/Lourlo.png',
        playerbio: 'Competed with Team Liquid in the 2017 North American League of Legends Championship Series. Made his League of Legends Championship Series debut in the 2016 North American League of Legends Championship Series Spring Split when he joined Team Liquid on short notice, replacing longtime veteran Diego “Quas” Ruiz...  Competed with two other rookies, helping bring his team to a fourth place finish for his first split.',
        playertwitter: 'https://twitter.com/lourlo',
        playertwitch: 'https://www.twitch.tv/lourlo'

      },
      { playername: 'Contractz', 
        realname: 'Juan Arturo Garcia',
        playerrealname: 'Juan Arturo "Contractz" Garcia',
        portrait: '../imgs/Contractz.png',
        playerbio: 'Youngest member of Golden Guardians. Named Rookie of the Split for the 2017 North American League of Legends Championship Series Spring Split. Played his rookie season with Cloud9 in the 2017 North American League of Legends Championship Series... Helped bring Cloud9 to the Finals in his very first split.',
        playertwitter: 'https://twitter.com/Contractz?lang=en',
        playertwitch: 'https://www.twitch.tv/contractz'
      },
      { playername: 'Hai', 
        realname: 'Hai Du Lam',
        playerrealname: 'Hai Du "Hai" Lam',
        portrait: '../imgs/Hai.png',
        playerbio: 'Quintessential leader in League of Legends and one of the most decorated players in North America. Appeared in League of Legends World Championship three times... Two-time Worlds quarterfinalist. Two-time winner of the North American League of Legends Championship Series.',
        playertwitter: 'https://twitter.com/Hai',
        playertwitch: 'https://www.twitch.tv/simplyhai'
      },
      { playername: 'Deftly', 
        realname: 'Matthew Chen',
        playerrealname: 'Matthew "Deftly" Chen',
        portrait: '../imgs/Deftly.png',
        playerbio: 'Will make his North American League of Legends Championship Series debut with the Golden Guardians this season. Played with eUnited in the 2016 North America Challenger Series (second-highest professional League of Legends series)... Consistent powerhouse on his former teams, topping the statistical charts in virtually every category.',
        playertwitter: 'https://twitter.com/deftlylol?lang=en',
        playertwitch: 'https://www.twitch.tv/loldeftly'
      },
      { playername: 'Matt',
        realname: 'Matthew Elento',
        playerrealname: 'Matthew "Matt" Elento',
        portrait: '../imgs/Matt.png',
        playerbio: 'Competed in the 2017 North American League of Legends Championship Series with Team Liquid. Started 2016 with Team Liquid Academy, helping the team remain undefeated... Joined Team Liquid when all academy members were available as active substitutes.',
        playertwitter: 'https://twitter.com/ggs_matt?lang=en',
        playertwitch: 'https://www.twitch.tv/matlife_na'
      }
    ]
    
  }
  
  render () {
    return (
      <Aux>
        <div className={classes.Team}>
          <div className={classes.Banner}>
            <img src="../imgs/teambanner.png" alt="Banner" />
          </div>
          <div className={classes.Players}>
            {this.state.players.map(player => {
              return <Player 
                playerName={player.playername}
                realName={player.realname}
                playerPortrait={player.portrait} />
            })}
          </div>
        </div>
        <div className={classes.TeamDesktop}>
          <div className={classes.BannerDesktop}>
            <h1>2018 League of Legend Roster</h1> 
          </div>
          <div className={classes.PlayersDesktop}>
            {this.state.players.map(player => {
              return <PlayerDesktop 
                playerName={player.playername}
                realName={player.realname}
                playerrealName={player.playerrealname}
                playerPortrait={player.portrait}
                playerBio={player.playerbio}
                playerTwitter={player.playertwitter}
                playerTwitch={player.playertwitch} />
            })}
          </div>
        </div>
      </Aux>
    );
  }
} 

export default Team;