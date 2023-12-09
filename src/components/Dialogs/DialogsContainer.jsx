import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState();
    let sendMessage = () => {
        props.store.dispatch(sendMessageCreator())
    }
    let changeMessage = (text) => {
        props.store.dispatch(updateNewMessageBodyCreator(text))
    }
    return (<Dialogs
        sendMessage={sendMessage}
        changeMessage={changeMessage}
        newMessageBody={state.dialogsPage.newMessageBody}
        companionsData={state.dialogsPage.companionsData}
        messagesData={state.dialogsPage.messagesData}
    />)
}

export default DialogsContainer;
