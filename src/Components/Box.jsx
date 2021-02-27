import React from 'react';

const BoxColor = (props) => {
  const { r, g, b } = props;

  const averageLightness =
    [r, g, b].reduce((total, value) => {
      return total + value;
    }, 0) / 3;

  const textColor = averageLightness > 255 / 2 ? 'black' : 'white';

  const divStyle = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
    padding: 20,
    color: textColor,
  };

  return (
    <div style={divStyle}>
      <span>
        rgb({r},{g},{b})
      </span>
    </div>
  );
};

export default BoxColor;
