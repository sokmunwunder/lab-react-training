import React from 'react';

class ClickablePicture extends React.Component {
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
    return (
      <div className="clickablepicture">
        <img
          src={this.state.clicked ? this.props.imgClicked : this.props.img}
          onClick={this.tooglePicture}
        />
      </div>
    );
  }
}

export default ClickablePicture;
