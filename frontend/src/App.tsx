import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import MembersStatus from './components/pages/MembersStatus';
import MemberRagister from './components/pages/MemberRegister';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/MembersStatus' element={<MembersStatus />} />
        <Route path='/MemberRagister' element={<MemberRagister />} />
      </Routes>
    </div>
  );
}

export default App
