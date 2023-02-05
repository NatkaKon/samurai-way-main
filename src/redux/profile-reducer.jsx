export const ADD_POST = 'ADD-POST'
export const CHANGE_NEW_TEXT = 'CHANGE-NEW-TEXT'

export const profileReducer=(state, action)=> {
    if (action.type === ADD_POST) {
        const newPost = {
            id: new Date().getTime(),
            message: action.postText,
            likesCount: '0'
        }
        state.profilePage.posts.push(newPost)
        // state._onChange()
    } else if (action.type === CHANGE_NEW_TEXT) {
        state.profilePage.newPostText = action.newText
        // this._onChange()
    }
    return state
}