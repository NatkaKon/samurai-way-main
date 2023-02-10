import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import './index.css';
import {App, RootStateType} from './App';
import {BrowserRouter} from 'react-router-dom';
import {store} from './redux/redux-store';

const rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                dispatch={store.dispatch.bind(store)}
                 store={store}

            />
        </BrowserRouter>, document.getElementById('root'));
}

rerenderEntireTree(store.getState())

store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state)
})

