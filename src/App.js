import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, 
  Route, Navigate} from "react-router-dom";

import Contact from "./pages/Contact";

import Home from './pages';
// const Home = React.lazy(() => {
//     return new Promise(resolve => {
//       setTimeout(() => resolve(import('./pages')), 5000);
//     });
//   });

function App() {
  return (
    <>
    <Router>
      
        <Routes>
          {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}
          <Route exact path="/home" element={<Home/>} />
            
          {/* This route is for contactus component
          with exact path "/contactus", in 
          component props we passes the imported component*/}
          <Route path="/contact" element={<Contact/>} />
            
          {/* If any route mismatches the upper 
          route endpoints then, redirect triggers 
          and redirects app to home component with to="/" */}
          <Route path="/" element={<Navigate replace to="/home"/>} />

        </Routes>
        
      </Router>
      </>
  );
}

export default App;
