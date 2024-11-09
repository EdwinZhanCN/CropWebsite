import {useEffect, useRef, useState} from 'react';
import React from "react";
import {FaBars, FaTimes} from 'react-icons/fa';
import '@/style/NavBarCSS.css';
import {links, social} from "@/data/data";
import logo from '@/assets/logo192.png';

const baseUrl = import.meta.env.VITE_BACKEND_URL;

const NavBar = () => {
    //state for links
    const [showLinks, setShowLinks] = useState(false);

    //contact information
    const [contacts, setContacts] = useState([]);

    //reference for links container
    const linksRef = useRef(null);

    //function to toggle links
    const toggleLinks = () => {
        setShowLinks(!showLinks);
    }

    //style for links container
    const linkStyle = {
        height:showLinks?
            `100vh`:
            "0px",
    }

    useEffect(() => {
        if (showLinks) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [showLinks]);

    // get the social contact information from backend
    useEffect(() => {
        async function fetchSocial() {
            try {
                // 使用自定义的 get 方法请求社交数据
                await get(`${baseUrl}/api/static/contacts`, (res) => {
                    console.log('Social fetched:', res);
                    setContacts(res); // 直接设置获取的数据
                }, (error) => {
                    console.error('Failed to fetch social:', error);
                });
            } catch (error) {
                console.error('Error fetching social:', error);
            }
        }

        fetchSocial().then(() => console.log('Social fetched'));
    }, []);


    return (
        <>
            <nav>
                <div className="nav-center">
                    <div className="nav-header">
                        <a href= '/'><img src={logo} className="logo" alt="logo"/></a>
                        <button className="nav-toggle" onClick={toggleLinks}>
                            {showLinks ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                    <div className = "links-container" style={linkStyle}>
                        <ul className="links" ref={linksRef}>
                            {links.map((link) => {
                                const {id, url, text, submenu} = link;
                                return (
                                    <li key = {id}>
                                        <div>
                                            {submenu ?
                                                <div className="dropdown">
                                                    <a href={url}>{text}</a>
                                                    <div className="menu">
                                                        {submenu.map((sublink) => {
                                                            const {id, url, text} = sublink;
                                                            return (
                                                                <a key={`${url}-${id}`} href={url}>{text}</a>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                                :
                                                <div>
                                                    <a href={url}>{text}</a>
                                                    <span></span>
                                                </div>
                                            }
                                        </div>
                                    </li>);
                            })}
                        </ul>
                    </div>
                    <ul className="social-icons">
                        {contacts.map((contact) => {
                            const socialIcon = social.find((item) => item.name === contact.name) || social.find((item) => item.name === 'default');
                            return (
                                <li key={contact.id}>
                                    <div className={"tooltip"}>
                                        {socialIcon.icon}
                                        <span className={"tooltiptext"}>
                                            {contact.value}
                                            {contact.img_url && <img src={contact.img_url} alt={contact.name}/>}
                                        </span>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </nav>
        </>
    )
};

export default NavBar;