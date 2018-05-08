import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      birthday: '',
    }
  }

  handleNameChange(e) {
    this.setState({
      username: e.target.value
    });
  }

  handleDateChange(e) {
    this.setState({
      birthday: new Date(e.target.value)
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.birthday !== '' && this.state.username !== '') {
      var data = {
        username: this.state.username,
        birthDate: this.state.birthday.getDate(),
        birthMonth: this.state.birthday.getMonth(),
        birthYear: this.state.birthday.getFullYear() 
      };
      axios.post('http://localhost:3000/users', data)
      .then((response) => {
        // Update state with the new registered user
        this.props.update(response.data.username);
      })
      .catch((error) => {
        console.log(error);
      });
    }
  }

  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit.bind(this)} >
          <div>
            <input 
              required
              type="text" 
              name="username" 
              placeholder="username" 
              onChange={this.handleNameChange.bind(this)} />
          </div>
          <div>
            <input 
              required
              type="date" 
              name="birthday" 
              placeholder="birthday" 
              onChange={this.handleDateChange.bind(this)} />
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
