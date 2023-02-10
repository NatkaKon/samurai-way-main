import React from 'react';
import {sendMessageAC, updateNewMessageBodyAC} from '../../redux/dialogs-reducer';
import {Dialogs} from './Dialogs';
import {StoreContext} from '../../StoreContext';

type StatePropsType = {}


export const DialogsContainer = (props: StatePropsType) => {

    return <StoreContext.Consumer>
        {
            (store) => {
                const state = store.getState().dialogsPage

                const onSendMessageClick = () => {
                    store.dispatch(sendMessageAC())
                }
                const onNewMessageChange = (body: string) => {
                    store.dispatch(updateNewMessageBodyAC(body))
                }

                return <Dialogs
                    updateNewMessageBody={onNewMessageChange}
                    sendMessageCreator={onSendMessageClick}
                    state={state}
                />
            }
        }
    </StoreContext.Consumer>
}
