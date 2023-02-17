import React from 'react';
import {sendMessageAC, updateNewMessageBodyAC} from '../../redux/dialogs-reducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {DialogPageType} from '../../App';
import {stateType, storeType} from '../../redux/redux-store';

type MapStateToPropsType={
    dialogsPage:DialogPageType
}
type MapDispatchToPropsType={
    updateNewMessageBody:(body:string)=> void
    sendMessageCreator:()=>void
}

const mapStateToProps = (state: stateType):MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch:Dispatch):MapDispatchToPropsType => {
    return {
        updateNewMessageBody:(body:string)=> {
            dispatch(updateNewMessageBodyAC(body))
        },
        sendMessageCreator:()=> {
            dispatch(sendMessageAC())
        }
    }
}

export const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)