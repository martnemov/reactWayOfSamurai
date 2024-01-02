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
                }
                let copyState = {...state};
                copyState.postsData = [...state.postsData];
                copyState.postsData.push(newPost);
                copyState.newPostText = '';
                return copyState;
            }
            case UPDATE_POST_TEXT: {
                let copyState = {...state};
                copyState.newPostText = action.newText;
                return copyState;
            }
            default:
                return state
        }
    }

export const updatePostActionCreator = (text) => ({type: UPDATE_POST_TEXT, newText: text})
export const addPostActionCreator = () => ({type: ADD_POST})

export default profileReducer;
