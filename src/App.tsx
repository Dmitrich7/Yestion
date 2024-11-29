import React, {useEffect} from 'react';
import './App.css';
import AppRouter from "./router/AppRouter";
import Navbar from "./components/NavBar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import {useAppSelector} from "./hooks/redux";

function App() {
    const {isLoggedIn} = useAppSelector(state => state.persistedLoginReducer)
    return (
        <div className="App">
            <Navbar/>
            <div className="Nav">
                {isLoggedIn&&<Sidebar/>}
            </div>
            <div className="Router">
                <AppRouter/>
            </div>
        </div>
    );
}

export default App;
