import React from "react";
import Post from "./Post/Post"
import style from "./MyPosts.module.css"

const MyPosts = (props) => {
    let postsElements = props.postsData.map(post => <Post message={post.message} likes={post.likes}/>);
    let newPostElement = React.createRef();
    let addPost = () => {
        props.addPost();
    }
    let onPostChange = () => {
        let newText = newPostElement.current.value;
        props.updatePostText(newText)
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