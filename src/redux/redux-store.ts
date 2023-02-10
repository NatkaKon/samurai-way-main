import {combineReducers, createStore, Store} from 'redux';
import {profileReducer} from './profile-reducer';
import {dialogsReducer} from './dialogs-reducer';
import {ActionsType} from './store';


export type RootState=typeof reducers
export type ReduxStateType=ReturnType<RootState>

export type StoreType=Store<ReduxStateType, ActionsType>

let reducers=combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer
})
export let store:StoreType=createStore(reducers)
export type storeType = typeof store


// export type stateType = ReturnType<typeof reducers>
// let store = createStore(reducers)/
// export type storeType = typeof store