import React from 'react';
import {addPostAC, changeNewTextAC} from '../../../redux/profile-reducer';
import {MyPosts} from './MyPosts';
import {StoreContext} from '../../../StoreContext';

type PostContainerType = {}

export const MyPostsContainer = (props: PostContainerType) => {

    return (
        <StoreContext.Consumer>
            {
            (store) => {

                let state = props.store.getState().profilePage

                const addPost = () => {
                    props.store.dispatch(addPostAC())
                }

                const onChangeHandler = (text: string) => {
                    props.store.dispatch(changeNewTextAC(text))
                }

                return <MyPosts posts={state.profilePage.posts}
                                addPost={addPost}
                                newPostText={state.profilePage.newPostText}
                                updateNewPostText={onChangeHandler}

                />
            }
        }
        </StoreContext.Consumer>
    )
}
