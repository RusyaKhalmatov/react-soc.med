import React from 'react';
import {sendNewMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/reducers/dialogsPageRecuer";
import Dialogs from "./Dialogs";



const DialogsContainer = (props) => {


    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();
                    let dialogsPage = state.dialogsPage;

                    let onSendMessageClick = () => {
                        store.dispatch(sendNewMessageActionCreator());
                    };

                    let onNewMessageChange = (body) => {
                        store.dispatch(updateNewMessageBodyActionCreator(body));
                    };
                    return <Dialogs onNewMesChange={onNewMessageChange} onSendMsgClick={onSendMessageClick}
                                    dialogsPage={dialogsPage}/>
                }
            }
        </StoreContext.Consumer>

    );
};

export default DialogsContainer;