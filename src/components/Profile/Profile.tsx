import React from "react";
import {MyPosts} from "./myPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostType} from '../../Redax/State';

type ProfilePropsType = {
    posts:PostType[]
}

export const Profile = (props: ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>
    )
}
