import React from 'react'
// import axios from "axios"
import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import MembersPage from './components/MenbersPages';
import { Button } from './components/Button';

function App() {
  return (
    <div className='App'>
      {/* <Login /> */}
      <MembersPage />
      <Routes>
        {/* <Route path='/' element={<Home />} /> */}
        {/* <Route path='/login' element={<Login />} /> */}
        {/* <Route path='/MembersPages' element={<MembersPage />} /> */}

      </Routes>
    </div>
  );
}

export default App
