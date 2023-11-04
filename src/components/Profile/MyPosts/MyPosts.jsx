import React from "react";
import Post from "./Post/Post"
import style from "./MyPosts.module.css"

const MyPosts = (props) => {
    let postsElements = props.postsData.map(post => <Post message={post.message} likes={post.likes}/>
    )

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
            {postsElements}
        </div>
    </div>
}

export default MyPosts;