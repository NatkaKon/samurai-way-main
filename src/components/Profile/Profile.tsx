import React from 'react';
import {MyPosts} from './myPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ActionsType, PostType} from '../../redux/store';

type ProfilePropsType = {
    posts: PostType[]
    addPost: (postText: string) => void
    newPostText: string
    updateNewPostText: (newText: string) => void
    dispatch: (action: ActionsType) => void
}

export const Profile = (props: ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}
                     newPostText={props.newPostText}
                     addPost={props.addPost}
                     updateNewPostText={props.updateNewPostText}
                     dispatch={props.dispatch}
            />
        </div>
    )
}
