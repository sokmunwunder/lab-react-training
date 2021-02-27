import React from 'react';

const IdCard = (props) => {
  const { lastName, firstName, gender, height, birth, picture } = props;

  return (
    <div className="idcard">
      <div className="idcarddetails">
        <h3>Last name: {lastName}</h3>
        <h3>First name: {firstName}</h3>
        <h3>Gender: {gender}</h3>
        <h3>Height: {`${height / 100}m`}</h3>
        <h3>Birthdate: {birth.toDateString()}</h3>
      </div>
      <div className="idcardimage">
        {' '}
        <img src={picture} alt="" />
      </div>
    </div>
  );
};

export default IdCard;
