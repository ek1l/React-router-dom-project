import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Produtos from './components/Produtos';
import Footer from './components/Footer';
import Header from './components/Header';
import Contato from './components/Contato';
import Produto from './components/Produto';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="Content">
          {' '}
          <Routes>
            <Route path="/" element={<Produtos />}></Route>
            <Route path="produto/:id" element={<Produto />}></Route>
            <Route path="/contato" element={<Contato />}></Route>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
