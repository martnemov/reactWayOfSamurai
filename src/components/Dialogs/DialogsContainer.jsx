import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {
    return <StoreContext.Consumer>
        {(store) => {
            let state = store.getState();
            let sendMessage = () => {
                store.dispatch(sendMessageCreator())
            }
            let changeMessage = (text) => {
                store.dispatch(updateNewMessageBodyCreator(text))
            }
            return <Dialogs
                sendMessage={sendMessage}
                changeMessage={changeMessage}
                newMessageBody={state.dialogsPage.newMessageBody}
                companionsData={state.dialogsPage.companionsData}
                messagesData={state.dialogsPage.messagesData}
            />
        }
        }
    </StoreContext.Consumer>
}

export default DialogsContainer;
