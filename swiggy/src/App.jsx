import './App.css'
import Homepage from './Component/Homepage';
import SignUp from './Component/SignUp';
import Home from './Component/Home';
import Login from './Component/Login';
import Addproduct from './Component/Addproduct';
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div>
      <Routes>
      <Route excat path='/addproduct' element={<Addproduct />} />
      <Route excat path='/home' element={<Home />} />
      <Route excat path='/homepage' element={<Homepage />} />
      <Route excat path='/signup' element={<SignUp />} />
      <Route excat path='/login' element={<Login />} />
        <Route />
      </Routes>
    </div>
  );
}

export default App;
