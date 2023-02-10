import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './myPosts/MyPostsContainer';

type StatePropsType = {}

export const Profile = (props: StatePropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    )
}
