import './App.css';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import Main from './page/main/main';
import Nav from './tools/nav/nav';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/main' element={ <Main></Main> }></Route>
      </Routes>
      <Nav></Nav>
      <Main></Main>
    </div>
  );
}

export default App;
