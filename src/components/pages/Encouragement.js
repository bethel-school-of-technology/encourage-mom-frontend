
import React, { Component } from 'react';
import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL;

export class Encouragement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      encouragements: []
    };
  }

  componentDidMount() {
    console.log('Test1');
    console.log(baseUrl);
    axios
      .get(`${baseUrl}/encouragements`)
      .then(res => this.setState({ encouragements: res.data }));
  }

  render() {
    return (
      <div>

        <h1 id="encouragement">Encouragement Just For You, Mama!</h1>
        <h4>A new encouragement will be added a least once a week</h4>

      <div className='encouragement'>
        {this.state.encouragements.map(encouragement => (
          <div
            className='Encouragement-Card'
            key={encouragement._id}
            width='10in'
            padding='50px'
          >
            <h1>{encouragement.title}</h1>
            <p> Written on: {encouragement.date}</p>
            <h3>{encouragement.text}</h3>
            <h4>{encouragement.reference} KJV</h4>

            <br />
          </div>
        ))}
        <br />
      </div>
      </div>
    );
  }
}

export default Encouragement;
