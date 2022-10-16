import React from "react";
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {PostType} from '../../../Redax/State';

type MyPostsPropsType = {
    posts:PostType[]
}
export const MyPosts = (props:MyPostsPropsType) => {

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>

            </div>
            <div className={s.posts}>
                {props.posts.map(post=><Post message={post.message} likesCount={post.likesCount} id={post.id} key={post.id}/>)}
            </div>
        </div>
    )
}