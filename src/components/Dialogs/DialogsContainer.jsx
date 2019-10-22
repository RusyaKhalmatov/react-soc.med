import React from 'react';
import {sendNewMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/reducers/dialogsPageRecuer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
    let state = props.store.getState();
    let dialogsPage = state.dialogsPage;

    let onSendMessageClick = () => {
        props.store.dispatch(sendNewMessageActionCreator());
    };

    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyActionCreator(body));
    };

    return (
        <Dialogs onNewMesChange={onNewMessageChange} onSendMsgClick={onSendMessageClick}
                 dialogsPage={dialogsPage}/>
    );
};

export default DialogsContainer;