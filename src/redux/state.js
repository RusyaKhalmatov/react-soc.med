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
       /* usersPage:
            {
            users: [
                {id: 1,photoURL:"https://yandex.uz/images/search?pos=6&img_url=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fd8%2F80%2F60%2Fd88060cbfba44538ee4e9d29ecfb43d5.jpg&text=%D0%BD%D0%B0%D0%B3%D0%B8%D0%B5%D0%B2&rpt=simage", fullname:"Rustam", status: "Hey Rustam me", location: {city:"Tashkent", country:"Uzbekistan"}, followed: false},
                {id: 2,photoURL:"https://yandex.uz/images/search?pos=6&img_url=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fd8%2F80%2F60%2Fd88060cbfba44538ee4e9d29ecfb43d5.jpg&text=%D0%BD%D0%B0%D0%B3%D0%B8%D0%B5%D0%B2&rpt=simage", fullname:"Timur" , status: "Timur fasd", location: {city:"Tashkent", country:"Uzbekistan"}, followed: true},
                {id: 3,photoURL:"https://yandex.uz/images/search?pos=6&img_url=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fd8%2F80%2F60%2Fd88060cbfba44538ee4e9d29ecfb43d5.jpg&text=%D0%BD%D0%B0%D0%B3%D0%B8%D0%B5%D0%B2&rpt=simage", fullname:"Avzal" , status: "Good fasd", location: {city:"Tashkent", country:"Uzbekistan"}, followed: true},
                {id: 4,photoURL:"https://yandex.uz/images/search?pos=6&img_url=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fd8%2F80%2F60%2Fd88060cbfba44538ee4e9d29ecfb43d5.jpg&text=%D0%BD%D0%B0%D0%B3%D0%B8%D0%B5%D0%B2&rpt=simage", fullname:"Ratmir" , status: "False fasade fasd", location: {city:"Tashkent", country:"Uzbekistan"}, followed: true},
                {id: 5,photoURL:"https://yandex.uz/images/search?pos=6&img_url=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fd8%2F80%2F60%2Fd88060cbfba44538ee4e9d29ecfb43d5.jpg&text=%D0%BD%D0%B0%D0%B3%D0%B8%D0%B5%D0%B2&rpt=simage", fullname:"Botir" , status: "Im the best", location: {city:"Tashkent", country:"Uzbekistan"}, followed: false},
                {id: 6,photoURL:"https://yandex.uz/images/search?pos=6&img_url=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fd8%2F80%2F60%2Fd88060cbfba44538ee4e9d29ecfb43d5.jpg&text=%D0%BD%D0%B0%D0%B3%D0%B8%D0%B5%D0%B2&rpt=simage", fullname:"Bobur" , status: "Who knows", location: {city:"Tashkent", country:"Uzbekistan"}, followed: true}

            ]
        }*/

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
