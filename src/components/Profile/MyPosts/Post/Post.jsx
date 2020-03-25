import React from 'react'
import classes from './Post.module.css'

const Post = (props) => {
	return (	
		<div className={classes.Post__item}>
			<img className={classes.Post__photo} src='https://www.meme-arsenal.com/memes/50569ac974c29121ff9075e45a334942.jpg' />
			{ props.message }
			<div>
				<span>like - {props.likesCounts }</span>
			</div>
		</div>
	)
}

export default Post;