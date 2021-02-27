import React from 'react';

const BoxColor = (props) => {
  const { r, g, b } = props;

  //   const rRandomBetween = (min, max) => {
  //     return Math.floor(Math.random() * (max - min * 1)) + min;
  //   };

  const divStyle = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
  };

  return (
    <div style={{ divStyle }}>
      <span>
        rgb({r},{g},{b})
      </span>
    </div>
  );
};

export default BoxColor;
