export type StoreType = {
    _state: RootStateType
    changeNewText: (newText: string) => void
    addPost: (ostText: string) => void
    _onChange: () => void
    subscribe: (callBack: () => void) => void
    getState:()=>RootStateType
}
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
        }
    },
    getState() {
        return this._state;
    },
    _onChange() {
        console.log('state change')
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
    changeNewText(newText: string) {
        this._state.profilePage.newPostText = newText
        this._onChange()
    }
}
