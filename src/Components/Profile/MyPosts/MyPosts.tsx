import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
//export type message = string
const MyPosts = () => {
    let Posts = [
        {id: "1", message: "Hi, how are you?", likesCount: 2 },
        {id: "2", message: "Hi, what are you doing?", likesCount: 5 },
        {id: "3", message: "It's my first post.", likesCount: 4 },
    ]
    let PostsElements =Posts
        .map(p=> <Post message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={s.postsBlock}>
            <h3>New posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                <div className={s.item}>
                    {PostsElements}
                    {/*<Post message={PostsData[0].message} likesCount={PostsData[0].likesCount}/>*/}
                </div>
                {/*<Post message={PostsData[1].message} likesCount={PostsData[1].likesCount}/>*/}
                {/*<Post message="It's my first post." likesCount={4}/>*/}
                {/*<Post />
                <Post />*/}
            </div>
        </div>
    )
}
export default MyPosts;