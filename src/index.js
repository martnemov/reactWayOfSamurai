import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postsData = [
    {message: 'Hello, world!', likes: 12},
    {message: 'My first post', likes: 22},
]
let companionsData = [
    {id: 1, name: 'Alex'},
    {id: 2, name: 'Bob'},
    {id: 3, name: 'John'},
    {id: 4, name: 'Sara'},
]
let messagesData = [
    {id: 1, text: 'Hello!'}, {id: 2, text: 'Sorry for a late'}, {id: 3, text: 'Bye-bye'},
    {id: 4, text: 'For what!?'},
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App postsData={postsData} companionsData={companionsData} messagesData={messagesData}/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
