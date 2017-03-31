import React from 'react';

class Leaderboard extends React.Component {
  constructor() {
    super();
    this.state = {
      pointsDescending: true
    }
    this.sortPoints = this.sortPoints.bind(this);
  }
  sortPoints() {

  }
  render() {
    return (
      <table className='table'>
        <thead>
          <tr>
            <th>#</th>
            <th>Camper Name</th>
            <th><a href='#' onClick={this.sortPoints}></a></th>
          </tr>
        </thead>
      </table>
    );
  }

}

export default Leaderboard;
