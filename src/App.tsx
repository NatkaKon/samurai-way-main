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
import {RootStateType} from './Redax/State';


type AppPropsType = {
    state: RootStateType
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

function App(props: AppPropsType) {


    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs"
                           render={() => <Dialogs dialogs={props.state.dialogsPage.dialogs}
                                                  messages={props.state.dialogsPage.messages}
                           />}
                    />
                    <Route path="/profile"
                           render={() => <Profile posts={props.state.profilePage.posts}
                                                  addPost={props.addPost}
                                                  newPostText={props.state.profilePage.newPostText}
                                                  updateNewPostText={props.updateNewPostText}
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


export default App;
