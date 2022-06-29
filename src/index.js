import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {Provider} from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css"
import followerReducer from "./modules/follower-reducer";
import editorReducer from "./modules/editor-reducer";


const handleAsync = storeAPI => next => action => {
    console.log({storeAPI, next, action})

    if (typeof action === 'function') {
        return action(storeAPI.dispatch, storeAPI.getState)
    }

    next(action)
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combineReducers({followerReducer, editorReducer}),
    composeEnhancers(applyMiddleware(handleAsync))
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>
);