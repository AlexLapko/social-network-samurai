import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'
import {Field, reduxForm} from 'redux-form'
import {required, maxLengthCreator} from './../../../utils/validators/validators' 
import { Element } from "./../../../hoc/form";

const MyPosts = (props) => {

  let postsElements = [...props.posts].reverse().map(p => <Post message={p.message} key={p.id} likesCounts={p.likesCounts} />)

  let addNewPostText = (value) => {
    props.addPost(value.newPostText);
  }
 
	return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <AddPostFormRedux onSubmit={addNewPostText}/>
      <div className={classes.posts}>
        { postsElements }
      </div>
    </div>
  );
}

const maxLength30 = maxLengthCreator(30)
const Textarea = Element("textarea");

const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          validate={[required, maxLength30]}
          component={Textarea}
          name="newPostText"
          placeholder="Enter your text"
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
}

const AddPostFormRedux = reduxForm({form: 'addPostText'})(AddPostForm);

export default MyPosts;