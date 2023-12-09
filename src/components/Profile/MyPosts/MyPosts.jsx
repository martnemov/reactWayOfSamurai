import React from "react";
import Post from "./Post/Post"
import style from "./MyPosts.module.css"

const MyPosts = (props) => {
    let postsElements = props.postsData.map(post => <Post message={post.message} likes={post.likes}/>);
    let newPostText = props.newPostText;
    let onAddPost = () => {
        props.addPost();
    }
    let onPostChange = (e) => {
        let text = e.target.value;
        props.postChange(text)
    }

    return <div className={style.postsBox}>
        <div>
            <h3>My Posts</h3>
            <div>
                <textarea
                    id='post-text'
                    onChange={(e) => onPostChange(e)}
                    value={newPostText}/>
            </div>
            <div>
                <button onClick={onAddPost}>Send</button>
            </div>
        </div>
        <div className={style.posts}>
            {postsElements}
        </div>
    </div>
}

export default MyPosts;