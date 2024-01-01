import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapState = (state) => {
    return {
        newMessageBody: state.dialogsPage.newMessageBody,
        companionsData: state.dialogsPage.companionsData,
        messageData: state.dialogsPage.messagesData
    }
}

let mapDispatch = (dispatch) => {
    return {
        sendMessage: () => dispatch(sendMessageCreator()),
        changeMessage: (text) => dispatch(updateNewMessageBodyCreator(text))
    }
}

const DialogsContainer = connect(mapState, mapDispatch)(Dialogs);

export default DialogsContainer;