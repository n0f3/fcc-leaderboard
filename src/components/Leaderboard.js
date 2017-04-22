import React from 'react';
import User from './User';

class Leaderboard extends React.Component {
  constructor() {
    super();
    this.state = {
      displayRecent: true,
      topThirtyDays: [],
      topAllTime: []
    }
    this.toggleRecent = this.toggleRecent.bind(this);
    this.toggleAll = this.toggleAll.bind(this);
    this.fetchTopScorersData = this.fetchTopScorersData.bind(this);
  }
  componentDidMount() {
    this.fetchTopScorersData();
  }
  fetchTopScorersData() {
    Promise.all(
      ['https://fcctop100.herokuapp.com/api/fccusers/top/recent','https://fcctop100.herokuapp.com/api/fccusers/top/alltime'].map(url => fetch(url)))
      .then((responses) => Promise.all(responses.map(res => res.json())))
      .then(responsesJson => {
        const topRecent = responsesJson[0].sort((user1, user2) => user2.recent - user1.recent);
        const topAll = responsesJson[1].sort((user1, user2) => user2.alltime - user1.alltime);
        this.setState({
          topThirtyDays: topRecent,
          topAllTime: topAll
        });
      }
    );
  }
  toggleRecent(event) {
    event.preventDefault();
    if(!this.state.displayRecent) {
      this.setState({
        displayRecent: true
      });
    }
  }
  toggleAll(event) {
    event.preventDefault();
    if(this.state.displayRecent) {
      this.setState({
        displayRecent: false
      });
    }
  }
  render() {
    console.log('render');
    const toDisplay = this.state.displayRecent ? this.state.topThirtyDays :
      this.state.topAllTime;
    return (
      <table className='table table-bordered table-sm table-responsive'>
        <thead>
          <tr>
            <th className='text-center'>#</th>
            <th className='text-center'>Camper Name</th>
            <th className='text-center'>
              <a href='#' onClick={this.toggleRecent}>
                Points in past 30 days&nbsp;
                {
                  this.state.displayRecent &&
                    <span className='glyphicon glyphicon-chevron-down glyphicon-align-right' aria-hidden='true'></span>
                }
              </a>

            </th>
            <th className='text-center'>
              <a href='#' onClick={this.toggleAll}>
                All time points&nbsp;
                {
                  !this.state.displayRecent &&
                    <span className='glyphicon glyphicon-chevron-down glyphicon-align-right' aria-hidden='true'></span>
                }
              </a>
            </th>
          </tr>
        </thead>
        <tbody>
          {
            toDisplay.map((user, index) => {
              return <User
                key={user.username}
                position={index}
                username={user.username}
                profileImage={user.img}
                allTimeScore={user.alltime}
                recentScore={user.recent}
              />
            })
          }
        </tbody>
      </table>
    );
  }
}

export default Leaderboard;
