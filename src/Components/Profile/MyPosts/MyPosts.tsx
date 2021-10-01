import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

export type postsType = {
    id: number,
    message: string,
    likesCount: number
}
type MyPostsType = {

    posts: Array<postsType>
    newPostText: string
    updateNewPostText: (newText: string) => void
    addPost: () => void
}

const MyPosts: React.FC<MyPostsType> = (props) => {

    let PostsElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    let onAddPost = () => props.addPost()

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.updateNewPostText(text)
    }

    return (
        <div className={s.postsBlock}>
            <h3>New posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                <div className={s.item}>
                    {PostsElements}
                </div>
            </div>
        </div>
    )
}
export default MyPosts;