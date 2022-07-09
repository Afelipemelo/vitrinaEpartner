import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from './components/nadvar';
import Inicio from './components/inicio';
import Mujer from './components/mujer';
import Hombre from './components/hombre';
import Carrito from './components/carrito';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path='/' element={<Inicio/>} />
            <Route path="/inicio" element={<Inicio/>} />
            <Route path="/mujer" element={<Mujer/>} />
            <Route path="/hombre" element={<Hombre/>} />
            <Route path="/carrito" element={<Carrito/>} />
            <Route path="*" element={<Inicio/>} />
      </Routes>
      {/* <Navbar /> */}
  </BrowserRouter>
    </>
  );
}

export default App;