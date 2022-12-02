import React from 'react';
import './App.css';
import Screen1 from './component/Screen1';
import { Routes, Route } from "react-router-dom";
import Screen2 from './component/Screen2';

function App() {

  return (

    <Routes>
      <Route path="/" element={<div><Screen1 /></div>}></Route>
      <Route path="/screen2" element={<div><Screen2 /></div>}></Route>
    </Routes>

  );
}

export default App;
