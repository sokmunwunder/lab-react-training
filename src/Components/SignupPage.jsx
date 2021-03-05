import React from 'react';

class SignupPage extends React.Component {
  state = {
    email: '',
    password: '',
    nationality: ['British', 'French', 'German'],
  };

  handleChange = (event) => {
    const value = event.target.value;
    this.setState({
      email: value,
    });
  };

  handleGenericChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  handleSubmission = (event) => {
    event.preventDefault();
    const { email, password, nationality } = this.state;
    alert(
      `The form was submitted with ${email}, ${password}, ${
        (this.state.nationality[0] && 'British') ||
        (this.state.nationality[1] && 'French') ||
        (this.state.nationality[2] && 'German')
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
          <select name="nationality" id="nationality">
            <option value="">Please choose</option>
            <option value="this.state.nationality[0]">British</option>
            <option value="this.state.nationality[1]">French</option>
            <option value="this.state.nationality[2]">German</option>
          </select>

          <button>Submit</button>
        </form>
        <p>
          {(this.state.nationality[0] && 'Hello') ||
            (this.state.nationality[1] && 'Bonjour') ||
            (this.state.nationality[2] && 'Guten Tag')}
          ,your email is{' '}
          {!this.state.email ? 'to be filled in.' : this.state.email}
        </p>
      </div>
    );
  }
}

export default SignupPage;
