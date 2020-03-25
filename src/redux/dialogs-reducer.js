const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
	dialogs: [
				{ id: "1", name: "Aliaksei" },
				{ id: "2", name: "Olga" },
				{ id: "3", name: "Mark" },
				{ id: "4", name: "Mila" },
				{ id: "5", name: "Sasha" },
				{ id: "6", name: "Dima" }
			],
			messages: [
				{ id: "1", message: "Hi" },
				{ id: "2", message: "How are you?" },
				{ id: "3", message: "Yo" },
				{ id: "4", message: "YoYo" },
				{ id: "5", message: "YoYoYo" }
			],
}

const dialogsReducer = (state = initialState, action) => {

	switch (action.type) {
		case SEND_MESSAGE:
			let newMessage = {
				id: "6",
				message: action.newMessageText
			}
			return {
				...state,
				messages: [...state.messages, newMessage],
			}
		default:
			return state;
	}
}

export const sendMessageActionCreator = (newMessageText) => ({type: SEND_MESSAGE, newMessageText})

export default dialogsReducer;