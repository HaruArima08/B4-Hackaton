import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import MembersStatus from './components/pages/MembersStatus';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/MembersStatus' element={<MembersStatus />} />

      </Routes>
    </div>
  );
}

export default App
