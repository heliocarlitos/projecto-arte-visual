import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Header from './Componentes/Layout/Header';
import Footer from './Componentes/Layout/Footer';

function App() {

  return (

    <>
      <Header />

      <main>

        <BrowserRouter>

          <Routes>

            <Route path="/" element={<Home />} />

          </Routes>

        </BrowserRouter>

      </main>

      <Footer />

    </>
  )
}

export default App;
