import {createStore} from "redux";

export const ADD = "ADD";
export const DELETE = "DELETE";
const localStorageToDo = JSON.parse(localStorage.getItem("todo"));
const currentState = localStorageToDo ? localStorageToDo : [];

const reducer = (state = currentState, action) => {
    switch (action.type){
        case ADD:
            const newToDoObject = {id: action.id, text: action.text};
            const addToDoResult = [newToDoObject, ...state];
            localStorage.setItem("todo", JSON.stringify(addToDoResult));
            return addToDoResult;
        case DELETE:
            const deleteToDoResult = state.filter((state) => state.id !== action.id);
            localStorage.setItem("todo", JSON.stringify(deleteToDoResult));
            return deleteToDoResult;
        default:
            return state;
    }
};

const store = createStore(reducer);

export default store;