import React from 'react';

class Dice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
  }

  tooglePicture = () => {
    this.setState({
      clicked: !this.state.clicked,
    });
  };

  render() {
    //const randomPictureIndex = Math.floor(Math.random()*{this.state.pictures.length}-1*1))+1;

    // const randomBetween = (min, max) => {
    //     return Math.floor(Math.random() * (max - min * 1)) + min;
    //   };

    const emptyPicture = ['./img/dice-empty.png'];
    const picturesWithImages = [
      './img/dice1.png',
      './img/dice2.png',
      './img/dice3.png',
      './img/dice4.png',
      './img/dice5.png',
      './img/dice6.png',
    ];
    const randomPictureIndex = Math.round(
      Math.random() * picturesWithImages.length
    );
    const randomPicture = picturesWithImages[randomPictureIndex];

    // const randomPictureSwitch = function () {
    //   setTimeout(function () {
    //     randomPicture;
    //     setTimeout(function () {
    //       emptyPicture;
    //     }, 10);
    //   }, 1000);
    // };

    return (
      <div>
        <img
          src={this.state.clicked ? randomPicture : emptyPicture}
          onClick={this.tooglePicture}
        />

        {/* <img className="Dice" src={emptyPicture[0]} alt="" /> */}
        {/* <img src={randomPicture} alt="" />
        <img src={} alt=""/> */}

        {/* {setTimeout(function () {
          <img className="Dice" src={this.state.pictures[0]} />;
        }, 0)} */}
      </div>
    );
  }
}

// const Dice = (props) => {
//   const { picture, children } = props;
//   const RandomPicture= [];

//   return (

//     <div className="dice">
//       <div className="diceimage">
//         {' '}
//         <img src={picture} alt="" />
//       </div>
//     </div>
//   );
// };

export default Dice;
