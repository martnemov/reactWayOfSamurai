import React from 'react';
import style from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div className={style.cover}>
                <img
                    src="https://media.istockphoto.com/id/1150481340/vector/realistic-mountains-landscape-morning-wood-panorama-pine-trees-and-mountains-silhouettes.jpg?s=612x612&w=0&k=20&c=vluz4w1uOnc4weG0jLegNPTjJiQ_mwNmG4P24KfiKLA="
                    alt="mountain img"/>
            </div>
            <div className={style.description}>
                <img
                    src="https://www.shareicon.net/data/512x512/2016/05/29/772559_user_512x512.png"
                    alt="avatar"/>
                <section>User info</section>
            </div>
        </div>
    )
}

export default ProfileInfo;
