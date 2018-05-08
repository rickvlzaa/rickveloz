import React from 'react';
import { render, hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';

import App from './App';
import configStore from './store';

const store = configStore(window.__INITIAL_STATE__);
delete window.__INITIAL_STATE__;

hydrate(
    (
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    )
, document.getElementById('root'));