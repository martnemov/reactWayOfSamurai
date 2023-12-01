import React from "react";
import Post from "./Post/Post"
import style from "./MyPosts.module.css"
import {addPostActionCreator, updatePostActionCreator} from "../../../redux/profile-reducer";

const MyPosts = (props) => {
    let newPostElement = React.createRef();
    let postsElements = props.postsData.map(post => <Post message={post.message} likes={post.likes}/>);
    let newPostText = props.newPostText;
    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }
    let onPostChange = (e) => {
        let text = e.target.value;
        props.dispatch(updatePostActionCreator(text))
    }

    return <div className={style.postsBox}>
        <div>
            <h3>My Posts</h3>
            <div>
                <textarea
                    id='post-text'
                    onChange={(e) => onPostChange(e)}
                    ref={newPostElement}
                    value={newPostText}/>
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