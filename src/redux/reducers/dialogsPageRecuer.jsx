const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";
let initialState = {

    dialogsData: [
        {id: 1, name: "Rustam"},
        {id: 2, name: "Valery"},
        {id: 3, name: "Yuriy"},
        {id: 4, name: "Artem"},
        {id: 5, name: "Sobit"}],
    messageData: [
        {id: 1, msg: "Hi how are you?"},
        {id: 2, msg: "Hello"},
        {id: 1, msg: "Fuck off"},
        {id: 2, msg: "No"}
    ],
    newMessageBody: ""

};
const dialogsReducer = (stateDialogsPage = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            stateDialogsPage.newMessageBody = action.messageText;
            return stateDialogsPage;
        case SEND_MESSAGE:
            let messageBody = stateDialogsPage.newMessageBody;
            stateDialogsPage.newMessageBody = " ";
            stateDialogsPage.messageData.push({id: 6, msg: messageBody});
            return stateDialogsPage;
        default:
            return stateDialogsPage;
    }

}


export let sendNewMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE,
    }

}
export let updateNewMessageBodyActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        messageText: text
    }
}
export default dialogsReducer;


