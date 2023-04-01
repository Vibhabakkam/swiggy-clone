import './App.css'
import Homepage from './Component/Homepage';
import SignUp from './Component/SignUp';
import Home from './Component/Home';
import Login from './Component/Login';
import Addproduct from './Component/Addproduct';
import Cart from './Component/cart';
import SingleProductPage from './Component/SingleProductPage';
import Search from './Component/Search';
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div>
      <Routes>
      <Route excat path='/' element={<Home />} />
      <Route excat path='/addproduct' element={<Addproduct />} />
      <Route excat path='/homepage' element={<Homepage />} />
      <Route excat path='/signup' element={<SignUp />} />
      <Route excat path='/login' element={<Login />} />
      <Route excat path='/cart' element={<Cart/>} />
      <Route excat path='/home/:id' element={<SingleProductPage/>} />
      <Route excat path='/search/:name' element={<Search/>}/>
        <Route />
      </Routes>
    </div>
  );
}

export default App;
