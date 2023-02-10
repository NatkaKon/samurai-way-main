import {ActionsType} from './store';
import {ProfilePageType} from '../App';

export const ADD_POST = 'ADD-POST'
export const CHANGE_NEW_TEXT = 'CHANGE-NEW-TEXT'

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: '12'},
        {id: 2, message: 'It\'s my first post', likesCount: '9'}
    ],
    newPostText: 'write here'
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsType) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: new Date().getTime(),
                message: state.newPostText,
                likesCount: '0'
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state

        case CHANGE_NEW_TEXT:
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}


export const addPostAC = () => {
    return {
        type: ADD_POST,
    } as const
}


export const changeNewTextAC = (newText: string) => {
    return {
        type: CHANGE_NEW_TEXT,
        newText: newText
    } as const
}

export type AddPostActionType = ReturnType<typeof addPostAC>
export type ChangeNewTextActionType = ReturnType<typeof changeNewTextAC>
