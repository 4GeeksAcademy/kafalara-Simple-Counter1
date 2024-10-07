import React from 'react';

const Home = ({ seconds }) => {
  return (
    <div className="counter">
      <div className="digit">
        <i i className="far fa-clock"></i>
      </div>
      <div className="digit">{Math.floor(seconds / 100000) % 10}</div>
      <div className="digit">{Math.floor(seconds / 10000) % 10}</div>
      <div className="digit">{Math.floor(seconds / 1000) % 10}</div>
      <div className="digit">{Math.floor(seconds / 100) % 10}</div>
      <div className="digit">{Math.floor(seconds / 10) % 10}</div>
      <div className="digit">{Math.floor(seconds % 10)}</div>
    </div>
  );
};

export default Home;
