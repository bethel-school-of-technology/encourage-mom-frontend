
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


// import React, { Component } from "react";

// class Encouragement extends Component {
//   render() {
//     return (
//       <div className="carousel-container">
//         <div id="myCarousel" className="carousel slide" data-ride="carousel">
//           <ol className="carousel-indicators">
//             <li
//               data-target="#myCarousel"
//               data-slide-to="0"
//               className="active"
//             ></li>
//             <li data-target="#myCarousel" data-slide-to="1"></li>
//             <li data-target="#myCarousel" data-slide-to="2"></li>
//           </ol>
//         </div>

//         <div className="carousel-inner">
//           <div className="item active">
//             <img
//               src={require("../img/mom3.jpg")}
//               alt="Cam"
//               //style={{ width: "100%" }}
//             />
//             <div className="carousel-caption"></div>
//           </div>
//         </div>

//         <div className="item">
//           <img
//             src={require("../img/mom1.jpg")}
//             alt="Chicago"
//             //style={{ width: "100%" }}
//           />
//           <div className="carousel-caption">
//             <br />
//           </div>
//         </div>

//         <div className="item">
//           <img
//             src={require("../img/mom2.jpg")}
//             alt="New York"
//             //style={{ width: "100%" }}
//           />
//           <div className="carousel-caption"></div>
//         </div>

//         <a
//           className="left carousel-control"
//           href="#myCarousel"
//           data-slide="prev"
//         >
//           <span className="glyphicon glyphicon-chevron-left"></span>
//           <span className="sr-only">Previous</span>
//         </a>
//         <a
//           className="right carousel-control"
//           href="#myCarousel"
//           data-slide="next"
//         >
//           <span className="glyphicon glyphicon-chevron-right"></span>
//           <span className="sr-only">Next</span>
//         </a>
//       </div>
//     );
//   }
// }

// export default Encouragement;