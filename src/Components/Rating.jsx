import React from 'react';

const Ratings = (props) => {
  const { children } = props;

  return <div>{'★'.repeat(Math.round(children)).padEnd(5, '☆')}</div>;
};

export default Ratings;
