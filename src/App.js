import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from "./components/header";
import InMail from "./components/InMail";
import MailList from "./components/MailList";
import Sidebar from "./components/sidebar";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <div className='app__body'>
          <Sidebar />
          <Routes>
            <Route path="/mail" element={<InMail />} />
            <Route path="/" element={<MailList />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
