import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Posts from './pages/Posts';
import Jobs from './pages/Jobs';
import Gallery from './pages/Gallery';
import Groups from './pages/Groups';
import Directory from './pages/Directory';
import Yearbook from './pages/Yearbook';
import Profile from './pages/Profile';
import LoginRegister from './pages/LoginRegister';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/directory" element={<Directory />} />
        <Route path="/yearbook" element={<Yearbook />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/loginregister" element={<LoginRegister />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
