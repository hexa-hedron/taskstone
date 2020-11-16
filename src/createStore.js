import { createStore } from "redux";
import logger from "redux-logger";
import rootReducer from "./reducers/App";

export default function createStore(){
    const store = reduxCreateStore(
        combineReducers({
            root: rootReducer,
        }),
        applyMiddleware(
            logger,
        )
    );

    return store;
}