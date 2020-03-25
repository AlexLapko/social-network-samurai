import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer"

let state = {
	posts: [
				{ id: 1, message: "Hi, how are you", likesCounts: 15 },
				{ id: 2, message: "It's my first post", likesCounts: 20 },
				{ id: 3, message: "Post", likesCounts: 23 }
			]
}

it('length of posts should be incremented', () => {
	// 1.test data
	let action = addPostActionCreator('Hello');
	// 2.action
	let newState = profileReducer (state, action);
	// 3. expection
	expect(newState.posts.length).toBe(4);
})

it('message of new post should be correct', () => {
	let action = addPostActionCreator('Hello');
	let newState = profileReducer(state, action);
	expect(newState.posts[3].message).toBe('Hello');
})

it('after deleting length of messages should be decrement', () => {
	let action = deletePost(1);
	let newState = profileReducer(state, action);
	expect(newState.posts.length).toBe(2);
})
