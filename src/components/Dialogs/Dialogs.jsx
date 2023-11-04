import React from 'react';
import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Companions = (props) => {
    return <div className={style.companion}>
        <img src={props.src} alt="avatar"/>
        <NavLink to={"/dialogs/" + props.id}
                 className={navData => navData.isActive ? style.companionActive : style.companion}>
            {props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div>{props.message}</div>
}

const Dialogs = (props) => {
    let companionsElements = props.state.companionsData.map(companion => <Companions id={companion.id}
                                                                                     name={companion.name} src={companion.src}/>)
    let messagesElements = props.state.messagesData.map(message => <Message id={message.id} message={message.text}/>)


    return (<div className={style.dialogs}>
        <div className={style.companions}>
            {companionsElements}
        </div>
        <div className={style.messages}>
            {messagesElements}
        </div>
    </div>)
}

export default Dialogs;
