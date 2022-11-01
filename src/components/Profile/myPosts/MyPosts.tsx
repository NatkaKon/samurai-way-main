import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {PostType} from '../../../Redax/State';

type MyPostsPropsType = {
    posts: PostType[]
    addPost: (postText: string) => void
    newPostText: string
    updateNewPostText: (newText: string) => void
}
export const MyPosts = (props: MyPostsPropsType) => {

    const addPost = () => {
        props.addPost(props.newPostText)
        props.updateNewPostText('')
    }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        onChange={onChangeHandler}
                        value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>

            </div>
            <div className={s.posts}>
                {props.posts.map(post => <Post message={post.message} likesCount={post.likesCount} id={post.id}
                                               key={post.id}/>)}
            </div>
        </div>
    )
}