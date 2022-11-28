import React, { useState } from 'react';
import HomeSection from '../components/HomeSection';
import { homeDataObj } from "../components/HomeSection/Data";
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';


const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <div className="Home">
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HomeSection {...homeDataObj}/>
    </div>
  );
};

export default Home;