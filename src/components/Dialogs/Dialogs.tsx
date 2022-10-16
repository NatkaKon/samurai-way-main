import React from "react";
import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogPageType} from '../../Redax/State';


export const Dialogs = (props: DialogPageType) => {

    let dialogsElements = props.dialogs.map(el=><DialogItem name={el.name} id={el.id} key={el.id}/>)
    let messagesElements = props.messages.map(el=> <Message message={el.message} key={el.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}