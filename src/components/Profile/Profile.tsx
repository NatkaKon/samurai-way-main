import React from 'react';
import {MyPosts} from './myPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {PostType} from '../../Redax/State';

type ProfilePropsType = {
    posts: PostType[]
    addPost: (postText: string) => void
    newPostText: string
    updateNewPostText: (newText: string) => void
}

export const Profile = (props: ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}
                     addPost={props.addPost}
                     newPostText={props.newPostText}
                     updateNewPostText={props.updateNewPostText}
            />
        </div>
    )
}
