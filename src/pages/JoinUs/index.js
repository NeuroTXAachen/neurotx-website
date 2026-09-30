import React, { useState } from "react";
import { FooterComponent } from "../../components/FooterComponent";
import { footerDataObj } from "../../components/FooterComponent/FooterData";
import { joinUsDataObj } from "../../components/JoinUsSection/Data";
import JoinUsSection from "../../components/JoinUsSection";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

const JoinUs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="Home">
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <JoinUsSection {...joinUsDataObj} />
      <FooterComponent {...footerDataObj} />
    </div>
  );
};

export default JoinUs;
