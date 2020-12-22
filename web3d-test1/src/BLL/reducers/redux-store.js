import {createStore} from "redux";

function todos(state = [], action) {
    switch (action.type) {
        case 'ADD_TODO':
            return state.concat([action.text]);
        default:
            return state;
    }
}

const store = createStore(todos, ['Use Redux'],
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.dispatch({
    type: 'ADD-TODO',
    text: 'Read the docs'
})

store.subscribe( () => console.log(store.getState()))
