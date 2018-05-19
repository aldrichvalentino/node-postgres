import Form from '../components/form';
import { connect } from 'react-redux';
import { addUser } from '../action/userAction';
import axios from 'axios';

const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
  users: state.users
})

const mapDispatchToProps = (dispatch) => ({
  addUser: (name, email, password) => { 
    dispatch(addUser(name, email, password));
    axios.post('http://localhost:3000/users', {
      name: name,
      email: email,
      password: password
    }, {
      withCredentials: true
    }).then()
      .catch((err) => console.log(err));
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);