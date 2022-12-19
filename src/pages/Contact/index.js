import React, { useEffect, useState, useRef } from "react";
import { FooterComponent } from '../../components/FooterComponent';
import { footerDataObj } from "../../components/FooterComponent/FooterData";
import { contactDataObj } from "../../components/ContactSection/Data";
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import ContactSection from '../../components/ContactSection';

const Contact = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };
  
    return (
    <div className="Home">
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <ContactSection {...contactDataObj}/>
        <FooterComponent {...footerDataObj}/>
    </div>
    );
}
export default Contact;