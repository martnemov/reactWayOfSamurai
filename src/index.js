import * as serviceWorker from './serviceWorker';
import store from "./redux/redux-store";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import ReactDOM from 'react-dom/client';
import './index.css';
import StoreContext from "./StoreContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
let renderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <StoreContext.Provider value={store}>
                    <App/>
                </StoreContext.Provider>
            </BrowserRouter>
        </React.StrictMode>
    );
}

renderEntireTree(store.getState());
store.subscribe(() => {
    let state = store.getState();
    renderEntireTree(state)
});
serviceWorker.unregister();

