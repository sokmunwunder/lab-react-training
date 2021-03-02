import React from 'react';

const imagesPath = {
  img: '',
  imgClicked: '',
};

class ClickablePicture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true,
    };
    // this.img = '';
    // this.imgClicked = '';
  }

  tooglePicture = () => {
    console.log('Toggle picture');
    this.setState({
      active: !this.state.active,
    });
  };

  getImage = () => {
    // const imagesPath = {
    //   img: '',
    //   imgClicked: '',
    // };
    return this.state.active ? 'img' : 'imgClicked';
  };

  render() {
    const imageName = this.getImage();
    return (
      <div className="clickablepicture">
        <img
          onClick={() => {
            this.setState({ active: true });
          }}
          src={imagesPath.imageName}
          alt=""
        />

        {/* <img src={imagesPath.imageName} onClick={this.tooglePicture} /> */}

        {/* <button onClick={this.togglePicture}></button>
        {(this.state.active && <img src={img} alt="first image" />) || (
          <img src={imgClicked} alt="image clicked" />
        )} */}
      </div>
    );
  }
}

// const ClickablePicture = (props) => {
//   const { img, imgClicked } = props;

//   return (
//     <div className="clickablepicture">
//       <div className="clickablepictureimage">
//         {' '}
//         <img src={img} alt="" />
//         <img src={imgClicked} alt="" />
//       </div>
//     </div>
//   );
// };

export default ClickablePicture;
