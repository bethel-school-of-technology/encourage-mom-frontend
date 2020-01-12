import React from 'react';
import { Link } from 'react-router-dom';
/* Below originally had: <section class>, but dev tools flagged it asking for: <section className> instead so I changed it and the error cleared.*/
const Landing = () => {
  return (
    <section className='landing'>
      <h2>
        Her children arise up, and call her blessed; her husband also, and he
        praiseth her.{' '}
      </h2>
      <p>Proverbs 31:28 KJV</p>
    </section>
  );
};

export default Landing;
