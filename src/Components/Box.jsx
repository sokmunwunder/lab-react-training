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
    width: '70%',
    marginLeft: 50,
    border: '1px solid rgb(0,0,0)',
    marginTop: 20,
    marginBottom: 20,
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
