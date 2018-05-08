import React, { Component } from 'react';

class Profile extends Component {
  render() {
    return (
      <h1>Welcome {this.props.user}!</h1>
    );
  }
}

export default Profile;