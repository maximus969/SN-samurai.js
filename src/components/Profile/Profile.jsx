import React from "react"; 
import { MyPostsContainer } from "./MyPosts/MyPostsContainer";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";

export const Profile = (props) => {

  return (
    <div>
      <ProfileInfo 
          savePhoto={props.savePhoto}
          isOwner={props.isOwner} 
          profile={props.profile} 
          status={props.status} 
          saveProfile={props.saveProfile}
          updateStatus={props.updateStatus} />
      <MyPostsContainer />
    </div>
  )
}