import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/reducers/profilePageReducer';
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

/*const MyPostsContainer = (props) => {


    return (
        <StoreContext.Consumer>
            {(store) => {
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
                return (
                    <MyPosts postData={posts} newPostText={newPostText}
                             updateNewPostText={onPostChange}
                             addPost={addPost}/>
                )
            }
            }
        </StoreContext.Consumer>
    );
}*/

let mapStateToProps = (state) => {
    return {
        postData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextActionCreator(text));
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;