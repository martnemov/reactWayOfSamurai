import './App.css';
import React from 'react';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News"
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import SidebarContainer from "./components/Sidebar/SidebarContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <SidebarContainer/>
            <Routes>
                <Route path='/' element={<Profile/>}/>
                <Route path='/profile' element={<Profile/>}/>
                <Route path='/dialogs' element={<DialogsContainer/>}/>
                <Route path='/news' element={<News/>}/>
                <Route path='/music' element={<Music/>}/>
                <Route path='/settings' element={<Settings/>}/>
                <Route path='/users' element={<UsersContainer/>}/>
            </Routes>
        </div>
    );
}

export default App;