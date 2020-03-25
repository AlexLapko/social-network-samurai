import React from 'react';
import classes from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {

	let path = "/dialogs/" + props.id;

	return (
    <div className={classes.dialog + " " + classes.active}>
      <img src='https://avatars.mds.yandex.net/get-pdb/1050037/5e7810b0-2ec0-4dca-93c5-06552915f999/s600' />
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
}

export default DialogItem;