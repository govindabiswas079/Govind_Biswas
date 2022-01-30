import React from 'react';
import './style/Experience.css'
import CalendarToday from '@mui/icons-material/CalendarToday';
import LocationCitySharp from '@mui/icons-material/LocationOn';

export default function Experience() {
    return (
        <div id="experience" className='expBG' style={{ backgroundColor: 'white', marginTop: '10px' }}>
            <h3 data-aos='fade-down' data-aos-offset='200' style={{ textAlign: 'center', textTransform: 'uppercase', paddingTop: '40px', fontFamily: 'Nunito', fontWeight: '700' }}>work experience</h3>

            <main >{/* style={{ backgroundColor: 'white' }} */}
                <div className="container py-4">
                    <div className="row align-items-md-stretch">
                        <div data-aos='zoom-in' data-aos-offset='200' className="col-md-6" style={{ marginTop: '10px' }}>
                            <div className="h-100 p-5 border bg-light  rounded-3" style={{ boxShadow: '0 0 30px 1px rgb(0 0 0 / 10%)' }}>{/* bg-light */}
                                <div style={{ display: 'flex' }}>
                                    <p style={{ fontFamily: 'Nunito', fontWeight: '400', fontSize: '13px' }}> <CalendarToday style={{ fontSize: '15px' }} /> 11/2020 - 05/2021</p>
                                    <div style={{ flex: '1' }}></div>
                                    <p style={{ fontFamily: 'Nunito', fontWeight: '400', fontSize: '13px' }} > <LocationCitySharp style={{ fontSize: '15px' }} /> NAGPUR, INDIA</p>
                                </div>
                                <h3 style={{ fontFamily: 'Nunito', fontWeight: '600', }}>Web Developer / Internship</h3>
                                <p style={{ fontFamily: 'Nunito', fontWeight: '400', }}>Qloron is a custom software development firm located in Nagpur, India. qloron provide custom software programming services, from offshore software development enhancement.</p>
                                <br />
                                <h4 style={{ fontFamily: 'Nunito', fontWeight: '600', }}>Qloron PVT LTD</h4>
                            </div>
                        </div>
                        <div data-aos='zoom-in' data-aos-offset='200' className="col-md-6" style={{ marginTop: '10px' }}>
                            <div className="h-100 p-5  border bg-light rounded-3" style={{ boxShadow: '0 0 30px 1px rgb(0 0 0 / 10%)' }}>{/* bg-light */}
                                <div style={{ display: 'flex' }}>
                                    <p style={{ fontFamily: 'Nunito', fontWeight: '400', fontSize: '13px' }}> <CalendarToday style={{ fontSize: '15px' }} /> 04/2017 - 02/2019</p>
                                    <div style={{ flex: '1' }}></div>
                                    <p style={{ fontFamily: 'Nunito', fontWeight: '400', fontSize: '13px' }}> <LocationCitySharp style={{ fontSize: '15px' }} /> CHAMORSHI, INDIA</p>
                                </div>
                                <h3 style={{ fontFamily: 'Nunito', fontWeight: '600', }}>Technician</h3>
                                <p style={{ fontFamily: 'Nunito', fontWeight: '400', }}>sales and service electronic goods located at chamorshi, gadchiroli. prabhat electronic & Ritesh mobile shop provide best service and this a best retail shop for purchasing eletronics and telecommunication goods, and also 95% customer satisfied for their service </p>
                                <br />
                                <h4 style={{ fontFamily: 'Nunito', fontWeight: '600', }}>Prabhat Electronic's & Ritesh Mobile</h4>
                            </div>
                        </div>
                    </div>
                </div >
                <div className="container py-4">

                    <div className="row align-items-md-stretch">
                        <div data-aos='zoom-in' data-aos-offset='200' className="col-md-6" style={{ marginTop: '10px' }}>
                            <div className="h-100 p-5 border bg-light  rounded-3" style={{ boxShadow: '0 0 30px 1px rgb(0 0 0 / 10%)' }}>{/* bg-light */}
                                <div style={{ display: 'flex' }}>
                                    <p style={{ fontFamily: 'Nunito', fontWeight: '400', fontSize: '13px' }}> <CalendarToday style={{ fontSize: '15px' }} /> 08/2019 - 09/2020</p>
                                    <div style={{ flex: '1' }}></div>
                                    <p style={{ fontFamily: 'Nunito', fontWeight: '400', fontSize: '13px' }}> <LocationCitySharp style={{ fontSize: '15px' }} /> CHANDRAPUR, INDIA</p>
                                </div>
                                <h3 style={{ fontFamily: 'Nunito', fontWeight: '600', }}>Data Entry Operator / Spare Department</h3>
                                <p style={{ fontFamily: 'Nunito', fontWeight: '400', }}>Wander beyond the bounds of the mundane city ride and rediscover what riding really means. #Xpulse4V #MakeNewTracks #Xpulse200 #HeroMotoCorp #adventurebikes #offroad</p>
                                <br />
                                <h4 style={{ fontFamily: 'Nunito', fontWeight: '600', }}>N D Motors</h4>
                            </div>
                        </div>
                        <div data-aos='zoom-in' data-aos-offset='200' className="col-md-6" style={{ marginTop: '10px' }}>
                            <div className="h-100 p-5  border bg-light rounded-3" style={{ boxShadow: '0 0 30px 1px rgb(0 0 0 / 10%)' }}>{/* bg-light */}
                                <div style={{ display: 'flex' }}>
                                    <p style={{ fontFamily: 'Nunito', fontWeight: '400', fontSize: '13px' }}> <CalendarToday style={{ fontSize: '15px' }} /> 08/2021 - PRESENT</p>
                                    <div style={{ flex: '1' }}></div>
                                    <p style={{ fontFamily: 'Nunito', fontWeight: '400', fontSize: '13px' }}> <LocationCitySharp style={{ fontSize: '15px' }} /> CHANDRAPUR, INDIA</p>
                                </div>
                                <h3 style={{ fontFamily: 'Nunito', fontWeight: '600', }}>Developer</h3>
                                <p style={{ fontFamily: 'Nunito', fontWeight: '400', }}>Code fever provide custom software development company specializing in creating rugged digital environments through smartphone, web, and software conversational applications.</p>
                                <br />
                                <h4 style={{ fontFamily: 'Nunito', fontWeight: '600', }}>Code Fever Technology</h4>
                            </div>
                        </div>
                    </div >
                </div >
            </main >
        </div >
    )
}

