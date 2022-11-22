import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from "./components/Header";
import InMail from "./components/InMail";
import MailList from "./components/MailList";
import SendMail from './components/SendMail';
import Sidebar from "./components/Sidebar";
import { selectComposeIsOpen } from './features/mailSlicer';

function App() {
  const isComposePanOpen = useSelector(selectComposeIsOpen);
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
        { isComposePanOpen && <SendMail />  }
      </div>
    </BrowserRouter>
  );
}

export default App;
