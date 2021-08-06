import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi", likesCount: "15" },
        { id: 2, message: "Hello, my dear friend", likesCount: "20" },
        { id: 3, message: "Yo", likesCount: "12" },
        { id: 4, message: "Ok", likesCount: "13" },
      ],
      newPostText: "it-kamasutra",
      newMessageBody: ''
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Max" },
        { id: 2, name: "Seryi" },
        { id: 3, name: "Lera" },
        { id: 4, name: "Silvia" },
        { id: 5, name: "Lena" },
        { id: 6, name: "Valera" },
      ],
      messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "What's up" },
        { id: 3, message: "Hey bro" },
        { id: 4, message: "Yo" },
        { id: 5, message: "Yo" },
        { id: 6, message: "Yo" },
      ],
    },
  },
  _callSubscriber() {
    console.log("ok");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._callSubscriber(this._state)
  },
};


export default store;
