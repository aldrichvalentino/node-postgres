import Form from '../components/form';
import { connect } from 'react-redux';
import { addUser, editUser, getUser, receiveUser } from '../action/userAction';

const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
  users: state.users
})

const mapDispatchToProps = (dispatch) => ({
  addUser: (username, birthday) => { dispatch(addUser(username, birthday)) },
  editUser: (index, username, birthday) => { dispatch(editUser(index, username, birthday)) },
  getUser: () => { dispatch(getUser()) },
  receiveUser: () => { dispatch(receiveUser([])) },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);