const SUBSCRIBE = 'SUBSCRIBE';
const UNSUBSCRIBE = 'UNSUBSCRIBE';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type){
        case SUBSCRIBE:
            return {
                ...state,
                users: state.users.map((user) => {
                    if(user.id === action.userId){
                        return {...user, subscribe: true}
                    }
                    return user;
                })
            }
        case UNSUBSCRIBE:
            return {
                ...state,
                users: state.users.map((user) => {
                    if(user.id === action.userId){
                        return {...user, subscribe: false}
                    }
                    return user;
                })
            }
        case SET_USERS: {
            return {
                 ...state,
                users: [...action.users]
            }
        }
        default:
            return state;
    }
}

export const subscribeActionCreator = (userId) => ({type: SUBSCRIBE, userId});
export const unsubscribeActionCreator = (userId) => ({type: UNSUBSCRIBE, userId});
export const setUsersActionCreator = (users) => ({type: SET_USERS, users});

export default usersReducer;