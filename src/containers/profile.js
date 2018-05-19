import Profile from '../components/profile';
import { connect } from 'react-redux';
import { getUser, receiveUser } from '../action/userAction';
import axios from 'axios';

const mapStateToProps = (state) => ({
    currentUser: state.currentUser,
    users: state.users
})

const mapDispatchToProps = (dispatch) => ({
    getUser: () => {
        dispatch(getUser());
        axios.get('http://localhost:3000/users', {
            withCredentials: true
        }).then((res) => {
            dispatch(receiveUser(res.data));
        }).catch((err) => console.log(err));
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile);