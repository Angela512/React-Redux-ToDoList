import {createStore} from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const addToDo = (text, id) => {
    return {
        type: ADD_TODO,
        text,
        id
    };
};

const deleteToDo = (id) => {
    return{
        type: DELETE_TODO,
        id
    };
};

const reducer = (state = [], action) => {
    console.log(action);
    switch(action.type){
        case ADD_TODO:
            return [{text: action.text, id: action.id}, ...state];
        case DELETE_TODO:
            return state.filter(toDo => toDo.id !== action.id);
        default:
            return state;
    }
}
const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

const dispatchAddToDo = (text, id) => {
    store.dispatch(addToDo(text, id));
};

const dispatchDeleteToDo = (event) => {
    const id = parseInt(event.target.parentNode.id);
    store.dispatch(deleteToDo(id));
};

const paintToDos = () => {
    const toDos = store.getState(); 
    ul.innerText = ""; //array안에 있는 요소들을 계속 다시 paint함. 이걸 방지하기 위해. forEach에서 paint하기전에 이미 paint된 li들 없애줌
    toDos.forEach(toDo => {
        const li = document.createElement("li");
        const btn = document.createElement("button");
        btn.innerText = "DEL";
        btn.addEventListener("click", dispatchDeleteToDo);
        li.id = toDo.id;
        li.innerText = toDo.text;
        ul.appendChild(li);
        li.appendChild(btn);
    })
};

store.subscribe(paintToDos);

const onSubmit = event => {
    event.preventDefault();
    const toDo = input.value;
    const date = Date.now();
    input.value = "";
    dispatchAddToDo(toDo, date);
};

form.addEventListener("submit", onSubmit);