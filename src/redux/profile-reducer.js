const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

let initialState = {
    postsData: [
        {id: 1, message: 'Hello, world!', likes: 12},
        {id: 2, message: 'My first post', likes: 22}
    ],
    newPostText: 'insert text'
}

const
    profileReducer = (state = initialState, action) => {
        switch (action.type) {
            case ADD_POST: {
                let newPost = {
                    id: 3,
                    message: state.newPostText,
                    likes: 0,
                };
                return {
                    ...state,
                    postsData: [...state.postsData, newPost],
                    newPostText: ''
                }
            }
            case UPDATE_POST_TEXT: {
                return {
                    ...state,
                    newPostText: action.newText
                }
            }
            default:
                return state
        }
    }

export const updatePostActionCreator = (text) => ({type: UPDATE_POST_TEXT, newText: text})
export const addPostActionCreator = () => ({type: ADD_POST})

export default profileReducer;
