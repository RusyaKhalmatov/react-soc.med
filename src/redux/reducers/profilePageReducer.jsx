const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
let initialState = {
    postData:
        [
            {id: 1, msg: "Hi how are you?", likesCount: 12},
            {id: 1, msg: "It's my first post", likesCount: 10}
        ],
    newPostText: '',
}


const profileReducer = (stateProfilePage = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            {
            let newPost = {
                id: 5,
                message: stateProfilePage.newPostText,
                likesCount: 0
            };
            let stateCopy = {...stateProfilePage};
            stateCopy.postData = [...stateProfilePage.postData]
            stateCopy.postData.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
             }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...stateProfilePage};
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        default:
            return stateProfilePage;
    }
}
export let addPostActionCreator = () => {
    let ADD_POST = 'ADD-POST';
    return {
        type: ADD_POST
    }
}
export let updateNewPostTextActionCreator = (text) => {

    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}
export default profileReducer;