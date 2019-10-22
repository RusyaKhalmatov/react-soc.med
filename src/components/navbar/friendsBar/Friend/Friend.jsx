import React from 'react';
import s from './Friend.module.css';

const Friend = (props) =>
{
    return (
        <div className = {s.container}>
            <div className={s.elem}>
                <img src={props.img} alt="friends Photo" className={s.friendElement}/>
                <p className = {s.friendElement} >{props.name}</p>
            </div>
        </div>
    );
}

export default Friend;