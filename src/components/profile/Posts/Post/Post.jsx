import React from 'react';
import s from './Post.module.css';

const Post = (props) =>
{
    return(
      
            <div className={s.item}>

                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI8C4r18JoraIL5qyaRuzh8DFKQrnAEMszI_nHq7Nk3rohuz4QeQ" alt="Simple avatar" />
                {props.message}
                <div>
                    <span>Like</span> <span>{props.likesCount}</span>
                </div>
            </div>      
    );
}

export default Post;