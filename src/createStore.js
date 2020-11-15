import { createStore as reduxCreateStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./reducers/App";

export default function createStore(){
    const store = reduxCreateStore(
        combineReducers({
            todo: rootReducer,
        }),
        applyMiddleware(
            logger,
        )
    );

    return store;
}