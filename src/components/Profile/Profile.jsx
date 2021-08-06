import React from "react";
import { MyPosts } from "./MyPosts/MyPosts";
import { MyPostsContainer } from "./MyPosts/MyPostsContainer";
import s from './Profile.module.css'
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";

export const Profile = (props) => {

  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer />
    </div>
  )
}