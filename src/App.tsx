import React from 'react';
import './App.css';
import AppRouter from "./router/AppRouter";
import Navbar from "./components/NavBar/Navbar";

function App() {
  return (
    <div className="App">
        <Navbar></Navbar>
        <AppRouter/>
    </div>
  );
}

export default App;
