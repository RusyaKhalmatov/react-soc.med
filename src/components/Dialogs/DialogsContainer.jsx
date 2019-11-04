import React from 'react';
import {sendNewMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/reducers/dialogsPageRecuer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

/*const DialogsContainer = (props) => {


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
};*/

let mapStateToProps = (state) => // data from state that is plugged in to props for dialogs page
{
    return {
        dialogsPage: state.dialogsPage,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        onNewMesChange: (body) => {
            dispatch(updateNewMessageBodyActionCreator(body))
        },
        onSendMsgClick: () => {
            dispatch(sendNewMessageActionCreator())
        }
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer;