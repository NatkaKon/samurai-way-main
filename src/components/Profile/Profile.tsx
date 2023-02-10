import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ActionsType} from '../../redux/store';
import {MyPostsContainer, ProfilePageType} from './myPosts/MyPostsContainer';

type StatePropsType = {
    state: ProfilePageType
    dispatch: (e: ActionsType) => void
}

export const Profile = (props: StatePropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer state={props.state} dispatch={props.dispatch}/>
        </div>
    )
}
