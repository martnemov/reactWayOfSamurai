import React from 'react';
import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";

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
    let newTextMessageElement = React.createRef()
    let newMessageBody = props.state.newMessageBody

    let companionsElements = props.state.companionsData.map(companion => <Companions id={companion.id}
                                                                                     name={companion.name}
                                                                                     src={companion.src}/>)
    let messagesElements = props.state.messagesData.map(message => <Message id={message.id} message={message.text}/>)
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    let onChangeMessageBody = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }
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
                    ref={newTextMessageElement}
                    value={newMessageBody}
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
