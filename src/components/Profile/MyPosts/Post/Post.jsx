import React from "react";
import style from "./Post.module.css"

const Post = (props) => {
    return <div className={style.item}>
        <img src="https://www.shareicon.net/data/512x512/2016/05/29/772559_user_512x512.png"
             alt="avatar_small"/>
        <span>{props.message}</span>
        <div>{props.likes} likes</div>
    </div>
}

export default Post;