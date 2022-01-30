import React from 'react';
import './style/Education.css';
import CalendarToday from '@mui/icons-material/CalendarToday';
import LocationCitySharp from '@mui/icons-material/LocationOn';

export default function Education() {
    return (
        <div id="education" className='eduhBG' style={{ marginTop: '10px' }}>
            <h2 data-aos='fade-down' data-aos-offset='200' style={{ textAlign: 'center', textTransform: 'uppercase', fontFamily: 'Nunito', fontWeight: '700', paddingTop: '15px', color: 'blue' }}>Education</h2>
            <main>
                <div className="container py-4">

                    <div className="row align-items-md-stretch">
                        <div data-aos='zoom-in' data-aos-offset='200' className="col-md-6" style={{ marginTop: '10px' }}>
                            <div className="h-100 p-5 bg-light border rounded-3" style={{ boxShadow: '0 0 30px 1px rgb(0 0 0 / 10%)' }}>
                                <div style={{ display: 'flex' }}>
                                    <p style={{ fontFamily: 'Nunito', fontWeight: '400', fontSize: '13px' }}> <CalendarToday style={{ fontSize: '15px' }} /> 06/2015 - 03/2016</p>
                                    <div style={{ flex: '1' }}></div>
                                    <p style={{ fontFamily: 'Nunito', fontWeight: '400', fontSize: '13px' }}> <LocationCitySharp style={{ fontSize: '15px' }} /> LAGAM, GADCHIROLI, INDIA</p>
                                </div>
                                <h3 style={{ fontFamily: 'Nunito', fontWeight: '600', }}>SSC (Secondary School Certificate)</h3>
                                <p style={{ fontFamily: 'Nunito', fontWeight: '400', }}>A high school is a secondary school, where teenagers are educated before starting college or getting jobs. Most high schools have four numbered grades, from ninth to twelfth.</p>
                                <br />
                                <h4 style={{ fontFamily: 'Nunito', fontWeight: '600', }}>R. D. High school Lagam</h4>
                            </div>
                        </div>
                        <div data-aos='zoom-in' data-aos-offset='200' className="col-md-6" style={{ marginTop: '10px' }}>
                            <div className="h-100 p-5 bg-light border rounded-3" style={{ boxShadow: '0 0 30px 1px rgb(0 0 0 / 10%)' }}>
                                <div style={{ display: 'flex' }}>
                                    <p style={{ fontFamily: 'Nunito', fontWeight: '400', fontSize: '13px' }}> <CalendarToday style={{ fontSize: '15px' }} /> 06/2017 - 02/2018</p>
                                    <div style={{ flex: '1' }}></div>
                                    <p style={{ fontFamily: 'Nunito', fontWeight: '400', fontSize: '13px' }}> <LocationCitySharp style={{ fontSize: '15px' }} /> CHAMORSHI, GADCHIROLI, INDIA</p>
                                </div>
                                <h3 style={{ fontFamily: 'Nunito', fontWeight: '600', }}>(HSC) Highier Secondary Certificate</h3>
                                <p style={{ fontFamily: 'Nunito', fontWeight: '400', }}>The HSC acronym stands for the Higher secondary board comprising two years from classes XI and XII that leads to the higher secondary exam. There are three streams: science, commerce, and arts.</p>
                                <br />
                                <h4 style={{ fontFamily: 'Nunito', fontWeight: '600', }}>R. S. M Schoole of science Jr. college</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container py-4">

                    <div className="row align-items-md-stretch">
                        <div data-aos='zoom-in' data-aos-offset='200' className="col-md-6" style={{ marginTop: '10px' }}>
                            <div className="h-100 p-5 bg-light border rounded-3" style={{ boxShadow: '0 0 30px 1px rgb(0 0 0 / 10%)' }}>
                                <div style={{ display: 'flex' }}>
                                    <p style={{ fontFamily: 'Nunito', fontWeight: '400', fontSize: '13px' }}> <CalendarToday style={{ fontSize: '15px' }} /> 06/2017 - PRESENT</p>
                                    <div style={{ flex: '1' }}></div>
                                    <p style={{ fontFamily: 'Nunito', fontWeight: '400', fontSize: '13px' }}> <LocationCitySharp style={{ fontSize: '15px' }} /> CHANDRAPUR, INDIA</p>
                                </div>
                                <h3 style={{ fontFamily: 'Nunito', fontWeight: '600', }}>B.Sc Computer Science | Under Degree Graduation</h3>
                                <p style={{ fontFamily: 'Nunito', fontWeight: '400', }}>Dr. Ambedkar College of Arts, Commerce and Science, Chandrapur is known for its faculty, infrastructure, library and laboratories and provides ample opportunities for overall development of the students.</p>
                                <br />
                                <h4 style={{ fontFamily: 'Nunito', fontWeight: '600', }}>Dr. Babasaheb Ambedkar College of Arts, Commerce & Science college chandrapur</h4>
                            </div>
                        </div>
                        <div data-aos='zoom-in' data-aos-offset='200' className="col-md-6" style={{ marginTop: '10px' }}>
                            <div className="h-100 p-5 bg-light border rounded-3" style={{ boxShadow: '0 0 30px 1px rgb(0 0 0 / 10%)' }}>
                                <div style={{ display: 'flex' }}>
                                    <p style={{ fontFamily: 'Nunito', fontWeight: '400', fontSize: '13px' }}> <CalendarToday style={{ fontSize: '15px' }} /> Feature</p>
                                    <div style={{ flex: '1' }}></div>
                                    <p style={{ fontFamily: 'Nunito', fontWeight: '400', fontSize: '13px' }}> <LocationCitySharp style={{ fontSize: '15px' }} /> Feature</p>
                                </div>
                                <h3 style={{ fontFamily: 'Nunito', fontWeight: '600', }}>MCA | Post Graduation</h3>
                                <p style={{ fontFamily: 'Nunito', fontWeight: '400', }}>A. Master of Computer Applications or MCA is a professional degree in computer science.</p>
                                <br />
                                <h4 style={{ fontFamily: 'Nunito', fontWeight: '600', }}>Feature</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </div>
    )
}
