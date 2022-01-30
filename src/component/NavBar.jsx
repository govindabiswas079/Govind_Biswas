import React, { useState } from 'react';
import Menu from '@mui/icons-material/Menu';
import Close from '@mui/icons-material/Close';
import { Link } from 'react-scroll';
import './style/Navbar.css';
import uplogo from '../img/icon/uplogo.png';
import pb from '../img/gbsvg.svg';

var Scroll = require('react-scroll');
var scroll = Scroll.animateScroll;

const NavBar = ({ cliskOpenEvent, clickClosEvent, click }) => {
    const [nav, setNav] = useState(false);


    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setNav(true);
        } else {
            setNav(false);
        }
    }
    window.addEventListener('scroll', changeBackground);

    const scollTop = () => {
        scroll.scrollToTop();
    }

    return (
        <div>
            <header className={nav ? "setheader active" : "setheader"}>
                <div onClick={scollTop} style={{ cursor: 'pointer' }} className="logo">
                    <img style={{ width: '45px' }} src={pb} alt="" />
                </div>
                <nav className={click ? "NavBar active" : "NavBar"}>
                    <ul>
                        <li style={{ cursor: 'pointer' }}><Link style={{ fontFamily: 'Nunito', fontWeight: '700', }} onClick={clickClosEvent} activeClass='activeClass' to="home" spy={true} smooth={true} offset={0} duration={500}>Home</Link></li>
                        <li style={{ cursor: 'pointer' }}><Link style={{ fontFamily: 'Nunito', fontWeight: '700', }} onClick={clickClosEvent} activeClass='activeClass' to="about" spy={true} smooth={true} offset={0} duration={500}>About</Link></li>
                        <li style={{ cursor: 'pointer' }}><Link style={{ fontFamily: 'Nunito', fontWeight: '700', }} onClick={clickClosEvent} activeClass='activeClass' to="education" spy={true} smooth={true} offset={0} duration={500}>Education</Link></li>
                        <li style={{ cursor: 'pointer' }}><Link style={{ fontFamily: 'Nunito', fontWeight: '700', }} onClick={clickClosEvent} activeClass='activeClass' to="experience" spy={true} smooth={true} offset={0} duration={500}>Experience</Link></li>
                        <li style={{ cursor: 'pointer' }}><Link style={{ fontFamily: 'Nunito', fontWeight: '700', }} onClick={clickClosEvent} activeClass='activeClass' to="skills" spy={true} smooth={true} offset={0} duration={500}>Skills</Link></li>
                        <li style={{ cursor: 'pointer' }}><Link style={{ fontFamily: 'Nunito', fontWeight: '700', }} onClick={clickClosEvent} activeClass='activeClass' to="portfolio" spy={true} smooth={true} offset={0} duration={500}>Portfolio</Link></li>
                        <li style={{ cursor: 'pointer' }}><Link style={{ fontFamily: 'Nunito', fontWeight: '700', }} onClick={clickClosEvent} activeClass='activeClass' to="service" spy={true} smooth={true} offset={0} duration={500}>Service</Link></li>
                        <li style={{ cursor: 'pointer' }}><Link style={{ fontFamily: 'Nunito', fontWeight: '700', }} onClick={clickClosEvent} activeClass='activeClass' to="technology" spy={true} smooth={true} offset={0} duration={500}>Technology</Link></li>
                        <li style={{ cursor: 'pointer' }}><Link style={{ fontFamily: 'Nunito', fontWeight: '700', }} onClick={clickClosEvent} activeClass='activeClass' to="contact" spy={true} smooth={true} offset={0} duration={500}>Contact</Link></li>
                    </ul>
                </nav>
                <div className="menu-toggle" onClick={cliskOpenEvent}>{click ?
                    <>
                        <Close style={{ color: 'red', width: '80px', height: '30px' }} />
                    </> :
                    <>
                        <Menu style={{ color: 'red', width: '80px', height: '30px' }} />
                    </>}
                </div>
            </header>
            <div className='bottom-nav' style={{ display: nav ? 'block' : 'none', zIndex: '99' }}>
                <img onClick={scollTop} src={uplogo} style={{ width: '50px', position: 'absolute' }} />
            </div>
        </div>
    )
}

export default NavBar;
