import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {sendNewMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/reducers/dialogsPageRecuer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
    let state = props.store.getState();
    let dialogsPage = state.dialogsPage;

    let dialogsElement = dialogsPage.dialogsData.map(
        dialog => <DialogItem name={dialog.name} id={dialog.id}/>
    );


    let messagesElements = dialogsPage.messageData.map(
        message => <Message msg={message.msg}/>
    );

    let onSendMessageClick = () => {
        props.store.dispatch(sendNewMessageActionCreator());
    };

    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyActionCreator(body));
    }

    return (
        <Dialogs onNewMesChange = { onNewMessageChange }/>
        );
}

export default DialogsContainer;