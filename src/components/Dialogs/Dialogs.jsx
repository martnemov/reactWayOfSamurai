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
    return <div>{props.text}</div>
}

const Dialogs = (props) => {
    let companionsElements = props.dialogsPage.companionsData.map(companion =>
        <Companions id={companion.id}
                    name={companion.name}
                    src={companion.src}
                    key={companion.id}/>);
    let messagesElements = props.dialogsPage.messagesData.map(message =>
        <Message id={message.id}
                 text={message.text}
                 key={message.id}/>);
    let onSendMessageClick = () => {
        props.sendMessage()
    };
    let onChangeMessageBody = (e) => {
        let body = e.target.value;
        props.changeMessage(body)
    };

    return (<div className={style.dialogs}>
        <div className={style.companions}>
            {companionsElements}
        </div>
        <div className={style.messages}>
            {messagesElements}
        </div>
        <div>
            <div>
                <textarea
                    id='message-text'
                    value={props.dialogsPage.newMessageBody}
                    onChange={(e) => onChangeMessageBody(e)}></textarea>
            </div>
            <div>
                <button
                    onClick={onSendMessageClick}>Send
                </button>
            </div>
        </div>
    </div>)
}

export default Dialogs;
