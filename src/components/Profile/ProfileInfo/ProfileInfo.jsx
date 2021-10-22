import React from "react";
import { Preloader } from "../../common/Preloader/Preloader";
import s from './ProfileInfo.module.css'
import { ProfileStatus } from "./ProfileStatus";
import { ProfileStatusWithHooks } from "./ProfileStatusWithHooks";

export const ProfileInfo = (props) => {

  if (!props.profile) {
    return <Preloader />
  }

  return <div>
    <div>
      {/* <img
        src="https://klike.net/uploads/posts/2019-01/1547622229_14.jpg"
        alt="nature"
      /> */}
    </div>
    <div className={s.descriptionBlock}>
      <img src={props.profile.photos.large} alt='ava'/>
      <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
    </div>
  </div>
}