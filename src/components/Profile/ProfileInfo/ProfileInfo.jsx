import React from "react";
import { Preloader } from "../../common/Preloader/Preloader";
import s from './ProfileInfo.module.css'
import { ProfileStatus } from "./ProfileStatus";
import { ProfileStatusWithHooks } from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";


export const ProfileInfo = (props) => {

  if (!props.profile) {
    return <Preloader />
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0])
    }
  }

  return <div>
    <div className={s.descriptionBlock}>
      <img src={props.profile.photos.large || userPhoto} className={s.mainPhoto} alt='ava'/>
      {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected} />}
      <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
    </div>
  </div>
}