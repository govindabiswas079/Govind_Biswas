import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './style/Skills.css';

export default function Skills() {
    return (
        <div id="skills" className='SkillsBG'>
            <div style={{ marginTop: '10px' }} className="container">
                <div className="row">
                    <div className="col-12 text-center mb-5">
                        <h2 data-aos='fade-down' data-aos-offset='200' className="section-title" style={{ paddingTop: '30px', fontFamily: 'Nunito', fontWeight: '700' }}>
                            My Skills
                        </h2>
                    </div>
                </div>

                <div data-aos='zoom-in' data-aos-offset='200' className="row">
                    <div className="col-md-6 pt-4">
                        <h3 className="block-title" style={{ fontFamily: 'Nunito', fontWeight: '600', }}>Development Skills</h3>
                        <div className="skill">
                            {/* <p className="skill-name" style={{ fontFamily: 'Nunito', fontWeight: '400', color: '#000000' }}>.Net Frame Work</p> */}
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Box sx={{ width: '100%', mr: 1 }}>
                                    <LinearProgress variant="determinate" value={95} style={{ height: '7px', borderTopRightRadius: '15px', borderBottomRightRadius: '15px', }} />
                                </Box>
                                <Box sx={{ minWidth: 35 }}>
                                    <Typography variant="body2" color="text.secondary">
                                        95%
                                    </Typography>
                                </Box>
                            </Box>
                        </div>
                        <div className="skill">
                            <p className="skill-name" style={{ fontFamily: 'Nunito', fontWeight: '400', color: '#000000' }}>React.js</p>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Box sx={{ width: '100%', mr: 1 }}>
                                    <LinearProgress variant="determinate" value={85} style={{ height: '7px', borderTopRightRadius: '15px', borderBottomRightRadius: '15px' }} />
                                </Box>
                                <Box sx={{ minWidth: 35 }}>
                                    <Typography variant="body2" color="text.secondary">
                                        85%
                                    </Typography>
                                </Box>
                            </Box>
                        </div>
                        <div className="skill">
                            <p className="skill-name" style={{ fontFamily: 'Nunito', fontWeight: '400', color: '#000000' }}>Angular.js</p>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Box sx={{ width: '100%', mr: 1 }}>
                                    <LinearProgress variant="determinate" value={85} style={{ height: '7px', borderTopRightRadius: '15px', borderBottomRightRadius: '15px' }} />
                                </Box>
                                <Box sx={{ minWidth: 35 }}>
                                    <Typography variant="body2" color="text.secondary">
                                        85%
                                    </Typography>
                                </Box>
                            </Box>
                        </div>

                        <div className="skill">
                            <p className="skill-name" style={{ fontFamily: 'Nunito', fontWeight: '400', color: '#000000' }}>Vue.js</p>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Box sx={{ width: '100%', mr: 1 }}>
                                    <LinearProgress variant="determinate" value={90} style={{ height: '7px', borderTopRightRadius: '15px', borderBottomRightRadius: '15px' }} />
                                </Box>
                                <Box sx={{ minWidth: 35 }}>
                                    <Typography variant="body2" color="text.secondary">
                                        90%
                                    </Typography>
                                </Box>
                            </Box>
                        </div>
                        <div className="skill">
                            <p className="skill-name" style={{ fontFamily: 'Nunito', fontWeight: '400', color: '#000000' }}>Next.js</p>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Box sx={{ width: '100%', mr: 1 }}>
                                    <LinearProgress variant="determinate" value={85} style={{ height: '7px', borderTopRightRadius: '15px', borderBottomRightRadius: '15px' }} />
                                </Box>
                                <Box sx={{ minWidth: 35 }}>
                                    <Typography variant="body2" color="text.secondary">
                                        85%
                                    </Typography>
                                </Box>
                            </Box>
                        </div>

                        <div className="skill">
                            <p className="skill-name" style={{ fontFamily: 'Nunito', fontWeight: '400', color: '#000000' }}>Node.js</p>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Box sx={{ width: '100%', mr: 1 }}>
                                    <LinearProgress variant="determinate" value={80} style={{ height: '7px', borderTopRightRadius: '15px', borderBottomRightRadius: '15px' }} />
                                </Box>
                                <Box sx={{ minWidth: 35 }}>
                                    <Typography variant="body2" color="text.secondary">
                                        80%
                                    </Typography>
                                </Box>
                            </Box>
                        </div>

                        <div className="skill">
                            <p className="skill-name" style={{ fontFamily: 'Nunito', fontWeight: '400', color: '#000000' }}>React Native</p>
                            {/* <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Box sx={{ width: '100%', mr: 1 }}>
                                    <LinearProgress variant="determinate" value={80} style={{height: '7px', borderTopRightRadius: '15px', borderBottomRightRadius: '15px'}} />
                                </Box>
                                <Box sx={{ minWidth: 35 }}>
                                    <Typography variant="body2" color="text.secondary">
                                        70%
                                    </Typography>
                                </Box>
                            </Box> */}
                        </div>

                    </div>

                    <div className="col-md-6 pt-4">
                        <h3 className="block-title" style={{ fontFamily: 'Nunito', fontWeight: '600', }}>Design Skills</h3>
                        <div className="skill">
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Box sx={{ width: '100%', mr: 1 }}>
                                    <LinearProgress variant="determinate" value={80} style={{ height: '7px', borderTopRightRadius: '15px', borderBottomRightRadius: '15px' }} />
                                </Box>
                                <Box sx={{ minWidth: 35 }}>
                                    <Typography variant="body2" color="text.secondary">
                                        80%
                                    </Typography>
                                </Box>
                            </Box>
                        </div>
                        <div className="skill">
                            <p className="skill-name" style={{ fontFamily: 'Nunito', fontWeight: '400', color: '#000000' }}>Bootstrap</p>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Box sx={{ width: '100%', mr: 1 }}>
                                    <LinearProgress variant="determinate" value={85} style={{ height: '7px', borderTopRightRadius: '15px', borderBottomRightRadius: '15px' }} />
                                </Box>
                                <Box sx={{ minWidth: 35 }}>
                                    <Typography variant="body2" color="text.secondary">
                                        85%
                                    </Typography>
                                </Box>
                            </Box>
                        </div>
                        <div className="skill">
                            <p className="skill-name" style={{ fontFamily: 'Nunito', fontWeight: '400', color: '#000000' }}>Material UI</p>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Box sx={{ width: '100%', mr: 1 }}>
                                    <LinearProgress variant="determinate" value={80} style={{ height: '7px', borderTopRightRadius: '15px', borderBottomRightRadius: '15px' }} />
                                </Box>
                                <Box sx={{ minWidth: 35 }}>
                                    <Typography variant="body2" color="text.secondary">
                                        80%
                                    </Typography>
                                </Box>
                            </Box>
                        </div>

                        <div className="skill">
                            <p className="skill-name" style={{ fontFamily: 'Nunito', fontWeight: '400', color: '#000000' }}>WordPress</p>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Box sx={{ width: '100%', mr: 1 }}>
                                    <LinearProgress variant="determinate" value={90} style={{ height: '7px', borderTopRightRadius: '15px', borderBottomRightRadius: '15px' }} />
                                </Box>
                                <Box sx={{ minWidth: 35 }}>
                                    <Typography variant="body2" color="text.secondary">
                                        90%
                                    </Typography>
                                </Box>
                            </Box>
                        </div>

                        <div className="skill">
                            <p className="skill-name" style={{ fontFamily: 'Nunito', fontWeight: '400', color: '#000000' }}>CSS</p>
                            {/* <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Box sx={{ width: '100%', mr: 1 }}>
                                    <LinearProgress variant="determinate" value={70} style={{height: '7px', borderTopRightRadius: '15px', borderBottomRightRadius: '15px'}} />
                                </Box>
                                <Box sx={{ minWidth: 35 }}>
                                    <Typography variant="body2" color="text.secondary">
                                        70%
                                    </Typography>
                                </Box>
                            </Box> */}
                        </div>
                    </div>
                </div>
                <div data-aos='zoom-in' data-aos-offset='200' className="row">
                    <div className="col-md-6 pt-4">
                        <h3 className="block-title" style={{ fontFamily: 'Nunito', fontWeight: '600', }}>Computer Skills</h3>
                        <div className="skill">
                            {/* <p className="skill-name" style={{ fontFamily: 'Nunito', fontWeight: '400', color: '#000000' }}>.Net Frame Work</p> */}
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Box sx={{ width: '100%', mr: 1 }}>
                                    <LinearProgress variant="determinate" value={95} style={{ height: '7px', borderTopRightRadius: '15px', borderBottomRightRadius: '15px' }} />
                                </Box>
                                <Box sx={{ minWidth: 35 }}>
                                    <Typography variant="body2" color="text.secondary">
                                        95%
                                    </Typography>
                                </Box>
                            </Box>
                        </div>
                        <div className="skill">
                            <p className="skill-name" style={{ fontFamily: 'Nunito', fontWeight: '400', color: '#000000' }}>Ms-Office</p>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Box sx={{ width: '100%', mr: 1 }}>
                                    <LinearProgress variant="determinate" value={85} style={{ height: '7px', borderTopRightRadius: '15px', borderBottomRightRadius: '15px' }} />
                                </Box>
                                <Box sx={{ minWidth: 35 }}>
                                    <Typography variant="body2" color="text.secondary">
                                        85%
                                    </Typography>
                                </Box>
                            </Box>
                        </div>
                        <div className="skill">
                            <p className="skill-name" style={{ fontFamily: 'Nunito', fontWeight: '400', color: '#000000' }}>Tally ERP9</p>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Box sx={{ width: '100%', mr: 1 }}>
                                    <LinearProgress variant="determinate" value={90} style={{ height: '7px', borderTopRightRadius: '15px', borderBottomRightRadius: '15px' }} />
                                </Box>
                                <Box sx={{ minWidth: 35 }}>
                                    <Typography variant="body2" color="text.secondary">
                                        90%
                                    </Typography>
                                </Box>
                            </Box>
                        </div>

                        <div className="skill">
                            <p className="skill-name" style={{ fontFamily: 'Nunito', fontWeight: '400', color: '#000000' }}>Internet & Communication</p>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Box sx={{ width: '100%', mr: 1 }}>
                                    <LinearProgress variant="determinate" value={80} style={{ height: '7px', borderTopRightRadius: '15px', borderBottomRightRadius: '15px' }} />
                                </Box>
                                <Box sx={{ minWidth: 35 }}>
                                    <Typography variant="body2" color="text.secondary">
                                        80%
                                    </Typography>
                                </Box>
                            </Box>
                        </div>

                        <div className="skill">
                            <p className="skill-name" style={{ fontFamily: 'Nunito', fontWeight: '400', color: '#000000' }}>Ms-Excel</p>
                            {/* <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Box sx={{ width: '100%', mr: 1 }}>
                                    <LinearProgress variant="determinate" value={70} style={{height: '7px', borderTopRightRadius: '15px', borderBottomRightRadius: '15px'}} />
                                </Box>
                                <Box sx={{ minWidth: 35 }}>
                                    <Typography variant="body2" color="text.secondary">
                                        70%
                                    </Typography>
                                </Box>
                            </Box> */}
                        </div>
                    </div>

                    <div className="col-md-6 pt-4">
                        <h3 className="block-title" style={{ fontFamily: 'Nunito', fontWeight: '600', }}>Languages Known</h3>
                        <div className="skill">
                            {/* <p className="skill-name" style={{ fontFamily: 'Nunito', fontWeight: '400', color: '#000000' }}>.Net Frame Work</p> */}
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Box sx={{ width: '100%', mr: 1 }}>
                                    <LinearProgress variant="determinate" value={99} style={{ height: '7px', borderTopRightRadius: '15px', borderBottomRightRadius: '15px' }} />
                                </Box>
                                <Box sx={{ minWidth: 35 }}>
                                    <Typography variant="body2" color="text.secondary">
                                        99%
                                    </Typography>
                                </Box>
                            </Box>
                        </div>
                        <div className="skill">
                            <p className="skill-name" style={{ fontFamily: 'Nunito', fontWeight: '400', color: '#000000' }}>Hindi</p>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Box sx={{ width: '100%', mr: 1 }}>
                                    <LinearProgress variant="determinate" value={85} style={{ height: '7px', borderTopRightRadius: '15px', borderBottomRightRadius: '15px' }} />
                                </Box>
                                <Box sx={{ minWidth: 35 }}>
                                    <Typography variant="body2" color="text.secondary">
                                        85%
                                    </Typography>
                                </Box>
                            </Box>
                        </div>
                        <div className="skill">
                            <p className="skill-name" style={{ fontFamily: 'Nunito', fontWeight: '400', color: '#000000' }}>Marathi</p>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Box sx={{ width: '100%', mr: 1 }}>
                                    <LinearProgress variant="determinate" value={50} style={{ height: '7px', borderTopRightRadius: '15px', borderBottomRightRadius: '15px' }} />
                                </Box>
                                <Box sx={{ minWidth: 35 }}>
                                    <Typography variant="body2" color="text.secondary">
                                        50%
                                    </Typography>
                                </Box>
                            </Box>
                        </div>

                        <div className="skill">
                            <p className="skill-name" style={{ fontFamily: 'Nunito', fontWeight: '400', color: '#000000' }}>English</p>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Box sx={{ width: '100%', mr: 1 }}>
                                    <LinearProgress variant="determinate" value={99} style={{ height: '7px', borderTopRightRadius: '15px', borderBottomRightRadius: '15px' }} />
                                </Box>
                                <Box sx={{ minWidth: 35 }}>
                                    <Typography variant="body2" color="text.secondary">
                                        99%
                                    </Typography>
                                </Box>
                            </Box>
                        </div>

                        <div className="skill">
                            <p className="skill-name" style={{ fontFamily: 'Nunito', fontWeight: '400', color: '#000000' }}>Bengali</p>
                            {/* <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Box sx={{ width: '100%', mr: 1 }}>
                                    <LinearProgress variant="determinate" value={70} style={{height: '7px', borderTopRightRadius: '15px', borderBottomRightRadius: '15px'}} />
                                </Box>
                                <Box sx={{ minWidth: 35 }}>
                                    <Typography variant="body2" color="text.secondary">
                                        70%
                                    </Typography>
                                </Box>
                            </Box> */}
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <div className="container">
                <div data-aos='zoom-in' data-aos-offset='200' className="row">
                    <h3 className="block-title" style={{ fontFamily: 'Nunito', fontWeight: '600', textAlign: 'center' }}>Development Skills</h3>
                    <div className="col-md-6 pt-4">
                        <div className="skill">
                            {/* <p className="skill-name" style={{ fontFamily: 'Nunito', fontWeight: '400', color: '#000000' }}>.Net Frame Work</p> */}
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Box sx={{ width: '100%', mr: 1 }}>
                                    <LinearProgress variant="determinate" value={85} style={{ height: '7px', borderTopRightRadius: '15px', borderBottomRightRadius: '15px', }} />
                                </Box>
                                <Box sx={{ minWidth: 35 }}>
                                    <Typography variant="body2" color="text.secondary">
                                        85%
                                    </Typography>
                                </Box>
                            </Box>
                        </div>
                        <div className="skill">
                            <p className="skill-name" style={{ fontFamily: 'Nunito', fontWeight: '400', color: '#000000' }}>Creativity</p>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Box sx={{ width: '100%', mr: 1 }}>
                                <LinearProgress variant="determinate" value={65} style={{ height: '7px', borderTopRightRadius: '15px', borderBottomRightRadius: '15px' }} />
                            </Box>
                            <Box sx={{ minWidth: 35 }}>
                                <Typography variant="body2" color="text.secondary">
                                    65%
                                </Typography>
                            </Box>
                        </Box>
                        </div>
                        <div className="skill">
                            <p className="skill-name" style={{ fontFamily: 'Nunito', fontWeight: '400', color: '#000000' }}>Communication</p>
                            {/* <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Box sx={{ width: '100%', mr: 1 }}>
                                <LinearProgress variant="determinate" value={85} style={{ height: '7px', borderTopRightRadius: '15px', borderBottomRightRadius: '15px' }} />
                            </Box>
                            <Box sx={{ minWidth: 35 }}>
                                <Typography variant="body2" color="text.secondary">
                                    85%
                                </Typography>
                            </Box>
                        </Box> */}
                        </div>
                    </div>
                    <div className="col-md-6 pt-4">
                        <div className="skill">
                            {/* <p className="skill-name" style={{ fontFamily: 'Nunito', fontWeight: '400', color: '#000000' }}>.Net Frame Work</p> */}
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Box sx={{ width: '100%', mr: 1 }}>
                                    <LinearProgress variant="determinate" value={85} style={{ height: '7px', borderTopRightRadius: '15px', borderBottomRightRadius: '15px', }} />
                                </Box>
                                <Box sx={{ minWidth: 35 }}>
                                    <Typography variant="body2" color="text.secondary">
                                        85%
                                    </Typography>
                                </Box>
                            </Box>
                        </div>
                        <div className="skill">
                            <p className="skill-name" style={{ fontFamily: 'Nunito', fontWeight: '400', color: '#000000' }}>Team Work</p>
                            {/* <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Box sx={{ width: '100%', mr: 1 }}>
                                <LinearProgress variant="determinate" value={85} style={{ height: '7px', borderTopRightRadius: '15px', borderBottomRightRadius: '15px' }} />
                            </Box>
                            <Box sx={{ minWidth: 35 }}>
                                <Typography variant="body2" color="text.secondary">
                                    85%
                                </Typography>
                            </Box>
                        </Box> */}
                        </div>
                    </div>
                </div>
            </div>
            <br />
        </div>
    )
}

