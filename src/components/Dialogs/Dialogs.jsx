import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {sendNewMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/reducers/dialogsPageRecuer";


const Dialogs = (props) => {
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

    let onNewMessageChange = (e) => {
        let body = e.target.value; //e.target -> textarea
        props.onNewMesChange(body);
        //props.store.dispatch(updateNewMessageBodyActionCreator(body));
    }

    return (

        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElement}

            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>


                <div className={s.messageCreate}>
                    <textarea onChange={onNewMessageChange} value={dialogsPage.newMessageBody} cols="70" rows="10"/>
                    <br/>
                    <button>clip</button>
                    <button onClick={onSendMessageClick}>Send</button>
                </div>
            </div>


        </div>


    );
}

export default Dialogs;