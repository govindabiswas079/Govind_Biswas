import React from 'react';
import Facebook from '@mui/icons-material/Facebook';
import Instagram from '@mui/icons-material/Instagram';
import Telegram from '@mui/icons-material/Twitter';
import LinkedIn from '@mui/icons-material/LinkedIn';
import GitHub from '@mui/icons-material/GitHub';
import './style/Footer.css';

const Footer = () => {
    return (
        <div style={{ width: '100%', height: '130px', backgroundColor: 'green' }}>
            <div style={{ display: 'flex', paddingTop: '30px', justifyContent: 'center' }}>
                <Facebook style={{ marginLeft: '7px', cursor: 'pointer', color: 'blue', fontSize: '30px' }} onClick={() => window.open('https://www.facebook.com/govinda.biswas.980')} />
                <Instagram style={{ marginLeft: '7px', cursor: 'pointer', color: 'purple', fontSize: '30px' }} onClick={() => window.open('https://www.instagram.com/prembiswas_07/')} />
                <Telegram style={{ marginLeft: '7px', cursor: 'pointer', color: 'blue', fontSize: '30px' }} onClick={() => window.open('https://twitter.com/@Govinda_079')} />
                <LinkedIn style={{ marginLeft: '7px', cursor: 'pointer', color: 'blue', fontSize: '30px' }} onClick={() => window.open('https://www.linkedin.com/in/govinda-biswas-82b94a1b7')} />
                <GitHub style={{ marginLeft: '7px', cursor: 'pointer', fontSize: '30px' }} onClick={() => window.open('https://github.com/prem-pb')} />
            </div>
            <p style={{ textAlign: 'center', fontFamily: 'Nunito', fontWeight: '700', marginTop: '20px' }}>© Govinda Biswas.  All Rights Reserved.  </p>
        </div>
    )
}

export default Footer
