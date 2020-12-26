import {combineReducers, createStore} from "redux";
//import thunkMiddleware from "redux-thunk";
import globalReducers from "./reducers/globalReducers";

let reducers = combineReducers( 
    {
        math : globalReducers
    } );

let store = createStore(reducers,
    //applyMiddleware(thunkMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
     );
export default store;