import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/reducers/profilePageReducer';
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {

    let state = props.store.getState();
    let posts = state.profilePage.postData;
    let newPostText = state.profilePage.newPostText;

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    };
    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    };

    return (<MyPosts postData={posts} newPostText={newPostText} updateNewPostText={onPostChange} addPost={addPost}/>);
}

export default MyPostsContainer;