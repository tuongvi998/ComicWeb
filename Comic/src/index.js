import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.scss';
import 'font-awesome/css/font-awesome.min.css';
import {createStore,applyMiddleware} from 'redux';
import  appReducers from './reducers/index_reducer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
const store=createStore(
    appReducers,{}, applyMiddleware(thunk, logger)
);

ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>
        
    , document.getElementById('root'));
serviceWorker.unregister();
