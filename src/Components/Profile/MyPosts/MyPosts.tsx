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

//    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let addPost = () => {
//        if (newPostElement.current) {
            //let text = newPostElement.current.value
            props.addPost()
 //       }
    }
    // let onPostChange = () => {
    //     if (newPostElement.current) {
    //         let text = newPostElement.current.value
    //         props.updateNewPostText(text)
    //     }
    // }
    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
     //   if (newPostElement.current) {
      //      let text = newPostElement.current.value
            props.updateNewPostText(e.currentTarget.value)
      //  }
    }

    return (
        <div className={s.postsBlock}>
            <h3>New posts</h3>
            <div>
                <div>
                    {/*<textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>*/}
                    <textarea onChange={onPostChange} value={props.newPostText}/>

                </div>
                <div>
                    <button onClick={addPost}>Add Post</button>
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