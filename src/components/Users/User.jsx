import React from 'react'
import classes from './Users.module.css'
import userPhoto from './../../assets/img/user.png'
import { NavLink } from 'react-router-dom';
import { usersAPI } from "./../../api/api";
import Paginator from './../common/Paginator/Paginator';

let User = ({ user, followingInProgress, unfollowThunk, followThunk }) => {
  return (
    <div className={classes.userWrap} key={user.id}>
      <div>
        <div className={classes.userPhoto}>
          <NavLink to={"/profile/" + user.id}>
            <img
              src={user.photos.small !== null ? user.photos.small : userPhoto}
            />
          </NavLink>
        </div>
        <div>
          {user.followed ? (
            <button
              disabled={followingInProgress.some(id => id === user.id)}
              onClick={() => {
                unfollowThunk(user.id);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={followingInProgress.some(id => id === user.id)}
              onClick={() => {
                followThunk(user.id);
              }}
            >
              Follow
            </button>
          )}
        </div>
      </div>
      <div className={classes.userInfo}>
        <div className={classes.userName}>
          <span>{user.name}</span>
          <span>{user.status}</span>
        </div>
        <div className={classes.userLocation}>
          <span>{"user.location.country"}</span>
          <span>{"user.location.city"}</span>
        </div>
      </div>
    </div>
  );
};

export default User;