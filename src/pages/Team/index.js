import React, { useEffect, useState, useRef } from "react";
import { FooterComponent } from '../../components/FooterComponent';
import { footerDataObj } from "../../components/FooterComponent/FooterData";
import { teamDataObj } from "../../components/TeamSection/Data";
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import TeamSection from '../../components/TeamSection';

const Team = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };
  
    return (
    <div className="Home">
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <TeamSection {...teamDataObj}/>
        <FooterComponent {...footerDataObj}/>
    </div>
    );
}
export default Team;