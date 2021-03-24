import React from 'react';
import s from './Post.module.css'
type messageType = {message: string,
    likesCount: number}
const Post = (props: messageType) => {

    return (
        <div className={s.item}>
            <img src='https://cspromogame.ru//storage/upload_images/avatars/3863.jpg'/>
            {props.message}
            <div>
                <span>Like </span>{props.likesCount}
            </div>
        </div>
    )
}
export default Post;