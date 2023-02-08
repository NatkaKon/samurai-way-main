import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {ActionsType,  PostType} from '../../../redux/store';
import {addPostAC} from '../../../redux/profile-reducer';
import {MyPosts} from './MyPosts';


type MyPostsPropsType = {
    posts: PostType[]
    addPost: (postText: string) => void
    newPostText: string
    updateNewPostText: (newText: string) => void
    dispatch:(action:ActionsType)=>void

}
export const MyPostsContainer = (props: MyPostsPropsType) => {

    const addPost = () => {
        props.updateNewPostText('')
        props.dispatch(addPostAC())
    }

    const onChangeHandler = (text:string) => {
        // props.updateNewPostText(e.currentTarget.value)
        props.dispatch()
    }

    return <MyPosts posts={} addPost={} newPostText={} updateNewPostText={()=>{onChangeHandler} dispatch={}/>

}