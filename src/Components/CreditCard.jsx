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

  const hiddenNumber = '•••• •••• ••••' + ' ' + number.toString().slice(12);
  console.log(hiddenNumber);

  return (
    <div
      className="creditCard"
      style={{ color: color, backgroundColor: bgColor }}
    >
      <div className="creditCardDisplay">
        {' '}
        <div>
          <h2>
            {type === 'Visa' ? (
              <img className="image" src="./img/visa.png" alt="Visa Image" />
            ) : (
              <img
                className="image"
                src="./img/master-card.svg"
                alt="MasterCard Image"
              />
            )}
          </h2>
        </div>
        <div>
          {/* <div className="creditcardnumber"> */}
          <h2>{hiddenNumber}</h2>
          {/* <h2>{number.toString().slice(12)}</h2> */}
          {/* </div>
        <div> */}
          <h4 className="expirationBank">
            Expires {expirationMonth <= 9 ? twoDigitMonth : expirationMonth}/
            {expirationYear.toString().slice(2)}
          </h4>
          <h4 className="expirationBank">{bank}</h4>
          {/* </div>
        <div> */}
          <h4>{owner}</h4>
          {/* </div>
      </div> */}
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
