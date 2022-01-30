import React from 'react';
import './style/About.css';
import { Link } from 'react-scroll';
import pb from '../img/gbsvg.svg';
var Scroll = require('react-scroll');
var scroll = Scroll.animateScroll;

export default function About() {
    return (
        <>
            <div id="about" style={{ backgroundColor: '#FFFFFF' }}>
                <main data-aos='zoom-in' data-aos-offset='200' data-aos-easing='ease-in-sine'>
                    <div className="px-4 py-5  text-center">
                        <img className="d-block mx-auto mb-4" src={pb} alt="" width="72" height="57" />
                        <h2 className="display-5 fw-bold" style={{ fontFamily: 'Nunito', fontWeight: '700' }}>About Me</h2>
                        <div className="col-lg-6 mx-auto">
                            <p className="lead mb-4" style={{ fontFamily: 'Nunito', fontWeight: '500' }}>
                                Hello, I’m Govinda Biswas and Prem is my nick name, an i'm a UI/UX design and Developer professional based in India. Find me on <a style={{ textDecoration: 'none' }} href='https://www.facebook.com/govinda.biswas.980' target="_blank">Facebook</a> , <a style={{ textDecoration: 'none' }} href='https://www.instagram.com/prembiswas_07/' target="_blank">Instagram</a>, <a style={{ textDecoration: 'none' }} href='https://twitter.com/@Govinda_079' target="_blank">Twitter</a>, and <a style={{ textDecoration: 'none' }} href='https://www.linkedin.com/in/govinda-biswas-82b94a1b7' target="_blank">LinkedIn</a>. I’m skilled with <b>React.js</b>, <b>Angular.js</b>, <b>Vue.js</b>, <b>Next.js</b> and <b>React Native</b> etc., and I am trying to learn other programming languages, step by step. I’ve been working on web development and mobile app development for three years now, while still studying at college.
                            </p>
                            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                                <Link to="portfolio" spy={true} smooth={true} offset={0} duration={500} className="btn btn-primary btn-lg px-4 gap-3" style={{ fontFamily: 'Nunito', fontWeight: '400' }}>POETFOLIO</Link>
                                <Link to="contact" spy={true} smooth={true} offset={0} duration={500} className="btn btn-outline-secondary btn-lg px-4" style={{ fontFamily: 'Nunito', fontWeight: '400' }}>CONTACT</Link>
                            </div>
                        </div>
                    </div>
                </main>
                {/* <div className="container" data-aos='zoom-in' data-aos-offset='200' data-aos-easing='ease-in-sine'>

                    <div className="row align-items-md-stretch">
                        <div>
                            <div className="h-100 p-3 bg-light border rounded-3">
                                <div className="container py-4">
                                    <h2 className="block-title" style={{ textAlign: 'center', fontFamily: 'Nunito', fontWeight: '700' }}>Personal Information</h2>
                                    <div className="row align-items-md-stretch">
                                        <div className="col-md-6" style={{ marginTop: '10px' }}>
                                            <div className="h-100" style={{ paddingTop: '15px' }}>
                                                <div >
                                                    <h4 style={{ fontFamily: 'Nunito', fontWeight: '600' }}>Name:           <span style={{ fontFamily: 'Nunito', fontWeight: '500' }}>Govinda Kamal Biswas</span> </h4>
                                                    <h4 style={{ fontFamily: 'Nunito', fontWeight: '600' }}>Gender:         <span style={{ fontFamily: 'Nunito', fontWeight: '500' }}>Male</span> </h4>
                                                    <h4 style={{ fontFamily: 'Nunito', fontWeight: '600' }}>Birth:          <span style={{ fontFamily: 'Nunito', fontWeight: '500' }}>07/03/2001</span> </h4>
                                                    <h4 style={{ fontFamily: 'Nunito', fontWeight: '600' }}>Maeital Status: <span style={{ fontFamily: 'Nunito', fontWeight: '500' }}>Unmarried</span> </h4>
                                                    <h4 style={{ fontFamily: 'Nunito', fontWeight: '600' }}>Language Known: <span style={{ fontFamily: 'Nunito', fontWeight: '500' }}>Hindi, Marathi, English, Bengali</span> </h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6" style={{ marginTop: '10px' }}>
                                            <div className="h-100" style={{ paddingTop: '15px' }}>
                                                <div >
                                                    <h4 style={{ fontFamily: 'Nunito', fontWeight: '600' }}>Address:   <span style={{ fontFamily: 'Nunito', fontWeight: '500' }}>Chandrapur, Maharashtra, India</span> </h4>
                                                    <h4 style={{ fontFamily: 'Nunito', fontWeight: '600' }}>Email:     <span style={{ fontFamily: 'Nunito', fontWeight: '500' }}>govindbiswas079@gmail.com</span> </h4>
                                                    <h4 style={{ fontFamily: 'Nunito', fontWeight: '600' }}>Mobile:    <span style={{ fontFamily: 'Nunito', fontWeight: '500' }}>+91 9511723507</span> </h4>
                                                    <h4 style={{ fontFamily: 'Nunito', fontWeight: '600' }}>Skils:     <span style={{ fontFamily: 'Nunito', fontWeight: '500' }}>Developer</span> </h4>
                                                    <h4 style={{ fontFamily: 'Nunito', fontWeight: '600' }}>GitHub:    <span style={{ fontFamily: 'Nunito', fontWeight: '500' }}><a style={{textDecoration: 'none'}} href='http://github.com/prem-pb' style={{textDecoration: 'none'}}>http://github.com/prem-pb</a></span> </h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                <br />
            </div>
        </>
    )
}
