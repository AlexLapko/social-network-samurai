import React from 'react'
import classes from './../Header/Header.module.css'
import { NavLink } from 'react-router-dom'

const Header = (props) => {
  return (
    <header className={classes.Header}>
      <img src="https://www.designfreelogoonline.com/wp-content/uploads/2016/03/00106-3D-company-logo-design-free-logo-online-Template-03.png" />

      <div className={classes.login}>
        {props.isAuth 
          ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
          : <NavLink to={"/login"}>Login</NavLink>}
      </div>
    </header>
  );
}


export default Header;