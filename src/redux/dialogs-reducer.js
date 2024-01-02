const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';


let initialState = {
    companionsData: [
        {
            id: 1,
            name: 'Alex',
            src: 'https://toppng.com/uploads/preview/avatar-png-11554021661asazhxmdnu.png'
        },
        {
            id: 2,
            name: 'Bob',
            src: 'https://w7.pngwing.com/pngs/355/582/png-transparent-avatar-human-man-person-user-social-media-icon.png'
        },
        {
            id: 3,
            name: 'John',
            src: 'https://w7.pngwing.com/pngs/164/966/png-transparent-avatar-boy-character-man-uncle-user-avatar-vol-9-icon.png'
        },
        {
            id: 4,
            name: 'Sara',
            src: 'https://w7.pngwing.com/pngs/915/511/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png'
        },
    ],
    messagesData: [
        {id: 1, text: 'Hello!'},
        {id: 2, text: 'Sorry for a late'},
        {id: 3, text: 'Bye-bye'},
        {id: 4, text: 'For what!?'},
    ],
    newMessageBody: 'add your message'
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            let copyState = {...state};
            copyState.newMessageBody = action.body;
            return copyState;
        }
        case SEND_MESSAGE: {
            let copyState = {...state};
            copyState.copyMessagesData = [...state.messagesData];
            let body = copyState.newMessageBody;
            copyState.newMessageBody = '';
            copyState.messagesData.push({id: 6, text: body});
            return copyState
            }
        default:
            return state
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;