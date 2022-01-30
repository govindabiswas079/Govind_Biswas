import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import './style/MyInterest.css';

import movie from '../img/icon/movie.png';
import traveling from '../img/icon/traveling.jpg';
import song from '../img/icon/song.png';
import book from '../img/icon/book.png';
import coding from '../img/icon/coding.png';
import drivinng from '../img/icon/drivinng.png';

const MyInterest = () => {
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
                    <h2 data-aos='fade-down' data-aos-offset='200' style={{ textAlign: 'center', textTransform: 'uppercase', fontFamily: 'Nunito', fontWeight: '700' }}>MY INTERESTS</h2>
                </div>
            </header>

            <Grid sx={{ flexGrow: 1 }} container spacing={2}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" spacing={spacing}>
                        <Grid item style={{ display: 'flex' }}>
                            <Paper data-aos='zoom-in' data-aos-offset='200' sx={{ height: 200, width: 190 }} className='shadow-lg'>
                                <div className='App-headerrr'>
                                    <img src={coding} alt='' style={{ width: '75px' }} />
                                    <h5 style={{ marginTop: '15px', fontFamily: 'Nunito', fontWeight: '600' }}>Coding</h5>
                                </div>
                            </Paper>
                            <Paper data-aos='zoom-in' data-aos-offset='200' sx={{ height: 200, width: 190 }} style={{ marginLeft: '16px' }} className='shadow-lg'>
                                <div className='App-headerrr'>
                                    <img src={book} alt='' style={{ width: '75px' }} />
                                    <h5 style={{ marginTop: '15px', fontFamily: 'Nunito', fontWeight: '600' }}>Reading Book</h5>
                                </div>
                            </Paper>
                        </Grid>
                        <Grid item style={{ display: 'flex' }}>
                            <Paper data-aos='zoom-in' data-aos-offset='200' sx={{ height: 200, width: 190 }} className='shadow-lg'>
                                <div className='App-headerrr'>
                                    <img src={song} alt='' style={{ width: '75px' }} />
                                    <h5 style={{ marginTop: '15px', fontFamily: 'Nunito', fontWeight: '600' }}>Listing song</h5>
                                </div>
                            </Paper>
                            <Paper data-aos='zoom-in' data-aos-offset='200' sx={{ height: 200, width: 190 }} style={{ marginLeft: '16px' }} className='shadow-lg'>
                                <div className='App-headerrr'>
                                    <img src={traveling} alt='' style={{ width: '75px' }} />
                                    <h5 style={{ marginTop: '15px', fontFamily: 'Nunito', fontWeight: '600' }}>Traveling</h5>
                                </div>
                            </Paper>
                        </Grid>
                        <Grid item style={{ display: 'flex' }}>
                            <Paper data-aos='zoom-in' data-aos-offset='200' sx={{ height: 200, width: 190 }} className='shadow-lg'>
                                <div className='App-headerrr'>
                                    <img src={movie} alt='' style={{ width: '75px' }} />
                                    <h5 style={{ marginTop: '15px', fontFamily: 'Nunito', fontWeight: '600' }}>Watch movie</h5>
                                </div>
                            </Paper>
                            <Paper data-aos='zoom-in' data-aos-offset='200' sx={{ height: 200, width: 190 }} style={{ marginLeft: '16px' }} className='shadow-lg'>
                                <div className='App-headerrr'>
                                    <img src={drivinng} alt='' style={{ width: '75px' }} />
                                    <h5 style={{ marginTop: '15px', fontFamily: 'Nunito', fontWeight: '600' }}>Drivinng</h5>
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

export default MyInterest
