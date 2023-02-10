import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {Message} from './Message/Message';
import {DialogItem} from './DialogItem/DialogItem';
import {DialogPageType} from '../../App';

type StatePropsType = {
    state: DialogPageType
    // dispatch: (e: ActionsType) => void
    updateNewMessageBody: (e: string) => void
    sendMessageCreator: () => void
}

export const Dialogs = (props: StatePropsType) => {

    let dialogsElements = props.state.dialogs.map(person => <DialogItem name={person.name} id={person.id} key={person.id}/>)
    let messagesElements = props.state.messages.map((message)=> <Message message={message.message}/>)

    const onSendMessageClick = () => {
        props.sendMessageCreator()
    }
    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMessageBody( e.currentTarget.value)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div><textarea value={props.state.newMessageBody}
                               onChange={onNewMessageChange}
                               placeholder="Enter your message"></textarea></div>
                <div>
                    <button onClick={onSendMessageClick}>Send</button>
                </div>
            </div>
        </div>
    )
}
