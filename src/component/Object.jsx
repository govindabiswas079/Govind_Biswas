import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import './style/Object.css'

import profit from '../img/icon/Grow.png';
import chronometer from '../img/icon/Timing.png';
import group from '../img/icon/community.png';
import confetti from '../img/icon/confetti.png';
import heartbeat from '../img/icon/Environment.png';

const Object = () => {

    const [spacing, setSpacing] = React.useState(2);

    const handleChange = (event) => {
        setSpacing(Number(event.target.value));
    };

    const jsx = `
  <Grid container spacing={${spacing}}>
  `;

    return (
        <div style={{ marginTop: '5px' }} className='MyInterestBG'>

            <header className="container">
                <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
                    <h2 data-aos='fade-down' data-aos-offset='200' style={{ textAlign: 'center', textTransform: 'uppercase', fontFamily: 'Nunito', fontWeight: '700' }}>Career Object</h2>
                </div>
                <p data-aos='zoom-in' data-aos-offset='200' style={{ textAlign: 'center', fontFamily: 'Nunito', fontWeight: '600' }}>Challenges are an opportunity for us to show how our skills can create the best of products.</p>
            </header>

            <Grid sx={{ flexGrow: 1 }} container spacing={2}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" spacing={spacing}>
                        <Grid item>
                            <Paper data-aos='zoom-in' data-aos-offset='200' sx={{ height: 300, width: 390 }} className='shadow-lg'>
                                <div className='App-headerrrr'>
                                    <img src={heartbeat} alt='' style={{ width: '85px' }} />
                                    <h5 style={{ marginTop: '25px', fontFamily: 'Nunito', fontWeight: '700', }}>Healthy Environment</h5>
                                    <p style={{ marginTop: '20px', fontFamily: 'Nunito', fontWeight: '600', }}>Staying active for longer consecutive hours may not be possible for everyone and therefore we always find time to play games and develop crazy ideas on the go. </p>
                                </div>
                            </Paper>
                            <Paper data-aos='zoom-in' data-aos-offset='200' sx={{ height: 300, width: 390 }} className='shadow-lg'>
                                <div className='App-headerrrr'>
                                    <img src={confetti} alt='' style={{ width: '85px' }} />
                                    <h5 style={{ marginTop: '25px', fontFamily: 'Nunito', fontWeight: '700', }}>Celebration</h5>
                                    <p style={{ marginTop: '20px', fontFamily: 'Nunito', fontWeight: '600', }}>Celebrate everything from special days of our team members, to successful project completion, and also the success of our clients.</p>
                                </div>
                            </Paper>
                        </Grid>
                        <Grid item>
                            <Paper data-aos='zoom-in' data-aos-offset='200' sx={{ height: 300, width: 390 }} className='shadow-lg'>
                                <div className='App-headerrrr'>
                                    <img src={group} alt='' style={{ width: '85px' }} />
                                    <h5 style={{ marginTop: '25px', fontFamily: 'Nunito', fontWeight: '700', }}>Build Community</h5>
                                    <p style={{ marginTop: '20px', fontFamily: 'Nunito', fontWeight: '600', }}>With team continuously collaborates and works together, plays together and are involved in building and fostering community growth.</p>
                                </div>
                            </Paper>
                            <Paper data-aos='zoom-in' data-aos-offset='200' sx={{ height: 300, width: 390 }} className='shadow-lg'>
                                <div className='App-headerrrr'>
                                    <img src={chronometer} alt='' style={{ width: '85px' }} />
                                    <h5 style={{ marginTop: '25px', fontFamily: 'Nunito', fontWeight: '700', }}>Flexible Timing</h5>
                                    <p style={{ marginTop: '20px', fontFamily: 'Nunito', fontWeight: '600', }}>believe creativity needs its space to truly thrive. Flexible timing is a way we ensure you have the freedom you need to be at your best.</p>
                                </div>
                            </Paper>
                        </Grid>
                        <Grid item>
                            <Paper data-aos='zoom-in' data-aos-offset='200' sx={{ height: 300, width: 390 }} className='shadow-lg'>
                                <div className='App-headerrrr'>
                                    <img src={profit} alt='' style={{ width: '85px' }} />
                                    <h5 style={{ marginTop: '25px', fontFamily: 'Nunito', fontWeight: '700', }}>Learn & Grow</h5>
                                    <p style={{ marginTop: '20px', fontFamily: 'Nunito', fontWeight: '600', }}>We ensure updated with the latest, by providing opportunities to expand and improve your skills.</p>
                                </div>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <br />
            <br />
            <br />
        </div >
    )
}

export default Object
