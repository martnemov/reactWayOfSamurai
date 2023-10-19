import React from "react";
import Post from "./Post/Post"
import style from "./MyPosts.module.css"

const MyPosts = () => {
    let postsData = [
        {message: 'Hello, world!', likes: 12},
        {message: 'My first post', likes: 22},
    ]
    return <div className={style.postsBox}>
        <div>
            <h3>My Posts</h3>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Send</button>
            </div>
        </div>
        <div className={style.posts}>
            <Post message={postsData[0].message} likes={postsData[0].likes}/>
            <Post message={postsData[1].message} likes={postsData[1].likes}/>
        </div>
    </div>
}

export default MyPosts;