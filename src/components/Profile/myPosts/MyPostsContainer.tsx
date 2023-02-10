import React from 'react';
import {ActionsType} from '../../../redux/store';
import {addPostAC, changeNewTextAC} from '../../../redux/profile-reducer';
import {MyPosts} from './MyPosts';

type PostType = {
    id: number
    message: string
    likesCount: string
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
export type StatePropsType = {
    state: ProfilePageType
    dispatch: (e: ActionsType) => void
}
export const MyPostsContainer = (props: StatePropsType) => {

    const addPost = () => {
        props.dispatch(addPostAC())
    }

    const onChangeHandler = (text: string) => {
        props.dispatch(changeNewTextAC(text))
    }

return <MyPosts posts={props.state.posts}
                addPost={addPost}
                newPostText={props.state.newPostText}
                updateNewPostText={onChangeHandler}
                dispatch={props.dispatch}/>
}