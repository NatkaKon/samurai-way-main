import {rerenderEntireTree} from '../render';

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
}
type MessageType = {
    id: number
    message: string
}
export type DialogType = {
    id: number
    name: string
}
export type PostType = {
    id: number
    message: string
    likesCount: string
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

export let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: '12'},
            {id: 2, message: 'It\'s my first post', likesCount: '9'}
        ],
        newPostText: 'write here'
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Andrew'},
            {id: 2, name: 'Kate'},
            {id: 3, name: 'Nik'},
            {id: 4, name: 'Kolya'},
            {id: 5, name: 'Vanya'}
        ],
        messages: [
            {id: 1, message: 'Hello'},
            {id: 2, message: 'How are you'},
            {id: 3, message: 'Yo'}
        ],
    }
}

export const addPost = () => {
    const newPost: PostType = {
        id: new Date().getTime(),
        message: state.profilePage.newPostText,
        likesCount: '0'
    }
    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state)
}

export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}