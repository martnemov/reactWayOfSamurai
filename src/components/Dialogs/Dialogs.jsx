import React from 'react';
import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Companions = (props) => {
    return <div className={style.companion}>
        <NavLink to={"/dialogs/" + props.id}
                 className={navData => navData.isActive ? style.companionActive : style.companion}>
            {props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={style.message}>{props.message}</div>
}

const Dialogs = () => {
    let companionsData = [{id: 1, name: 'Alex'}, {id: 2, name: 'Bob'}, {id: 3, name: 'John'}, {id: 4, name: 'Sara'},]

    let messagesData = [{id: 1, text: 'Hello!'}, {id: 2, text: 'Sorry for a late'}, {id: 3, text: 'Bye-bye'}, {
        id: 4,
        text: 'For what!?'
    },]

    let companionsElements = companionsData.map(companion => <Companions id={companion.id} name={companion.name}/>)

    let messagesElements = messagesData.map(message => <Message id={message.id} message={message.text}/>)

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
