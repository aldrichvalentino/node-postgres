import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  render() {
    let email, password;
    return (
      <div style={{ marginBottom: 20 }}>
        <h1>Login</h1>
        <form
          style={{ marginBottom: 20 }}
          onSubmit={e => {
            e.preventDefault();
            this.props.addUser(email.value, password.value);
          }}
        >
          <div style={{ marginBottom: 10 }}>
            <label style={{ display: "block" }}>Email</label>
            <input
              required
              type="text"
              name="email"
              placeholder="email"
              ref={node => (email = node)}
            />
          </div>
          <div style={{ marginBottom: 10 }}>
            <label style={{ display: "block" }}>Password</label>
            <input
              required
              type="password"
              name="password"
              placeholder="your secret password"
              ref={node => (password = node)}
            />
          </div>
          <div>
            <input type="submit" value="Login" />
          </div>
        </form>
        <Link to="/register">Register here!</Link>
      </div>
    );
  }
}

export default Login;
