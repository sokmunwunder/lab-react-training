import React from 'react';

class SignupPage extends React.Component {
  state = {
    email: '',
    password: '',
    nationality: ['British', 'French', 'German'],
  };

  //   handleChange = (event) => {
  //     const value = event.target.value;
  //     this.setState({
  //       email: value,
  //     });
  //   };

  handleGenericChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value,
    });
  };

  handleSelectChange = (event) => {
    const value = event.target.value;
    this.setState({
      nationality: value,
    });
  };

  handleSubmission = (event) => {
    event.preventDefault();
    const { email, password, nationality } = this.state;
    alert(
      `The form was submitted with ${email}, ${password}, ${
        // (this.state.nationality.includes('French') && 'French') ||
        // (this.state.nationality.includes('German') && 'German')
        (nationality === 'British' && 'British') ||
        (nationality === 'French' && 'French') ||
        (nationality === 'German' && 'German')
        // (nationality[2] && 'German')
      } `
    );
  };

  render() {
    return (
      <div className="signup">
        <form onSubmit={this.handleSubmission}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="email"
            id="email"
            size="30"
            name="email"
            onChange={this.handleGenericChange}
            value={this.state.email}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="password"
            id="password"
            name="password"
            onChange={this.handleGenericChange}
            value={this.state.password}
          />
          <label htmlFor="nationality">Nationality</label>
          <select
            name="nationality"
            id="nationality"
            onChange={this.handleSelectChange}
            // value={this.state.nationality}
          >
            <option value={''}>Choose</option>
            <option
              value={this.state.nationality[0]}
              //onChange={this.handleSelectChange}
            >
              British
            </option>
            <option
              value={this.state.nationality[1]}
              //onChange={this.handleSelectChange}
            >
              French
            </option>
            <option
              value={this.state.nationality[2]}
              //onChange={this.handleSelectChange}
            >
              German
            </option>
          </select>

          <button>Sign Up</button>
        </form>
        <p>
          {
            //   (this.state.nationality[0] && 'Hello') ||
            // (this.state.nationality.includes('French') && 'Bonjour') ||
            (this.state.nationality === 'British' && 'Hello !') ||
              (this.state.nationality === 'French' && 'Bonjour !') ||
              (this.state.nationality === 'German' && 'Guten Tag !')
          }
          Your email is{' '}
          {!this.state.email ? 'to be filled in.' : this.state.email}
        </p>
      </div>
    );
  }
}

export default SignupPage;
