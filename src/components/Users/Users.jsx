import style from './Users.module.css'
import React from "react";

const UsersAvatar = (props) => {

    return (
        <div className={style.usersAvatar} key={props.key}>
            <img src={props.avatar} alt='avatar'></img>
        </div>
    )
};

const UsersInfo = (props) => {
    return (
        <div key={props.key} className={style.usersInfo}>
            <div>
                <div>{props.fullname}</div>
                <div>{props.status}</div>
            </div>
            <div className={style.location}>
                <div>{props.location.country}</div>
                <div>{props.location.city}</div>
            </div>
        </div>
    )
}

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                fullName: 'Dmitry Ivanov',
                avatar: 'https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_1280.png',
                subscribe: true,
                status: 'Hello',
                location: {country: 'Russia', city: 'Ufa'}
            },
            {
                id: 2,
                fullName: 'Michael Jordan',
                avatar: 'https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_1280.png',
                subscribe: true,
                status: 'Join me',
                location: {country: 'USA', city: 'Chicago'}
            },
            {
                id: 3,
                fullName: 'Patrick Viera',
                subscribe: false,
                status: 'Find my love',
                avatar: 'https://cdn.pixabay.com/photo/2014/04/03/10/32/businessman-310819_1280.png',
                location: {country: 'France', city: 'Marseille'}
            },
            {
                id: 4,
                fullName: 'Abdulla Abu Salman',
                subscribe: false,
                status: 'Looking for a job',
                avatar: 'https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_1280.png',
                location: {country: 'UAE', city: 'Dubai'}
            },
        ])
    }

    let onSubscribeClick = (userId) => {
        props.subscribe(userId)
    };
    let onUnsubscribeClick = (userId) => {
        props.unsubscribe(userId)
    };

    return (
        <div className={style.usersHost}>
            {props.users.map((user) => (
                <div key={user.id} className={style.usersContainer}>
                    <div className={style.usersCard}>
                        <UsersAvatar
                            avatar={user.avatar}/>
                        <div>{user.subscribe ?
                            <button onClick={() => onUnsubscribeClick(user.id)}>Subscribe</button> :
                            <button onClick={() => onSubscribeClick(user.id)}>Unsubscribe</button>}
                        </div>
                    </div>
                    <UsersInfo
                        fullname={user.fullName}
                        status={user.status}
                        location={user.location}/>
                </div>
            ))}
        </div>
    )
}

export default Users;