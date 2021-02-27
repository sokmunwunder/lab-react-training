import React from 'react';

const Greetings = (props) => {
  const { lang, children } = props;

  return (
    <div className="greetings">
      <h3> {lang.children}</h3>
      {children}
    </div>
  );
};

export default Greetings;
