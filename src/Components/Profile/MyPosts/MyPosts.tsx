import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

<<<<<<< HEAD

=======
>>>>>>> 5af59c8 (09-09-2021 commit - with usersAPI)
export type postsType = {
    id: number,
    message: string,
    likesCount: number
}
type MyPostsType = {
<<<<<<< HEAD
=======

>>>>>>> 5af59c8 (09-09-2021 commit - with usersAPI)
    posts: Array<postsType>
    newPostText: string
    updateNewPostText: (newText: string) => void
    addPost: () => void
<<<<<<< HEAD

=======
>>>>>>> 5af59c8 (09-09-2021 commit - with usersAPI)
}

const MyPosts: React.FC<MyPostsType> = (props) => {

    let PostsElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

<<<<<<< HEAD
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
=======
    let onAddPost = () => props.addPost()

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.updateNewPostText(text)
>>>>>>> 5af59c8 (09-09-2021 commit - with usersAPI)
    }

    return (
        <div className={s.postsBlock}>
            <h3>New posts</h3>
            <div>
                <div>
<<<<<<< HEAD
                    {/*<textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>*/}
                    <textarea onChange={onPostChange} value={props.newPostText}/>

                </div>
                <div>
                    <button onClick={addPost}>Add Post</button>
=======
                    <textarea onChange={onPostChange} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add Post</button>
>>>>>>> 5af59c8 (09-09-2021 commit - with usersAPI)
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