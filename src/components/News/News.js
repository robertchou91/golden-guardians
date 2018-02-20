import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import classes from './News.css';
import New from './New/New';
import teamLogo from '../../assets/images/Logo.png';

class News extends Component {
  state = {
    news: [
      { newsImage: 'imgs/Feb15News.jpg',
        newsLink: 'https://www.youtube.com/watch?v=sD6IHnoHHE8'
      },
      { newsImage: 'imgs/Feb14News.jpg',
        newsLink: 'https://www.youtube.com/watch?v=yuKxIbCFw4Q'
      },
      { newsImage: 'imgs/Dec17News.jpg',
        newsLink: 'https://www.youtube.com/watch?v=Oi8dnF9nNis'
      }
    ]
  }
  render() {
    return (
      <Aux>
        <div className={classes.Header}>
          <div className={classes.Headerlogo}>
            <img src={teamLogo} alt="Logo" />
          </div>
          <h1>Golden Guardians</h1>
        </div>
        <div className={classes.Body}>
          <h2>Recent News</h2>
          <div>
            {this.state.news.map(news => {
              return <New 
                newsImage={news.newsImage}
                link={news.newsLink} />
            })}
          </div>
        </div>
      </Aux>
    );
  }
} 

export default News;