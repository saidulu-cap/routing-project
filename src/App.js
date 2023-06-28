import React from 'react';
import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Userlist from './Userlist';
import Userdetails from './Userdetails';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/userlist' element={<Userlist />} />
        <Route path='/userdetails/:id' element={<Userdetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
