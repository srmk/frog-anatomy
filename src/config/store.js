import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import reduxReset from 'redux-reset';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import rootReducer from '../reducer/combine_reducer';
// import config from "./config";

const history = createBrowserHistory();
const enhancers = [];

const middleware = [thunk, routerMiddleware(history)];

if (process.env.NODE_ENV === "development") {
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f;
    middleware.push(createLogger);
    if (typeof devToolsExtension === "function") {
    //   enhancers.push(devToolsExtension);
    }
}

const reduxComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composeEnhancers = reduxComposer(
    applyMiddleware(...middleware),
    reduxReset(),
    ...enhancers
);

const store = createStore(rootReducer(history), composeEnhancers);

export { store, history };