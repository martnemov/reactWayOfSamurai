import React from 'react';
import style from './Sidebar.module.css'


const Friend = (props) => {
    return (
        <div>
            <img src={props.src} alt="avatar"/>
            <span>{props.name}</span>
        </div>
    )
}

const Sidebar = (props) => {
    let friendsElements = props.companionsData.map(companion =>
        <Friend name={companion.name}
                src={companion.src}
                key={companion.id}/>);
    return (
        <div className={style.sidebar}>
            <h3>My friends</h3>
            <div>{friendsElements}</div>
        </div>
    )
}
export default Sidebar;