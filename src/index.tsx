import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import './index.css';
import {App, RootStateType} from './App';
import {BrowserRouter} from 'react-router-dom';
import {store} from './redux/redux-store';
import {Provider} from './StoreContext';

const rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider value={store}>
                <App/>
            </Provider>

        </BrowserRouter>, document.getElementById('root'));
}

rerenderEntireTree(store.getState())

store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state)
})

