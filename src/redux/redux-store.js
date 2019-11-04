import {combineReducers, createStore} from "redux";
import profileReducer from "./reducers/profilePageReducer";
import dialogsReducer from "./reducers/dialogsPageRecuer";


let reducersBatch = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
});

let store = createStore(reducersBatch);



export default store;