import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/reducers/profilePageReducer';
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {


    return (
        <StoreContext.Consumer>
            {(store) =>
                {
                    let state = store.getState(); //заменил взятие store из пропсов на взятие из контекста
                    let posts = state.profilePage.postData;
                    let newPostText = state.profilePage.newPostText;

                    let addPost = () => {
                        store.dispatch(addPostActionCreator());
                    };
                    let onPostChange = (text) => {
                        let action = updateNewPostTextActionCreator(text);
                        store.dispatch(action);
                    };
                    return(
                        <MyPosts postData={posts} newPostText={newPostText}
                                 updateNewPostText={onPostChange}
                                 addPost={addPost}/>
                    )
                }
            }
        </StoreContext.Consumer>
    );
}

export default MyPostsContainer;