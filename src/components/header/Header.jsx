import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {

   

    return(
        <header className={s.header}>
        <img src="https://about.canva.com/wp-content/uploads/sites/3/2016/08/logos-1.png" width="50px" height="50px"></img>

            <div className={s.login}>
            {props.isAuth ?  <p>{props.login}</p> 
            : <NavLink to={'/login'}>Login</NavLink> }
            </div>
      </header>


    );
}

export default Header;