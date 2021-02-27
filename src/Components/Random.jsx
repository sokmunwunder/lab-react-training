import React from 'react';

const Random = (props) => {
  const { min, max } = props;

  const randomBetween = (min, max) => {
    return Math.floor(Math.random() * (max - min * 1)) + min;
  };

  console.log(randomBetween(1, 100));

  return (
    <div className="random">
      <span>
        Random value between {min} and {max} => {`${randomBetween(min, max)}`}.
      </span>
    </div>
  );
};

export default Random;
