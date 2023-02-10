import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {BrowserRouter, Route} from 'react-router-dom';
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';
import {ActionsType} from './redux/store';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';
import {storeType} from './redux/redux-store';


export const App = (props:AppPropsType) => {


    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path={"/dialogs"}
                           render={() => <DialogsContainer store={props.store}
                           />}
                    />
                    <Route path={"/profile"}
                           render={() => <Profile state={props.state.profilePage} dispatch={props.dispatch}
                           />}
                    />
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

type AppPropsType = {
    state: RootStateType,
    dispatch: (e: ActionsType) => void
    store:storeType
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
}
type MessageType = {
    id: number
    message: string
}
export type DialogType = {
    id: number
    name: string
}
export type PostType = {
    id: number
    message: string
    likesCount: string
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody: string
}
export type StoreType = {
    _state: RootStateType
    updateNewPostText: (newText: string) => void
    addPost: (postText: string) => void
    _onChange: () => void
    subscribe: (callBack: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsType) => void
}