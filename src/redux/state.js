import {renderEntireThree} from "../render";

let state =
    {
        profilePage:
            {
                postsData: [
                    {id: 1, message: 'Hello, world!', likes: 12},
                    {id: 2, message: 'My first post', likes: 22}
                ]
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
            },
    }

export let addPost = (text) => {
    let newPost = {
        id: 3,
        message: text,
        likes: 0,
    }
    state.profilePage.postsData.push(newPost);
    renderEntireThree(state)

}

export default state
