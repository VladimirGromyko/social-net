import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export type postsType = {
    id: number,
    message: string,
    likesCount: number
}
type MyPostsType = {

    posts: Array<postsType>
    //newPostText: string
    //updateNewPostText: (newText: string) => void
    addPost: (newPostBody: string) => void
}

type AddPostType = {
    newPostText: string
}
const AddNewPostForm:React.FC<InjectedFormProps<AddPostType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'} name={'newPostText'} placeholder="Enter you post"/>

            </div>
            <div>
                <button>Add Post</button>
            </div>
        </form>
    )
}
const AddNewPostReduxForm = reduxForm<AddPostType>({
    form: 'ProfileAddNewPostForm'
})(AddNewPostForm)

const MyPosts: React.FC<MyPostsType> = (props) => {

    let PostsElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    //let onAddPost = () => props.addPost()

    // let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     let text = e.currentTarget.value
    //     props.updateNewPostText(text)
    // }
    const onAddPost = (values: AddPostType) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={s.postsBlock}>
            <h3>New posts</h3>
            <AddNewPostReduxForm onSubmit={onAddPost}/>
            {/*
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add Post</button>
                </div>
            </div>
*/}
            <div className={s.posts}>
                <div className={s.item}>
                    {PostsElements}
                </div>
            </div>
        </div>
    )
}
export default MyPosts;