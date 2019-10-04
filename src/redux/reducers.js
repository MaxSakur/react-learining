const ADD_TEXT = "ADD-TEXT";
const UPDATE_TEXT_VALUE = "UPDATE-TEXT-VALUE";
const ADD_INPUT_DATA = "SHOW-INPUT-DATA";

let initialState = {
  infoPage: [
    { name: "Max", age: 33, id: 0 },
    { name: "Roman", age: 29, id: 1 },
    { name: "Helen", age: 25, id: 2 }
  ],
  infoText: "new text",
  contactPage: {
    feedback: [
      { id: 0, name: "Lory", value: "Nice company" },
      { id: 1, name: "Carlos", value: "Hate this shit" },
      { id: 2, name: "David", value: "God bless me" }
    ],
    contacts: [
      { id: 0, name: "Phone", value: "0980354882" },
      { id: 1, name: "Adress", value: "ул. Анри " },
      { id: 2, name: "Working time", value: "11:00 to 18:00" }
    ]
  }
};

export const addTextReducer = (
  state = [initialState.infoPage, initialState.infoText],
  action
) => {
  if (action.type === ADD_TEXT) {
    let newPost = {
      id: 3,
      name: state.infoText,
      age: 0
    };
    state.infoPage.push(newPost);
    state.infoText = "";
  }
  return state;
};

export const updateTextReducer = (state = initialState.infoText, action) => {
  if (action.type === UPDATE_TEXT_VALUE) {
    state.infoText = action.text;
  }
  return state;
};

export const addInputDataReducer = (
  state = [initialState.feedback, initialState.contacts],
  action
) => {
  if (action.type === ADD_INPUT_DATA) {
    let newInputElement = {
      id: state.feedback.length,
      name: action.name,
      value: action.value
    };
    state.feedback.push(newInputElement);
  }
  return state;
};
