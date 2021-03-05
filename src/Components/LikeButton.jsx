import React from 'react';

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.text = 'Likes';

    this.textOneLike = 'Like';
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  //   paintColor = (backgroundcolor) => {
  //     this.backgroundcolor = () => {
  //       for (let i = 0; i <= this.backgroundcolor.length, i++; ) {
  //         if (i <= this.backgroundcolor.length) {
  //           return (this.backgroundcolor = this.backgroundcolor[i].slice(1, -1));
  //         }
  //       }
  //     };
  //   };

  render() {
    const color = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
    return (
      <div>
        <button
          className="Like"
          onClick={this.incrementCount}
          style={{ backgroundColor: color[this.state.count % color.length] }}
        >
          <span>{this.state.count}</span>{' '}
          {this.state.count === 1 ? this.textOneLike : this.text}
        </button>
      </div>
    );
  }
}

//console.log(paintColor(this.backgroundcolor));
export default LikeButton;
