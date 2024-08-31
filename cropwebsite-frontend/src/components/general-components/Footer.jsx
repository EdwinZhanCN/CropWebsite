import React from "react";
import '@/style/FooterCSS.css';
import { useLocation } from 'react-router-dom';
import {FaGithub} from "react-icons/fa";

function Footer() {
    const location = useLocation();
    const currentPath = location.pathname;
    const isEnableFooter = currentPath !== '/product' && currentPath !== '/origin'
    return (
        <div>
            {/* other components */}
            {isEnableFooter &&
                <footer>
                    <div className="footer">
                        <div className="footer-links">
                            <h4>Catalog</h4>
                            <a href="/">Home</a>
                            <a href="/">About</a>
                            <a href="/">Services</a>
                            <a href="/">Contact</a>
                        </div>
                        <div className="footer-links">
                            <h4>Social Media</h4>
                            <a href="/">Facebook</a>
                            <a href="/">Twitter</a>
                            <a href="/">Instagram</a>
                            <a href="/">LinkedIn</a>
                        </div>
                        <div className="footer-links">
                            <h4>Social Media</h4>
                            <a href="/">Facebook</a>
                            <a href="/">Twitter</a>
                            <a href="/">Instagram</a>
                            <a href="/">LinkedIn</a>
                        </div>
                        <div className="footer-info">
                        </div>
                        <div>
                            <a href= "https://github.com/EdwinZhanCN" className="footer-bottom">
                                <p>&copy; EdwinZhanCN</p>
                                <FaGithub/>
                            </a>
                        </div>
                    </div>
                </footer>
            }
        </div>

    );
}

export default Footer;