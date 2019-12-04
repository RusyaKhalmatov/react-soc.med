import React from 'react';
import s from "./users.module.css";
import userPhoto from '../../assets/images/dog.jpg';
import {NavLink} from "react-router-dom";
import * as axios from "axios";


let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsers / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div className={s.paging}>
            {pages.map(p => {
                return <span onClick={(e) => {
                    props.onPageChanged(p);
                }} className={props.currentPage === p && s.selectedPage}>{p}</span>  ////интересный момент проверки значений
            })}
        </div>
        {
            props.users.map(u =>
                <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                        <img className={s.userImg} src={u.photos.small != null ? u.photos.small : userPhoto}
                             alt="avatar"/>
                         </NavLink>
                    </div>
                    <div>
                        {u.followed ? <button onClick={() => {
                            
                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{
                        withCredentials:true,
                        headers: {
                            "API-KEY": "33310757-bb32-4f32-be03-2ca324b4998c"
                        }
                    
                    }).then(
                    responce => {
                       if(responce.data.resultCode == 0)
                       {
                            props.unfollow(u.id);
                       }
                    });
                        }
                    
                    }>Unfollow</button> : <button onClick={() => {

                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{}, {
                        withCredentials:true,
                    headers: {
                        "API-KEY": "33310757-bb32-4f32-be03-2ca324b4998c"
                    }
                }).then(
                    responce => {
                        
                       if(responce.data.resultCode == 0)
                       {
                        props.follow(u.id);
                       }
                        
                    }
                );}}>Follow</button>}

                    </div>
                </span>
                    <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                        {/*<span>
                        <div>{u.location.city}</div>
                        <div>{u.location.country}</div>
                    </span>*/}
                </span>
                </div>
            )


        }</div>
}
export default Users;