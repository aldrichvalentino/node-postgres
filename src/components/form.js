import React, { Component } from 'react';

class Form extends Component {
  render() {
    let username, birthday;
    return (
      <div style={{ marginBottom: 20 }}>
        <h1>Register</h1>
        <form onSubmit={(e) => {
          e.preventDefault();
          this.props.addUser(username.value, birthday.value);
        }} >
          <div style={{ marginBottom: 10 }}>
            <input 
              required
              type="text" 
              name="username" 
              placeholder="username"
              ref={(node) => username = node} />
          </div>
          <div style={{ marginBottom: 10 }}>
            <input 
              required
              type="date" 
              name="birthday" 
              placeholder="birthday"
              ref={(node) => birthday = node} />
          </div>
          <div>
            <input type="submit" value="register"/>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
