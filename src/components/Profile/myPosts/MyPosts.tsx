import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {ActionsType} from '../../../redux/store';
import {PostType} from '../../../App';

type MyPostsPropsType = {
    posts: PostType[]
    dispatch:(action:ActionsType)=>void
    addPost: (postText: string) => void
    updateNewPostText: (newText: string) => void
    newPostText: string
}
export const MyPosts = (props: MyPostsPropsType) => {

    // const postElements=props.posts.map((post)=> <Post id={post.id} message={post.message} likesCount={post.likesCount}/>)
    //
    // const newPostElement = React.createRef<HTMLTextAreaElement>();

    // const onAddPost = () => {
    //     // props.updateNewPostText('')
    //     // props.dispatch(addPostAC())
    //     if(newPostElement.current){
    //         newPostElement.current.value=''
    //     }
    //     props.dispatch(addPostAC())
    //     // props.addPost()
    // }
    const onAddPost = () => {
        props.addPost(props.newPostText)
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
                    <button onClick={onAddPost}>Add post</button>
                </div>

            </div>
            <div className={s.posts}>
                {props.posts.map(post => <Post message={post.message} likesCount={post.likesCount} id={post.id}
                                               key={post.id}/>)}
            </div>
        </div>
    )
}