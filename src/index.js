import * as serviceWorker from './serviceWorker';
import store from "./redux/redux-store";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import ReactDOM from 'react-dom/client';
import './index.css';
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);

serviceWorker.unregister();

