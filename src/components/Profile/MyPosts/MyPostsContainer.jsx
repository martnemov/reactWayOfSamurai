import React from "react";
import {addPostActionCreator, updatePostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = () => {
    return <StoreContext.Consumer>
        {(store) => {
            let state = store.getState()
            let addPost = () => {
                store.dispatch(addPostActionCreator());
            }
            let postChange = (text) => {
                store.dispatch(updatePostActionCreator(text))
            }
            return <MyPosts postsData={state.profilePage.postsData}
                            newPostText={state.profilePage.newPostText}
                            addPost={addPost}
                            postChange={postChange}/>
        }
        }
    </StoreContext.Consumer>
}

export default MyPostsContainer;