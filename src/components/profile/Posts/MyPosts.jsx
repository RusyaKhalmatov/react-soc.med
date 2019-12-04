import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

    let postsElements = props.postData.map(p =>
        <Post className={s.thePost}
              message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef(); // создание ссылки на элемент textarea

    let addPost = () => { //функция добавляет новый пост. Функция добавления поста приходит из пропсов.
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }


    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} rows="5" cols="50"
                              value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}> Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}

            </div>
        </div>
    );
}

export default MyPosts;