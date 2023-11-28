import * as serviceWorker from './serviceWorker';
import store from "./redux/store";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
let renderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    store={store}
                    state={state}
                    dispatch={store.dispatch.bind(store)}/>
            </BrowserRouter>
        </React.StrictMode>
    );
}

renderEntireTree(store._state);
store.subscribe(renderEntireTree);
serviceWorker.unregister();

