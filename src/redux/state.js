import profileReducer from "./reducers/profilePageReducer";
import dialogsReducer from "./reducers/dialogsPageRecuer";

let store = {

    _state: {
        profilePage:
            {
                postData:
                    [
                        {id: 1, msg: "Hi how are you?", likesCount: 12},
                        {id: 1, msg: "It's my first post", likesCount: 10}
                    ],
                newPostText: '',


            },
        dialogsPage:
                {

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

                },
        sidebar:
            {
                friends: [
                    {id: 2, name: "Valery"},
                    {id: 3, name: "Yuriy"},
                    {id: 4, name: "Artem"},
                    {id: 5, name: "Sobit"}
                ]
            },


    },
    rerenderEntireTree() {
    },

   /* _addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.postData.push(newPost);
        this._state.profilePage.newPostText = '';
        this.rerenderEntireTree(this._state);
    },
    _updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this.rerenderEntireTree(this._state);
    },
    _callSubscriber() {
        this.rerenderEntireTree();
    },

    */
    dispatch(action) {

        /*if (action.type === 'ADD-POST') {
            this._addPost();
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._updateNewPostText(action.newText);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.messageText;
            this.rerenderEntireTree(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let messageBody = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = " ";
            this._state.dialogsPage.messageData.push({id: 6, msg: messageBody});
            this.rerenderEntireTree(this._state);
        }*/

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this.rerenderEntireTree(this._state);
    },

    subscribe(observer) {
        this.rerenderEntireTree = observer;
    },
    getState() {
        return this._state;
    }
}




export default store;
