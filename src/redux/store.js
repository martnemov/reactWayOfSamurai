const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let store = {
    _state: {
        profilePage:
            {
                postsData: [
                    {id: 1, message: 'Hello, world!', likes: 12},
                    {id: 2, message: 'My first post', likes: 22}
                ],
                newPostText: 'insert text'
            },
        dialogsPage:
            {
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
            },
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 3,
                message: this._state.profilePage.newPostText,
                likes: 0,
            }
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messagesData.push({id: 6, text: body});
            this._callSubscriber(this._state);
        }
    },
    _callSubscriber() {
        console.log('Nothing to render')
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
}

export const updatePostActionCreator = (text) => ({type: UPDATE_POST_TEXT, newText: text})
export const addPostActionCreator = () => ({type: ADD_POST})
export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})


export default store;
window.store = store;
