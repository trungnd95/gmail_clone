import { createMemoryHistory } from 'history';
import React from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Header from "./components/header";
import InMail from "./components/InMail";
import MailList from "./components/MailList";
import Sidebar from "./components/sidebar";

function App() {
  const history = createMemoryHistory();
  return (
    <Router location={history.location} navigator={history}>
      <div className="app">
        <Header />
        <div className='app__body'>
          <Sidebar />
          <Routes>
            <Route exact path="mail" element={<InMail />} />
            <Route exact path="/" element={<MailList />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
