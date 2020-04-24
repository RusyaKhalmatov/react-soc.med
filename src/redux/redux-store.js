import {combineReducers, createStore, applyMiddleware} from "redux";
import profileReducer from "./reducers/profilePageReducer";
import dialogsReducer from "./reducers/dialogsPageRecuer";
import usersReducer from "./reducers/usersPageReducer";
import authReducer from "./reducers/authPageReducer";
import thunkMiddleware from "redux-thunk";

let reducersBatch = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,

});

let store = createStore(reducersBatch, applyMiddleware(thunkMiddleware));



export default store;