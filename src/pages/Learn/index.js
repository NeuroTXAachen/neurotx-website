import React, { useEffect, useState, useRef } from "react";
import { FooterComponent } from "../../components/FooterComponent";
import { footerDataObj } from "../../components/FooterComponent/FooterData";
import { learnDataObj } from "../../components/LearnSection/Data";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import LearnSection from "../../components/LearnSection";

const Learn = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="Home">
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <LearnSection {...learnDataObj} />
      <FooterComponent {...footerDataObj} />
    </div>
  );
};
export default Learn;
