import {connect} from "react-redux";
import Users from "./Users";
import {
    setUsersActionCreator,
    subscribeActionCreator,
    unsubscribeActionCreator,
} from "../../redux/users-reducer";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        subscribe: (userId) => dispatch(subscribeActionCreator(userId)),
        unsubscribe: (userId) => dispatch(unsubscribeActionCreator(userId)),
        setUsers: (users) => dispatch(setUsersActionCreator(users)),
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;