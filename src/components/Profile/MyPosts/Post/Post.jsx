import React from "react";
import s from './Post.module.css'

export const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='https://www.meme-arsenal.com/memes/87d4bfeed251dba0ce946e9e594dbdb6.jpg' alt='avatar' />
      {props.message}
      <div>
        <span>like</span> {props.likesCount}
      </div>
    </div>
  )
}