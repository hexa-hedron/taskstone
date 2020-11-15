import { createStore as reduxCreateStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import { todoReducer } from "./reducers/App";

export default function createStore(){
    const store = reduxCreateStore(
        combineReducers({
            todo: todoReducer,
        }),
        applyMiddleware(
            logger,
        )
    );

    return store;
}