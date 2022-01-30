import React from 'react';
import './style/Technology.css';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import reactjs from '../img/icon/react.png';
import angular from '../img/icon/angular.png';
import typescript from '../img/icon/typescript.png';
import material from '../img/icon/material.png';
import firebase from '../img/icon/firebase.png';
import html from '../img/icon/html.png';
import css from '../img/icon/css.png';
import js from '../img/icon/js.png';
import mongo from '../img/icon/mongo.png';
import nodejs from '../img/icon/nodejs.png';
import sql from '../img/icon/sql.png';
import bootstrap from '../img/icon/bootstrap.png';
import nextjs from '../img/icon/nextjs.png';
import vuejs from '../img/icon/vuejs.png';
import nativejs from '../img/icon/nativejs.png';





export default function Technology() {
    const [spacing, setSpacing] = React.useState(2);

    const handleChange = (event) => {
        setSpacing(Number(event.target.value));
    };

    const jsx = `
  <Grid container spacing={${spacing}}>
  `;

    return (
        <div id="technology" style={{ margin: '0 auto', }} className="techBG">
            <header className="container">
                <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
                    <h2 data-aos='fade-down' data-aos-offset='200' style={{ textAlign: 'center', textTransform: 'uppercase', fontFamily: 'Nunito', fontWeight: '700', color: '#FFFFFF' }}>Technology</h2>
                    <p data-aos='zoom-in' data-aos-offset='200' style={{ textAlign: 'center', textTransform: 'uppercase', fontFamily: 'Nunito', fontWeight: '700', color: 'greenyellow' }}>Accomplished the work using best technologies</p>
                    <br />
                    <h1 data-aos='zoom-in' data-aos-offset='200' style={{ textAlign: 'center', fontFamily: 'Nunito', fontWeight: '600', color: 'blue' }}>Mobile App Development</h1>
                </div>
            </header>

            <Grid sx={{ flexGrow: 1 }} container spacing={2}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" spacing={spacing}>
                        <Grid item style={{ display: 'flex' }}>
                            <Paper data-aos='zoom-in' data-aos-offset='200' sx={{ height: 200, width: 190 }} className='shadow-lg'>
                                <div className='App-headerr'>
                                    <img src={reactjs} alt='' style={{ width: '75px' }} />
                                    <h5 style={{ marginTop: '10px', fontFamily: 'Nunito', fontWeight: '600', }}>React.js</h5>
                                </div>

                            </Paper>
                            <Paper data-aos='zoom-in' data-aos-offset='200' sx={{ height: 200, width: 190 }} style={{ marginLeft: '16px', boxShadow: '5px 10px 30px rgba(0, 0, 0, 0.425)' }}>
                                <div className='App-headerr'>
                                    <img src={nativejs} alt='' style={{ width: '75px' }} />
                                    <h5 style={{ marginTop: '10px', fontFamily: 'Nunito', fontWeight: '600', }}>React Native</h5>
                                </div>
                            </Paper>
                        </Grid>
                        {/* <Grid item style={{ display: 'flex' }}>
                            <Paper sx={{ height: 200, width: 190 }} className='shadow-lg'>

                            </Paper>
                            <Paper sx={{ height: 200, width: 190 }} style={{ marginLeft: '16px', boxShadow: '5px 10px 30px rgba(0, 0, 0, 0.425)' }}>

                            </Paper>
                        </Grid> */}
                    </Grid>
                </Grid>
            </Grid>
            <header className="container">
                <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
                    <br />
                    <h1 data-aos='zoom-in' data-aos-offset='200' style={{ textAlign: 'center', fontFamily: 'Nunito', fontWeight: '600', color: 'blue' }}>Web App Development</h1>
                </div>
            </header>

            <Grid sx={{ flexGrow: 1 }} container spacing={2}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" spacing={spacing}>
                        <Grid item style={{ display: 'flex' }}>
                            <Paper data-aos='zoom-in' data-aos-offset='200' sx={{ height: 200, width: 190 }} className='shadow-lg'>
                                <div className='App-headerr'>
                                    <img src={reactjs} alt='' style={{ width: '75px' }} />
                                    <h5 style={{ marginTop: '10px', fontFamily: 'Nunito', fontWeight: '600', }}>React.js</h5>
                                </div>
                            </Paper>
                            <Paper data-aos='zoom-in' data-aos-offset='200' sx={{ height: 200, width: 190 }} style={{ marginLeft: '16px', boxShadow: '5px 10px 30px rgba(0, 0, 0, 0.425)' }}>
                                <div className='App-headerr'>
                                    <img src={angular} alt='' style={{ width: '75px' }} />
                                    <h5 style={{ marginTop: '10px', fontFamily: 'Nunito', fontWeight: '600', }}>Angular.js</h5>
                                </div>
                            </Paper>
                        </Grid>
                        <Grid item style={{ display: 'flex' }}>
                            <Paper data-aos='zoom-in' data-aos-offset='200' sx={{ height: 200, width: 190 }} className='shadow-lg'>
                                <div className='App-headerr'>
                                    <img src={vuejs} alt='' style={{ width: '75px' }} />
                                    <h5 style={{ marginTop: '10px', fontFamily: 'Nunito', fontWeight: '600', }}>Vue.js</h5>
                                </div>
                            </Paper>
                            <Paper data-aos='zoom-in' data-aos-offset='200' sx={{ height: 200, width: 190 }} style={{ marginLeft: '16px', boxShadow: '5px 10px 30px rgba(0, 0, 0, 0.425)' }}>
                                <div className='App-headerr'>
                                    <img src={nextjs} alt='' style={{ width: '75px' }} />
                                    <h5 style={{ marginTop: '10px', fontFamily: 'Nunito', fontWeight: '600', }}>Next.js</h5>
                                </div>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" spacing={spacing}>
                        <Grid item style={{ display: 'flex' }}>
                            <Paper data-aos='zoom-in' data-aos-offset='200' sx={{ height: 200, width: 190 }} className='shadow-lg'>
                                <div className='App-headerr'>
                                    <img src={js} alt='' style={{ width: '75px' }} />
                                    <h5 style={{ marginTop: '10px', fontFamily: 'Nunito', fontWeight: '600', }}>JavaScript</h5>
                                </div>
                            </Paper>
                            <Paper data-aos='zoom-in' data-aos-offset='200' sx={{ height: 200, width: 190 }} style={{ marginLeft: '16px', boxShadow: '5px 10px 30px rgba(0, 0, 0, 0.425)' }}>
                                <div className='App-headerr'>
                                    <img src={typescript} alt='' style={{ width: '75px' }} />
                                    <h5 style={{ marginTop: '10px', fontFamily: 'Nunito', fontWeight: '600', }}>Typescript</h5>
                                </div>
                            </Paper>
                        </Grid>
                        <Grid item style={{ display: 'flex' }}>
                            <Paper data-aos='zoom-in' data-aos-offset='200' sx={{ height: 200, width: 190 }} className='shadow-lg'>
                                <div className='App-headerr'>
                                    <img src={material} alt='' style={{ width: '75px' }} />
                                    <h5 style={{ marginTop: '10px', fontFamily: 'Nunito', fontWeight: '600', }}>Material UI</h5>
                                </div>
                            </Paper>
                            <Paper data-aos='zoom-in' data-aos-offset='200' sx={{ height: 200, width: 190 }} style={{ marginLeft: '16px', boxShadow: '5px 10px 30px rgba(0, 0, 0, 0.425)' }}>
                                <div className='App-headerr'>
                                    <img src={html} alt='' style={{ width: '75px' }} />
                                    <h5 style={{ marginTop: '10px', fontFamily: 'Nunito', fontWeight: '600', }}>HTML</h5>
                                </div>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" spacing={spacing}>
                        <Grid item style={{ display: 'flex' }}>
                            <Paper data-aos='zoom-in' data-aos-offset='200' sx={{ height: 200, width: 190 }} className='shadow-lg'>
                                <div className='App-headerr'>
                                    <img src={css} alt='' style={{ width: '75px' }} />
                                    <h5 style={{ marginTop: '10px', fontFamily: 'Nunito', fontWeight: '600', }}>CSS</h5>
                                </div>
                            </Paper>
                            <Paper data-aos='zoom-in' data-aos-offset='200' sx={{ height: 200, width: 190 }} style={{ marginLeft: '16px', boxShadow: '5px 10px 30px rgba(0, 0, 0, 0.425)' }}>
                                <div className='App-headerr'>
                                    <img src={bootstrap} alt='' style={{ width: '75px' }} />
                                    <h5 style={{ marginTop: '10px', fontFamily: 'Nunito', fontWeight: '600', }}>Bootstrap</h5>
                                </div>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <header className="container">
                <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
                    <br />
                    <h1 data-aos='zoom-in' data-aos-offset='200' style={{ textAlign: 'center', fontFamily: 'Nunito', fontWeight: '600', color: 'blue' }}>Backend Development</h1>
                </div>
            </header>

            <Grid sx={{ flexGrow: 1 }} container spacing={2}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" spacing={spacing}>
                        <Grid item style={{ display: 'flex' }}>
                            <Paper data-aos='zoom-in' data-aos-offset='200' sx={{ height: 200, width: 190 }} className='shadow-lg'>
                                <div className='App-headerr'>
                                    <img src={nodejs} alt='' style={{ width: '75px' }} />
                                    <h5 style={{ marginTop: '10px', fontFamily: 'Nunito', fontWeight: '600', }}>Nodejs.js</h5>
                                </div>
                            </Paper>
                            <Paper data-aos='zoom-in' data-aos-offset='200' sx={{ height: 200, width: 190 }} style={{ marginLeft: '16px', boxShadow: '5px 10px 30px rgba(0, 0, 0, 0.425)' }}>
                                <div className='App-headerr'>
                                    <img src={firebase} alt='' style={{ width: '75px' }} />
                                    <h5 style={{ marginTop: '10px', fontFamily: 'Nunito', fontWeight: '600', }}>Firebase</h5>
                                </div>
                            </Paper>
                        </Grid>
                        <Grid item style={{ display: 'flex' }}>
                            <Paper data-aos='zoom-in' data-aos-offset='200' sx={{ height: 200, width: 190 }} className='shadow-lg'>
                                <div className='App-headerr'>
                                    <img src={mongo} alt='' style={{ width: '75px' }} />
                                    <h5 style={{ marginTop: '10px', fontFamily: 'Nunito', fontWeight: '600', }}>mongoDB</h5>
                                </div>
                            </Paper>
                            <Paper data-aos='zoom-in' data-aos-offset='200' sx={{ height: 200, width: 190 }} style={{ marginLeft: '16px', boxShadow: '5px 10px 30px rgba(0, 0, 0, 0.425)' }}>
                                <div className='App-headerr'>
                                    <img src={sql} alt='' style={{ width: '75px' }} />
                                    <h5 style={{ marginTop: '10px', fontFamily: 'Nunito', fontWeight: '600', }}>ms-sql</h5>
                                </div>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <br />
        </div>
    )
}

