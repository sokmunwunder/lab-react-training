import React from 'react';
import Rating from './Rating';

const DriverCard = (props) => {
  //   const { name, rating, img, car: model, car: licensePlate } = props;

  const {
    name,
    rating,
    img,
    car,
    car: { model },
    car: { licensePlate },
  } = props;

  return (
    <div>
      <div className="drivercarddetails">
        <div className="cardimgname">
          <img className="drivercardimage" src={img} alt="Driver Image" />
          <h3>{name}</h3>
        </div>

        <Rating>{rating}</Rating>

        <div className="carddetails">
          {/* <h3>{rating}</h3> */}

          <h3>{car.model}</h3>
          <h3>{car.licensePlate}</h3>
        </div>
      </div>
    </div>
  );
};

// const CarInfo = (props) => {
//   const { car, children } = props;
//   return (
//     <div>
//       <h3>{car.children}</h3>
//     </div>
//   );
//};

export default DriverCard;
