import React from 'react';
import {socialLinks, pageLinks} from "../data";
import FooterComponent from "./FooterComponent";

const Footer = () => {
    return (
        <footer className="section footer">
            <FooterComponent socialLinks={socialLinks} pageLinks={pageLinks}/>
        </footer>
    );
};

export default Footer;