import Form from '../components/form';
import { connect } from 'react-redux';
import { addUser } from '../action/userAction';
import axios from 'axios';

const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
  users: state.users
})

const mapDispatchToProps = (dispatch) => ({
  addUser: (username, birthday) => { 
    dispatch(addUser(username, birthday));
    axios.post('http://localhost:3000/users', {
      username: username,
      birthday: birthday
    }).then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);