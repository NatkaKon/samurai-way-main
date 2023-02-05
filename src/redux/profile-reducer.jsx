export const ADD_POST = 'ADD-POST'
export const CHANGE_NEW_TEXT = 'CHANGE-NEW-TEXT'

export const profileReducer = (state, action) => {
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


