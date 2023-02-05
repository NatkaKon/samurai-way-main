import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';
import { StoreType} from './Redax/State';


// type AppPropsType = {
//     state: RootStateType
//     addPost: () => void
//     updateNewPostText: (newText: string) => void
// }

type PropsType = {
    store: StoreType
}

export const App: React.FC<PropsType> = (props) => {

    const state = props.store.getState()

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs"
                           render={() => <Dialogs

                               dialogs={state.dialogsPage.dialogs}
                               messages={state.dialogsPage.messages}
                               newMessageBody={state.dialogsPage.newMessageBody}
                           />}
                    />
                    <Route path="/profile"
                           render={() => <Profile posts={state.profilePage.posts}
                                                  dispatch={props.store.dispatch.bind(props.store)}
                                                  addPost={props.store.addPost.bind(props.store)}
                                                  newPostText={props.store._state.profilePage.newPostText}
                                                  updateNewPostText={props.store.updateNewPostText.bind(props.store)}
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



