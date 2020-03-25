import React from 'react'
import classes from './../Navbar/Navbar.module.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
	return (
		<nav className={classes.Navbar}>
			<ul>
				<li className={classes.item}>
					<NavLink to="/profile" activeClassName={classes.activeLink}>Profile</NavLink>
				</li>
				<li className={classes.item}>
					<NavLink to="/dialogs" activeClassName={classes.activeLink}>Message</NavLink>
				</li>
				<li className={classes.item}>
					<NavLink to="/users" activeClassName={classes.activeLink}>Users</NavLink>
				</li>
				<li className={classes.item}>
					<NavLink to="/news" activeClassName={classes.activeLink}>News</NavLink>
				</li>
				<li className={classes.item}>
					<NavLink to="/music" activeClassName={classes.activeLink}>Music</NavLink>
				</li>
				<li className={classes.item}>
					<NavLink to="/settings" activeClassName={classes.activeLink}>Settings</NavLink>
				</li>
				<li className={classes.item}>
					<NavLink to="/friends" activeClassName={classes.activeLink}>Friends</NavLink>				
				</li>
			</ul>
		</nav>
	)
}

export default Navbar;