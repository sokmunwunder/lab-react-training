import React from 'react';

const CreditCard = (props) => {
  const {
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color,
  } = props;

  const twoDigitMonth = 'O' + expirationMonth.toString();
  console.log(twoDigitMonth);
  //const twoDigitMonth = [expirationMonth.toString()].unshift(Number('0'));
  // expirationMonth <= 9 ? expirationMonth.toString().unshift('0') : '';

  return (
    <div
      className="creditCard"
      style={{ color: color, backgroundColor: bgColor }}
    >
      <div className="creditCardDisplay">
        {' '}
        <div>
          <h2>{type}</h2>
        </div>
        <div>
          <h2>{number}</h2>
        </div>
        <div>
          <h4>
            Expires {expirationMonth <= 9 ? twoDigitMonth : expirationMonth}/
            {expirationYear.toString().slice(2)}
          </h4>
          <h4>{bank}</h4>
        </div>
        <div>
          <h4>{owner}</h4>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
