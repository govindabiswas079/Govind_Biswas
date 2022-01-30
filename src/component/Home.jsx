import React, { useEffect, useRef } from 'react';
import './style/Home.css';
import { init } from 'ityped';
import WhatsAppWidget from 'react-whatsapp-widget'
import 'react-whatsapp-widget/dist/index.css'
import SpeedDialTooltipOpen from './SpeedDialTooltipOpen';

import uplogo from '../img/icon/uplogo.png';

import logo from '../img/prem.png';

export default function Home() {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ['Developer', 'UI & UX Designer', 'Web Application Developer', 'Progressive Web App Developer']
        })
    }, []);

    const onRefresh = () => {
        return new Promise(() => {
            setTimeout(() => {
                window.location.reload();
            }, 2000);
        });
    }

    return (
        <div className='background' id="home">
            <div data-aos='fade-up' data-aos-offset='200' data-aos-easing='ease-in-sine'>
                <div className="App">
                    <header className="App-header">
                        <div style={{ backgroundColor: 'blue', borderRadius: '50% 50% 50% 50%', width: '250px', height: '250px' }}>
                            <img style={{ borderRadius: '50% 50% 50% 50%', width: '250px', height: '250px' }} src={logo} className="App-logo" alt="logo" />
                        </div>
                        <div style={{ marginTop: '30px' }}>
                            <h3 style={{ fontFamily: 'Nunito' }}>Hi Guys, I'm <span style={{ fontFamily: 'Nunito', fontWeight: '700' }}>Govinda  Biswas</span></h3>
                            <h3 style={{ fontFamily: 'Nunito' }}>I am a <span ref={textRef} style={{ fontFamily: 'Nunito', fontWeight: '700', color: 'blue' }}></span></h3>
                        </div>
                    </header>
                </div>
                <SpeedDialTooltipOpen />
                <div>
                    <WhatsAppWidget
                        phoneNumber='919511723507'
                        companyName="Prem Biswas"
                        textReplyTime="online"
                    />
                </div>
            </div>
        </div>
    )
}

