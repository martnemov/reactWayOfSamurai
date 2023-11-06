import React from 'react';
import style from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div className={style.content}>
            <ProfileInfo/>
            <MyPosts
                postsData={props.profilePage.postsData}
                newPostText={props.profilePage.newPostText}
                addPost={props.addPost}
                updatePostText={props.updatePostText}/>
        </div>
    )
}

export default Profile;
