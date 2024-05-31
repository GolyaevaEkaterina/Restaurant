import Header from 'components/Header';
import './App.css';
import { useEffect, useState } from 'react';
import Restaurants from 'components/Restaurants';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RestPage from 'components/RestPage';
import Cart from 'components/Cart';

function App() {
  const cartItemsFromLS = JSON.parse(localStorage.getItem('cartItems'))
  const [restaurants, setRestaurants] = useState([])
  const [cartItems, setCartItems] = useState(cartItemsFromLS === null ? [] : cartItemsFromLS)
  
  useEffect(() => {
    fetch(`https://www.bit-by-bit.ru/api/student-projects/restaurants`)
    .then(data => data.json())
    .then(res => setRestaurants(res))
  }, [])

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
  }, [cartItems])
  
  
  return (
    <BrowserRouter >
      <div className="App bg-slate-100 min-h-screen px-5 md:px-20 py-5 mx-auto">
        <Header />
        <Routes>
          <Route path='/' element={<Restaurants restaurants={restaurants}/>}/>
          <Route path='/cart' element={<Cart cartItems={cartItems} setCartItems={setCartItems}/>}/>
          <Route path='/restaurant/:slug' element={<RestPage setCartItems={setCartItems} cartItems={cartItems} restaurants={restaurants}/>}/>

        </Routes>
      </div>
      
    </BrowserRouter>

  );
}

export default App;
