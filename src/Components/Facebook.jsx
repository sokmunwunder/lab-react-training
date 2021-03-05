import React from 'react';
import profiles from '../data/berlin.json';
import './FaceBook.css';

//console.log(profiles);

class Facebook extends React.Component {
  state = {
    profiles: profiles,
  };

  render() {
    return (
      <div>
        {this.state.profiles.map((profile) => (
          <div className="Facebook" key={profile.img}>
            <img
              className="profileimage"
              src={profile.img}
              alt={profile.firstName + '' + profile.lastName}
            />
            <div className="profile_details">
              <strong> First Name: {profile.firstName}</strong>
              <strong> Last Name: {profile.lastName}</strong>
              <strong> Country: {profile.country}</strong>
              <strong>
                {' '}
                Type: {profile.isStudent ? 'Student' : 'Teacher'}
              </strong>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Facebook;
