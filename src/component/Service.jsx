import React from 'react';
import './style/Service.css';

import Grid from '@mui/material/Grid';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Paper from '@mui/material/Paper';

import web from '../img/icon/s-10.jpg';
import mobile from '../img/icon/s-9.jpg';
import hosting from '../img/icon/s-3.jpg';



import heartbeat from '../img/icon/heartbeat.png';

import work2 from '../img/icon/work-2.png';
import work3 from '../img/icon/work-3.png';
import work4 from '../img/icon/work-4.png';
import work5 from '../img/icon/work-5.png';


export default function Service() {
    const [spacing, setSpacing] = React.useState(2);

    const handleChange = (event) => {
        setSpacing(Number(event.target.value));
    };

    const jsx = `
<Grid container spacing={${spacing}}>
`;

    return (
        <>
            <div id="service">

                <div className="container py-3">
                    <header>
                        <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
                            <h2 data-aos='fade-down' data-aos-offset='200' style={{ fontFamily: 'Nunito', fontWeight: '700', textTransform: 'uppercase' }}>what I'm do</h2>
                        </div>
                    </header>

                    <main>
                        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
                            <div data-aos='zoom-in' data-aos-offset='200' className="col" style={{ marginTop: '10px' }}>
                                <div className="cardd mb-4 rounded-3 shadow-lg">
                                    <div className="card-body" >
                                        <img src={web} alt='' style={{ width: '120px', height: '120px' }} />
                                        <h5 style={{ marginTop: '50px', fontFamily: 'Nunito', fontWeight: '600' }}>Web Design & Development</h5>
                                    </div>
                                </div>
                            </div>
                            <div data-aos='zoom-in' data-aos-offset='200' className="col" style={{ marginTop: '10px' }}>
                                <div className="cardd mb-4 rounded-3 shadow-lg">
                                    <div className="card-body" >
                                        <img src={mobile} alt='' style={{ width: '120px', height: '120px' }} />
                                        <h5 style={{ marginTop: '50px', fontFamily: 'Nunito', fontWeight: '600' }}>Mobile App Development</h5>
                                    </div>
                                </div>
                            </div>
                            <div data-aos='zoom-in' data-aos-offset='200' className="col" style={{ marginTop: '10px' }}>
                                <div className="cardd mb-4 rounded-3 shadow-lg">
                                    <div className="card-body" >
                                        <img src={hosting} alt='' style={{ width: '120px', height: '120px' }} />
                                        <h5 style={{ marginTop: '50px', fontFamily: 'Nunito', fontWeight: '600' }}>Web Hosting</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>

                <div className="container py-3">
                    <header>
                        <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
                            <h2 data-aos='fade-down' data-aos-offset='200' style={{ fontFamily: 'Nunito', fontWeight: '700', textTransform: 'uppercase' }}>How I'm work</h2>
                        </div>
                    </header>

                    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
                        <Grid item xs={12}>
                            <Grid container justifyContent="center" spacing={spacing}>
                                <Grid item>
                                    <Paper data-aos='zoom-in' data-aos-offset='200' sx={{ height: 320, width: 390 }} className='shadow-lg'>
                                        <div className='App-headerrrrr'>
                                            <div style={{ display: 'flex' }}>
                                                <img src={work2} alt='' style={{ width: '120px' }} />
                                                <div style={{ flex: '1' }}></div>
                                                <div style={{ width: '60px', height: '60px', borderRadius: '50px', backgroundColor: '#be6dbe4d', paddingRight: '30px' }}>
                                                    <h2 style={{ color: '#FFFFFF', textAlign: 'center', marginLeft: '21px', marginTop: '11px', fontFamily: 'Nunito', fontWeight: '700', color: 'blue' }}>1</h2>
                                                </div>
                                            </div>
                                            <h5 style={{ marginTop: '25px', fontFamily: 'Nunito', fontWeight: '700', }}>Consider And Analyze The Work Plan</h5>
                                            <p style={{ marginTop: '20px', fontFamily: 'Nunito', fontWeight: '600', }}>When we understand the main ideas, we proceed to discuss the work plan and analyze it. </p>
                                        </div>
                                    </Paper>
                                </Grid>
                                <Grid item>
                                    <Paper data-aos='zoom-in' data-aos-offset='200' sx={{ height: 320, width: 390 }} className='shadow-lg'>
                                        <div className='App-headerrrrr'>
                                            <div style={{ display: 'flex' }}>
                                                <img src={'https://i.pinimg.com/originals/77/75/5e/77755e565ef7ddbff2546231cd8732bf.png'} alt='' style={{ width: '120px' }} />
                                                <div style={{ flex: '1' }}></div>
                                                <div style={{ width: '60px', height: '60px', borderRadius: '50px', backgroundColor: '#be6dbe4d', paddingRight: '30px' }}>
                                                    <h2 style={{ color: '#FFFFFF', textAlign: 'center', marginLeft: '21px', marginTop: '11px', fontFamily: 'Nunito', fontWeight: '700', color: 'blue' }}>2</h2>
                                                </div>
                                            </div>
                                            <h5 style={{ marginTop: '25px', fontFamily: 'Nunito', fontWeight: '700', }}>Work Hard On The Project</h5>
                                            <p style={{ marginTop: '20px', fontFamily: 'Nunito', fontWeight: '600', }}>Our professional team starts to work on your project and embody all details of the initial concept. </p>
                                        </div>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container justifyContent="center" spacing={spacing}>
                                <Grid item>
                                    <Paper data-aos='zoom-in' data-aos-offset='200' sx={{ height: 320, width: 390 }} className='shadow-lg'>
                                        <div className='App-headerrrrr'>
                                            <div style={{ display: 'flex' }}>
                                                <img src={'https://freepngimg.com/download/analysis/10-2-analysis-png-pic.png'} alt='' style={{ width: '120px' }} />
                                                <div style={{ flex: '1' }}></div>
                                                <div style={{ width: '60px', height: '60px', borderRadius: '50px', backgroundColor: '#be6dbe4d', paddingRight: '30px' }}>
                                                    <h2 style={{ color: '#FFFFFF', textAlign: 'center', marginLeft: '21px', marginTop: '11px', fontFamily: 'Nunito', fontWeight: '700', color: 'blue' }}>3</h2>
                                                </div>
                                            </div>
                                            <h5 style={{ marginTop: '25px', fontFamily: 'Nunito', fontWeight: '700', }}>Once Again Analyze And Check Everything</h5>
                                            <p style={{ marginTop: '20px', fontFamily: 'Nunito', fontWeight: '600', }}>We meet, analyze and check the work we done on the project and make any necessary changes. </p>
                                        </div>
                                    </Paper>
                                </Grid>
                                <Grid item>
                                    <Paper data-aos='zoom-in' data-aos-offset='200' sx={{ height: 320, width: 390 }} className='shadow-lg'>
                                        <div className='App-headerrrrr'>
                                            <div style={{ display: 'flex' }}>
                                                <img src={work5} alt='' style={{ width: '120px' }} />
                                                <div style={{ flex: '1' }}></div>
                                                <div style={{ width: '60px', height: '60px', borderRadius: '50px', backgroundColor: '#be6dbe4d', paddingRight: '30px' }}>
                                                    <h2 style={{ color: '#FFFFFF', textAlign: 'center', marginLeft: '21px', marginTop: '11px', fontFamily: 'Nunito', fontWeight: '700', color: 'blue' }}>4</h2>
                                                </div>
                                            </div>
                                            <h5 style={{ marginTop: '25px', fontFamily: 'Nunito', fontWeight: '700', }}>Finish The Project</h5>
                                            <p style={{ marginTop: '20px', fontFamily: 'Nunito', fontWeight: '600', }}>The project is completed and we give it to our customer. We also ask for customer’s feedback. </p>
                                        </div>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </div >
        </>
    )
}

