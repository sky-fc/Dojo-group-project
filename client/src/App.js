import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './views/Main'; 
import './styles/App.css';
import './styles/index.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} path="/" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

