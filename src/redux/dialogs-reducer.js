const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  

  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 6, message: body }],
      };
    default:
      return state;
  }
};

export const sendMessageCreator = (newMessageBody) => {
  return {
    type: SEND_MESSAGE,
    newMessageBody
  };
};

export default dialogsReducer;
