import React from "react";
import s from './ProfileInfo.module.css'

export const ProfileInfo = () => {
  return <div>
    <div>
      <img
        src="https://klike.net/uploads/posts/2019-01/1547622229_14.jpg"
        alt="nature"
      />
    </div>
    <div className={s.descriptionBlock}>
      ava + description
    </div>
  </div>
}