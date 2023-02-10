import React from 'react';
import {store} from '../../redux/store';
import {sendMessageAC, updateNewMessageBodyAC} from '../../redux/dialogs-reducer';
import {Dialogs} from './Dialogs';
import {storeType} from '../../redux/redux-store';

type StatePropsType = {
    store: storeType
}

export const DialogsContainer = (props: StatePropsType) => {

    let state = props.store.getState().dialogsPage

    const onSendMessageClick = () => {
        store.dispatch(sendMessageAC())
    }
    const onNewMessageChange = (body: string) => {
        store.dispatch(updateNewMessageBodyAC(body))
    }

    return (
        <Dialogs
            updateNewMessageBody={onNewMessageChange}
                 sendMessageCreator={onSendMessageClick}
                 state={state}
        />
    )
}
