import * as serviceWorker from './serviceWorker';
import state, {addPost, updatePostText, subscribe} from "./redux/state";
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
                    state={state}
                    addPost={addPost}
                    updatePostText={updatePostText}/>
            </BrowserRouter>
        </React.StrictMode>
    );
}

renderEntireTree(state);
subscribe(renderEntireTree);
serviceWorker.unregister();

