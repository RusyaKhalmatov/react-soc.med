const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
let initialState = {
    postData:
        [
            {id: 1, msg: "Hi how are you?", likesCount: 12},
            {id: 1, msg: "It's my first post", likesCount: 10}
        ],
    newPostText: '',
    profile: null,
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
        case SET_USER_PROFILE:
        {
            return { ...stateProfilePage, profile: action.profile}
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
};
export let updateNewPostTextActionCreator = (text) => {

    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
};
export let setUserProfileAC = (profile) => ({type:SET_USER_PROFILE, profile});
export default profileReducer;