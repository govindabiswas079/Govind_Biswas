import React from 'react';
import "./style/PoetfolioBG.css";

import crypto from '../img/folio/crypto.jpg';
import coronatraker from '../img/folio/coronatraker.jpg';
import ecomerce from '../img/folio/ecomerce.jpg';
import expense from '../img/folio/expense.jpg';
import mUI from '../img/folio/mUI.jpg';
import next from '../img/folio/next.jpg';
import PWA_wheather from '../img/folio/PWA_wheather.jpg';
import video_chat from '../img/folio/video_chat.jpg';
import you_tube from '../img/folio/you_tube.jpg';

export default function Portfolio() {
    return (
        <div id="portfolio" style={{ marginTop: '10px' }} className='PoetfolioBG'>
            <main>
                <div className="album py-5">
                    <h2 data-aos='fade-down' data-aos-offset='200' style={{ textAlign: 'center', textTransform: 'uppercase', top: '40px', fontFamily: 'Nunito', fontWeight: '700', color: 'blue' }}>Poetfolio</h2>
                    <div className="container py-5">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                            <div className="col">
                                <div data-aos='zoom-in' data-aos-offset='200' className="cardd">
                                    <img src={crypto} alt="" style={{ width: '100%', height: '225px' }} />

                                    <div className="card-body">
                                        <h3 style={{ fontFamily: 'Nunito', fontWeight: '700', }}>Digi Market</h3>
                                        <p className="card-text" style={{ fontFamily: 'Nunito', fontWeight: '600', }}>
                                            This is a digi market for exploring digital currency (cryptocurrency). building with react.js, react-redux-toolkit and rapid api.
                                        </p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <a target="_blank" href='https://digimarket.herokuapp.com/' className="btn btn-primary btn-sm" style={{ fontFamily: 'Nunito', fontWeight: '700', }}>View</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div data-aos='zoom-in' data-aos-offset='200' className="cardd">
                                    <img src={coronatraker} alt="" style={{ width: '100%', height: '225px' }} />

                                    <div className="card-body">
                                        <h3 style={{ fontFamily: 'Nunito', fontWeight: '700', }}>Covid update</h3>
                                        <p className="card-text" style={{ fontFamily: 'Nunito', fontWeight: '600', }}>
                                            This is Corona tracker for geting new covid update. this web building with react.js and matrial-ui and rapid api
                                        </p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <a target="_blank" href='https://reactcoronatracker.herokuapp.com/' className="btn btn-primary btn-sm" style={{ fontFamily: 'Nunito', fontWeight: '700', }}>View</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div data-aos='zoom-in' data-aos-offset='200' className="cardd">
                                    <img src={ecomerce} alt="" style={{ width: '100%', height: '225px' }} />

                                    <div className="card-body">
                                        <h3 style={{ fontFamily: 'Nunito', fontWeight: '700', }}>E-market</h3>
                                        <p className="card-text" style={{ fontFamily: 'Nunito', fontWeight: '600', }}>
                                            E-market like a e-commerce website. this web building with react.js material-ui react-redux, and stripe.js for payment getway but in test mood and commerce.js for product.
                                            </p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <a target="_blank" href='https://emarketstore.herokuapp.com/' className="btn btn-primary btn-sm" style={{ fontFamily: 'Nunito', fontWeight: '700', }}>View</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div data-aos='zoom-in' data-aos-offset='200' className="cardd">
                                    <img src={expense} alt="" style={{ width: '100%', height: '225px' }} />

                                    <div className="card-body">
                                        <h3 style={{ fontFamily: 'Nunito', fontWeight: '700', }}>Expense Tracker</h3>
                                        <p className="card-text" style={{ fontFamily: 'Nunito', fontWeight: '600', }}>
                                            This is the Expense Tracker everyone want to Track their expense. for building thechnology is react.js react-redux contextApi and localstorage.
                                        </p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <a target="_blank" href='https://reactextracker.herokuapp.com/' className="btn btn-primary btn-sm" style={{ fontFamily: 'Nunito', fontWeight: '700', }}>View</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div data-aos='zoom-in' data-aos-offset='200' className="cardd">
                                    <img src={mUI} alt="" style={{ width: '100%', height: '225px' }} />

                                    <div className="card-body">
                                        <h3 style={{ fontFamily: 'Nunito', fontWeight: '700', }}>Ui Album</h3>
                                        <p className="card-text" style={{ fontFamily: 'Nunito', fontWeight: '600', }}>Photo album using material ui with react.js and unplash image and material ui provide best ui design.</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <a target="_blank" href='https://mstuday.herokuapp.com/' className="btn btn-primary btn-sm" style={{ fontFamily: 'Nunito', fontWeight: '700', }}>View</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div data-aos='zoom-in' data-aos-offset='200' className="cardd">
                                    <img src={next} alt="" style={{ width: '100%', height: '225px' }} />

                                    <div className="card-body">
                                        <h3 style={{ fontFamily: 'Nunito', fontWeight: '700', }}>Portfolio</h3>
                                        <p className="card-text" style={{ fontFamily: 'Nunito', fontWeight: '600', }}>
                                        Portfolio Ui using Next.js and deffrent component 
                                        </p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <a target="_blank" href='https://nextlandingpage.herokuapp.com/' className="btn btn-primary btn-sm" style={{ fontFamily: 'Nunito', fontWeight: '700', }}>View</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div data-aos='zoom-in' data-aos-offset='200' className="cardd">
                                    <img src={PWA_wheather} alt="" style={{ width: '100%', height: '225px' }} />

                                    <div className="card-body">
                                        <h3 style={{ fontFamily: 'Nunito', fontWeight: '700', }}>Weather</h3>
                                        <p className="card-text" style={{ fontFamily: 'Nunito', fontWeight: '600', }}>
                                            This is a progressive web app (PWA) named Weather using react.js.
                                        </p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <a target="_blank" href='https://reactskyapp.herokuapp.com/' className="btn btn-primary btn-sm" style={{ fontFamily: 'Nunito', fontWeight: '700', }}>View</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div data-aos='zoom-in' data-aos-offset='200' className="cardd">
                                    <img src={video_chat} alt="" style={{ width: '100%', height: '225px' }} />

                                    <div className="card-body">
                                        <h3 style={{ fontFamily: 'Nunito', fontWeight: '700', }}>More Meet</h3>
                                        <p className="card-text" style={{ fontFamily: 'Nunito', fontWeight: '600', }}>
                                            This a simple video calling app.  build with react.js and socket.io and simple ui.
                                        </p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <a target="_blank" href='https://reactvideoaap.herokuapp.com/' className="btn btn-primary btn-sm" style={{ fontFamily: 'Nunito', fontWeight: '700', }}>View</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div data-aos='zoom-in' data-aos-offset='200' className="cardd">
                                    <img src={you_tube} alt="" style={{ width: '100%', height: '225px' }} />

                                    <div className="card-body">
                                        <h3 style={{ fontFamily: 'Nunito', fontWeight: '700', }}>My YouTube</h3>
                                        <p className="card-text" style={{ fontFamily: 'Nunito', fontWeight: '600', }}>
                                            This a youtube video player. using react.js and youtube api.
                                        </p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <a target="_blank" href='https://ytcloner.herokuapp.com/' className="btn btn-primary btn-sm" style={{ fontFamily: 'Nunito', fontWeight: '700', }}>View</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    )
}
