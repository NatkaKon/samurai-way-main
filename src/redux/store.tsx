import {profileReducer, ChangeNewTextActionType, AddPostActionType} from './profile-reducer';
import {dialogsReducer, UpdateNewMessageBodyType, SendMessageACType} from './dialogs-reducer';

export const store: StoreType = {
    _state: {
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
            newMessageBody: ''
        }
    },
    _onChange() {
        console.log('state change')
    },
    getState() {
        return this._state;
    },
    subscribe(callBack) {
        this._onChange = callBack
    },
    addPost(postText: string) {
        const newPost: PostType = {
            id: new Date().getTime(),
            message: postText,
            likesCount: '0'
        }
        this._state.profilePage.posts.push(newPost)
        this._onChange()
    },
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText
        this._onChange()
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

        this._onChange()
    }
}

//types

 type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
}
type MessageType = {
    id: number
    message: string
}
 type DialogType = {
    id: number
    name: string
}
 type PostType = {
    id: number
    message: string
    likesCount: string
}
 type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
 type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody: string
}
 type StoreType = {
    _state: RootStateType
    updateNewPostText: (newText: string) => void
    addPost: (postText: string) => void
    _onChange: () => void
    subscribe: (callBack: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsType) => void
}


export type ActionsType = AddPostActionType
    | ChangeNewTextActionType
    | UpdateNewMessageBodyType
    | SendMessageACType