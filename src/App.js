import './App.css';
import React from 'react';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News"
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route, Routes} from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <Sidebar dialogsPage={props.state.dialogsPage}/>
            <Routes>
                <Route path='/profile' element={<Profile
                    profilePage={props.state.profilePage}
                    dispatch={props.dispatch}
                    dialogsPage={props.state.dialogsPage}/>}/>
                <Route path='/dialogs' element={<Dialogs state={props.state.dialogsPage} store={props.store}/>}/>
                <Route path='/news' element={<News/>}/>
                <Route path='/music' element={<Music/>}/>
                <Route path='/settings' element={<Settings/>}/>
            </Routes>
        </div>
    );
}

export default App;