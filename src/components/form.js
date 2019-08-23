import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

class Form extends Component {
  render() {
    let username, email, password;
    if (this.props.currentUser !== "") {
      return <Redirect to={{ pathname: "/" }} />;
    }

    return (
      <div style={{ marginBottom: 20 }}>
        <h1>Register</h1>
        <form
          style={{ marginBottom: 20 }}
          onSubmit={e => {
            e.preventDefault();
            this.props.addUser(username.value, email.value, password.value);
          }}
        >
          <div style={{ marginBottom: 10 }}>
            <label style={{ display: "block" }}>Name</label>
            <input
              required
              type="text"
              name="name"
              placeholder="name"
              ref={node => (username = node)}
            />
          </div>
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
            <input type="submit" value="register" />
          </div>
        </form>
        <Link to="/login">Login here!</Link>
        <br />
      </div>
    );
  }
}

export default Form;
