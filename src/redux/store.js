import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'

let store = {
	_state: {
		profilePage: {
			posts: [
				{ id: 1, message: "Hi, how are you", likesCounts: 15 },
				{ id: 2, message: "It's my first post", likesCounts: 20 },
				{ id: 3, message: "Post", likesCounts: 23 }
			],
			newPostText: 'ReactJS'
		},
		dialogsPage: {
			dialogs: [
				{ id: "1", name: "Aliaksei" },
				{ id: "2", name: "Olga" },
				{ id: "3", name: "Mark" },
				{ id: "4", name: "Mila" },
				{ id: "5", name: "Sasha" },
				{ id: "6", name: "Dima" }
			],
			messages: [
				{ message: "Hi" },
				{ message: "How are you?" },
				{ message: "Yo" },
				{ message: "YoYo" },
				{ message: "YoYoYo" }
			],
			newMessageText: ''
		}
	},
	_callSubscriber() {
		console.log('State changed');
	},

	getState() {
		return this._state
	},
	subscribe(observer) {
		this._callSubscriber = observer; // паттерн observer(наблюдатель)
	},

	dispatch(action) {
		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

		this._callSubscriber(this._state);
	}
}

export default store;