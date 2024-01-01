import {addPostActionCreator, updatePostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


let mapState = (state) => {
    return {
        postData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatch = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        postChange: (text) => {
            dispatch(updatePostActionCreator(text))
        }
    }
}

const MyPostsContainer = connect(mapState, mapDispatch)(MyPosts)

export default MyPostsContainer;