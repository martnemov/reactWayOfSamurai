import React from "react";
import Post from "./Post/Post"
import style from "./MyPosts.module.css"
import {addPostActionCreator, updatePostActionCreator} from "../../../redux/store";

const MyPosts = (props) => {
    let postsElements = props.postsData.map(post => <Post message={post.message} likes={post.likes}/>);
    let newPostElement = React.createRef();
    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updatePostActionCreator(text))
    }

    return <div className={style.postsBox}>
        <div>
            <h3>My Posts</h3>
            <div>
                <textarea id='post-text' onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
            </div>
            <div>
                <button onClick={addPost}>Send</button>
            </div>
        </div>
        <div className={style.posts}>
            {postsElements}
        </div>
    </div>
}

export default MyPosts;