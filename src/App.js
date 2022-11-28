import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';

import Home from './pages';
// const Home = React.lazy(() => {
//     return new Promise(resolve => {
//       setTimeout(() => resolve(import('./pages')), 5000);
//     });
//   });

function App() {
  return (
    <Home/>
  );
}

export default App;
