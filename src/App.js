/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';
import Home from './components/Home';
import NavBar from './components/NavBar';
import FetchData from './components/FetchData';

const App = () => (
  <div className="App">
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/FetchData" element={<FetchData />} />
    </Routes>
  </div>
);

export default App;
