import { useState } from 'react'

import './App.css'
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Company from './pages/Company'
import { Route, Router,BrowserRouter,Routes } from 'react-router-dom'
import Career from './pages/Career';
import Blog from './pages/Blog';
import PrivacyPolicy from './pages/PrivacyPolicy';
import BlokInner from './pages/BlokInner';
import TeamTemlite from './pages/TeamTemlite';
import CareerPageInner from './pages/CareerPageInner';

function App() {
  

 return (
//   <Router>
//  <Navbar />
//   <Route>
//     <Route path="company" element={<Company />} />
//   </Route>
//   </Router>
  <BrowserRouter>
  <Navbar />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/company" element={<Company />} />
    <Route path="/career" element={<Career />} />
  
    <Route path="/blog" element={<Blog />} />
    <Route path="/privacypolicy" element={<PrivacyPolicy />} />
    <Route path="/blokinner" element={<BlokInner />} />
    <Route path="/teamtemplite" element={<TeamTemlite />} />
    <Route path="/careerpageinner" element={<CareerPageInner />} />
  </Routes>
</BrowserRouter>
 )
}

export default App
