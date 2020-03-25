import React from "react";
import classes from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from './../../../assets/img/user.png'

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto }) => {
  if (!profile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = (e) => {
    if(e.target.files.length) {
      savePhoto(e.target.files[0])
    }
  }

  return (
    <div className={classes.ProfileInfo}>
      <div className={classes.descriptionBlock}>
        <div className={classes.photo}>
          <img src={profile.photos.large || userPhoto} />
        </div>
        {isOwner && <input type={'file'} onChange={onMainPhotoSelected} />}
        <div className={classes.status}>
          <ProfileStatusWithHooks
            status={status}
            updateStatus={updateStatus}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
