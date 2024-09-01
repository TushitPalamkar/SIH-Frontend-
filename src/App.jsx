import React from 'react';
import './App.css';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import Section from './pages/Section';
import Blog from './pages/Blog';
import Explore from './pages/Explore';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import AboutState from './pages/AboutState';
import Layout from './Layout';
import Foods from './pages/Foods';
import Destinations from './pages/Destinations';
import Clothes from './pages/Clothes';
import Festivals from './pages/Festivals';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
      
          <Route path='/' element={<Layout />} >
          <Route index element={<Home/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/explore' element={<Explore/>}/>
          <Route path='/aboutstate/:id' element={<AboutState/>}/>
          <Route path='/foods/:id' element={<Foods/>}/>
          <Route path='/destinations/:id' element={<Destinations/>}/>
          <Route path='/clothes/:id' element={<Clothes/>}/>
          <Route path='/festival/:id' element={<Festivals/>}/>
          </Route>
          
        </Routes>
       
      </Router>
    </div>
  );
}

export default App;
