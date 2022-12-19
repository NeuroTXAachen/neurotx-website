import React, { useEffect, useState, useRef } from "react";
import { FooterComponent } from '../../components/FooterComponent';
import { footerDataObj } from "../../components/FooterComponent/FooterData";
import { projectDataObj } from "../../components/ProjectSection/Data";
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import ProjectSection from '../../components/ProjectSection';

const Projects = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };
  
    return (
    <div className="Home">
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <ProjectSection {...projectDataObj}/>
        <FooterComponent {...footerDataObj}/>
    </div>
    );
}
export default Projects;