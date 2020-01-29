// import react, {Component} from 'react';
// import {Carousel, Caption} from 'react-bootstrap';


//  function WeeklyEncouragement() {
//   return (
//     <div>
//       <Carousel>
//   <Carousel.Item>
//     <img
//       className="d-block w-100"
//       src="holder.js/800x400?text=First slide&bg=373940"
//       alt="First slide"
//     />
//     <Carousel.Caption>
//       <h3>First slide label</h3>
//       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
//   <Carousel.Item>
//     <img
//       className="d-block w-100"
//       src="holder.js/800x400?text=Second slide&bg=282c34"
//       alt="Third slide"
//     />

//     <Carousel.Caption>
//       <h3>Second slide label</h3>
//       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
//   <Carousel.Item>
//     <img
//       className="d-block w-100"
//       src="holder.js/800x400?text=Third slide&bg=20232a"
//       alt="Third slide"
//     />

//     <Carousel.Caption>
//       <h3>Third slide label</h3>
//       <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
// </Carousel>
//     </div>
//   )
// }

// export default WeeklyEncouragement;



// // import React, { Component } from 'react';

// // class Encouragement extends Component {
// //   render() {
// //     return <div>Weekly Encouragement</div>;
// //   }
// // }

// // export default Encouragement;


// import React, { Component } from 'react';
// import makeCarousel from 'react-reveal/makeCarousel';
// // we'll need the Slide component for sliding animations
// // but you can use any other effect
// import Slide from 'react-reveal/Slide';
// // we'll use styled components for this tutorial
// // but you can use any other styling options ( like plain old css )
// import styled, { css } from 'styled-components';

// const width = '300px', height='150px';
// const Container = styled.div`
//   border: 1px solid red;
//   position: relative;
//   overflow: hidden;
//   width: ${width};
// `;
// const Children  = styled.div`
//   width: ${width};
//   position: relative;
//   height: ${height};
// `;
// const Arrow = styled.div`
//   text-shadow: 1px 1px 1px #fff;
//   z-index: 100;
//   line-height: ${height};
//   text-align: center;
//   position: absolute;
//   top: 0;
//   width: 10%;
//   font-size: 3em;
//   cursor: pointer;
//   user-select: none;
//   ${props => props.right ? css`left: 90%;` : css`left: 0%;`}
// `;
// const Dot = styled.span`
//   font-size: 1.5em;
//   cursor: pointer;
//   text-shadow: 1px 1px 1px #fff;
//   user-select: none;
// `;
// const Dots = styled.span`
//   text-align: center;
//   width: ${width};
//   z-index: 100;
// `;
// const CarouselUI = ({ position, total, handleClick, children }) => (
//   <Container>
//     <Children>
//       {children}
//       <Arrow onClick={handleClick} data-position={position - 1}>{'<'}</Arrow>
//       <Arrow right onClick={handleClick} data-position={position + 1}>{'>'}</Arrow>
//     </Children>
//     <Dots>
//       {Array(...Array(total)).map( (val, index) =>
//         <Dot key={index} onClick={handleClick} data-position={index}>
//           {index === position ? '● ' : '○ ' }
//         </Dot>
//       )}
//     </Dots>
//   </Container>
// );
// const Carousel = makeCarousel(CarouselUI);

// render (
//   <Carousel>
//     <Slide right>
//       <div>
//         <h1>Slide 1</h1>
//         <p>Slide Description</p>
//       </div>
//     </Slide>
//     <Slide right>
//       <div>
//         <h1>Slide 2</h1>
//         <p>Slide Description</p>
//       </div>
//     </Slide>
//     <Slide right>
//       <div>
//         <h1>Slide 3</h1>
//         <p>Slide Description</p>
//       </div>
//     </Slide>
//   </Carousel>
// );