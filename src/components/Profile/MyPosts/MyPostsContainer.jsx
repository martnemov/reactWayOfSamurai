import React from "react";
import {addPostActionCreator, updatePostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    let state = props.store.getState()
    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }
    let postChange = (text) => {
        props.store.dispatch(updatePostActionCreator(text))
    }

    return <MyPosts postsData={state.profilePage.postsData}
                    newPostText={state.profilePage.newPostText}
                    addPost={addPost}
                    postChange={postChange}/>
}

export default MyPostsContainer;