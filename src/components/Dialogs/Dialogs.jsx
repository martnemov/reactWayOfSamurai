import React from 'react';
import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Companions = (props) => {
    return <div className={style.companion}>
        <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={style.message}>{props.message}</div>
}

const Dialogs = () => {
    let companionsData = [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Bob'},
        {id: 3, name: 'John'},
        {id: 4, name: 'Sara'},
    ]

    let messagesData = [
        {id: 1, message: 'Hello!'},
        {id: 2, message: 'Sorry for a late'},
        {id: 3, message: 'Bye-bye'},
        {id: 4, message: 'For what!?'},
    ]
    return (
        <div className={style.dialogs}>
            <div className={style.companions}>
                <Companions/>
                <Companions id={companionsData[0].id} name={companionsData[0].name}/>
                <Companions id={companionsData[1].id} name={companionsData[1].name}/>
                <Companions id={companionsData[2].id} name={companionsData[2].name}/>
                <Companions id={companionsData[3].id} name={companionsData[3].name}/>
            </div>
            <div className={style.messages}>
                <Message id={messagesData[0].id} message={messagesData[0].message}/>
                <Message id={messagesData[1].id} message={messagesData[1].message}/>
                <Message id={messagesData[2].id} message={messagesData[2].message}/>
                <Message id={messagesData[3].id} message={messagesData[3].message}/>
            </div>
        </div>
    )
}

export default Dialogs;
