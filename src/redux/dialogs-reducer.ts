import {ActionsType, DialogPageType} from './State';

export const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
export const SEND_MESSAGE = 'SEND_MESSAGE'

export const dialogsReducer = (state:DialogPageType, action:ActionsType) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.messageBody
            return state
        case SEND_MESSAGE:
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.messages.push({id: 6, message: body})
            return state
        default:
            return state
    }
}


export type UpdateNewMessageBodyType = ReturnType<typeof updateNewMessageBodyAC>
export type SendMessageACType = ReturnType<typeof sendMessageAC>



export const updateNewMessageBodyAC = (newMessageBody: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        messageBody: newMessageBody
    } as const
        }

export const sendMessageAC = () => {
    return {
        type: SEND_MESSAGE,
    } as const
        }