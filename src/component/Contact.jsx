import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import './style/Contact.css';
import Swal from 'sweetalert2';

import Facebook from '@mui/icons-material/Facebook';
import Instagram from '@mui/icons-material/Instagram';
import Telegram from '@mui/icons-material/Twitter';
import LinkedIn from '@mui/icons-material/LinkedIn';
import GitHub from '@mui/icons-material/GitHub';
import SendIcon from '@mui/icons-material/SendRounded';
import CustomizedSnackbars from './CustomizedSnackbars';

import WhatsAppWidget from 'react-whatsapp-widget'
import 'react-whatsapp-widget/dist/index.css'

export default function Contact() {
    const form = useRef();
    const [spacing, setSpacing] = React.useState(2);
    const [show, setShow] = React.useState(false);
    const [showError, setShowError] = React.useState(false);
    const [error, setError] = React.useState(false);
    const [text, setText] = React.useState(false);
    const [value, setValue] = React.useState({
        name: '',
        number: '',
        email: '',
        message: ''
    })

    const handleClose = () => {
        setShow(false);
        setShowError(false);
        setError(false)
    };


    var data = JSON.stringify({
        userData: {
            Name: value.name,
            Number: value.number,
            Email: value.email,
            Message: value.message
        }
    })

    const sendEmail = (e) => {
        e.preventDefault();
        //console.log(data)
        if (value.name != '', value.number != '', value.email != '', value.message != '') {
            setText(true)
            emailjs.sendForm('service_fc2yrgh', 'template_4feffut', form.current, 'user_Jm2HDcF58yC1td5yd5uVy')
                .then((result) => {
                    console.log(result);
                    if (result.text == 'OK') {
                        setShow(true);
                        setValue({ ...value, name: '', number: '', email: '', message: '' });
                        setText(false)
                    } else {
                        setShowError(true)
                        setText(false)
                        setValue({ ...value, name: '', number: '', email: '', message: '' });
                    }
                }, (error) => {
                    console.log(error);
                    setError(true)
                    setText(false)
                    setValue({ ...value, name: '', number: '', email: '', message: '' });
                });
        } else {
            Swal.fire('please fill all required fields', 'Uable to send', 'info')
        }
    }

    const githuburl = () => {
        window.open('http://github.com/prem-pb')
    }

    return (
        <div id="contact" style={{ backgroundColor: '#FFFFFF' }}>
            <div style={{ marginTop: '20px' }}>
                {/* {text && <div className="loader"></div>} */}
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={text}
                >
                    <CircularProgress />
                </Backdrop>
                <header className="container">
                    <br />
                    <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
                        <h2 data-aos='fade-down' data-aos-offset='200' style={{ textAlign: 'center', textTransform: 'uppercase', fontFamily: 'Nunito', fontWeight: '700' }}>Contact</h2>
                    </div>
                </header>

                <Grid sx={{ flexGrow: 1 }} container spacing={2}>
                    <Grid item xs={12}>
                        <Grid container justifyContent="center" spacing={spacing}>
                            <Grid item style={{ display: 'flex' }}>
                                <Paper data-aos='zoom-in' data-aos-offset='200' sx={{ height: 500, width: 390 }} style={{ boxShadow: '5px 10px 30px rgba(0, 0, 0, 0.425)' }}>
                                    <form onSubmit={sendEmail} ref={form} className={'contactForm'}>
                                        <Typography variant="h6" style={{ fontFamily: 'Nunito', fontWeight: '700' }}>Get In Touch</Typography>
                                        <TextField type='text' onPaste={(e) => { e.preventDefault(); return false }} onCopy={(e) => { e.preventDefault(); return false }} value={value.name} onChange={(e) => setValue({ ...value, name: e.target.value })} className='contactTextField' style={{ margin: '15px', fontFamily: 'Nunito', }} fullWidth name="name" label="Name" placeholder="Name" variant="outlined" />
                                        <TextField type='number' onPaste={(e) => { e.preventDefault(); return false }} onCopy={(e) => { e.preventDefault(); return false }} value={value.number} onChange={(e) => setValue({ ...value, number: e.target.value })} className='contactTextField' style={{ margin: '15px', fontFamily: 'Nunito', }} fullWidth name="number" label="Number" placeholder="Number" variant="outlined" />
                                        <TextField type='text' onPaste={(e) => { e.preventDefault(); return false }} onCopy={(e) => { e.preventDefault(); return false }} value={value.email} onChange={(e) => setValue({ ...value, email: e.target.value })} className='contactTextField' style={{ margin: '15px', fontFamily: 'Nunito', }} fullWidth name="email" label="Email" placeholder="Emai" variant="outlined" />
                                        <TextField type='text' onPaste={(e) => { e.preventDefault(); return false }} onCopy={(e) => { e.preventDefault(); return false }} value={value.message} onChange={(e) => setValue({ ...value, message: e.target.value })} maxRows={4} className='contactTextField' style={{ margin: '15px', fontFamily: 'Nunito', }} fullWidth name="message" label="Message" placeholder="Message" variant="outlined" />
                                        <Button endIcon={text ? null : <SendIcon />} type='submit' variant="contained" fullWidth color='primary' style={{ margin: '15px', fontFamily: 'Nunito', fontWeight: '700' }} size='large' className={'contactButton'}>{text ? 'Please wait' : 'Submit'}</Button>
                                    </form>
                                </Paper>
                            </Grid>
                            <Grid item style={{ display: 'flex' }}>
                                <Paper data-aos='zoom-in' data-aos-offset='200' sx={{ height: 500, width: 390 }} style={{ boxShadow: '5px 10px 30px rgba(0, 0, 0, 0.425)' }}>
                                    <div style={{ margin: '20px' }}>
                                        {/* <h2 className="block-title" style={{ textAlign: 'center', fontFamily: 'Nunito', fontWeight: '700' }}>Personal Information</h2> */}
                                        <Typography variant="h6" style={{ fontFamily: 'Nunito', fontWeight: '700', textAlign: 'center' }}>Personal Information</Typography>
                                        <div style={{ marginTop: '20px', }}>
                                            <h5 style={{ fontFamily: 'Nunito', fontWeight: '600', lineHeight: '25px' }}>Name:   <span style={{ fontFamily: 'Nunito', fontWeight: '500', color: 'gray', fontSize: '20px' }}>Govinda Biswas.</span> </h5>
                                            <h5 style={{ fontFamily: 'Nunito', fontWeight: '600', lineHeight: '25px' }}>Birth:  <span style={{ fontFamily: 'Nunito', fontWeight: '500', color: 'gray', fontSize: '20px' }}>07/03/2001.</span> </h5>
                                            <h5 style={{ fontFamily: 'Nunito', fontWeight: '600', lineHeight: '25px' }}>Gender:  <span style={{ fontFamily: 'Nunito', fontWeight: '500', color: 'gray', fontSize: '20px' }}>Male.</span> </h5>
                                            <h5 style={{ fontFamily: 'Nunito', fontWeight: '600', lineHeight: '25px' }}>Marital Status:  <span style={{ fontFamily: 'Nunito', fontWeight: '500', color: 'gray', fontSize: '20px' }}>Unmarried.</span> </h5>
                                            <h5 style={{ fontFamily: 'Nunito', fontWeight: '600', lineHeight: '25px' }}>Language Known:  <span style={{ fontFamily: 'Nunito', fontWeight: '500', color: 'gray', fontSize: '20px' }}>Hindi, Marathi, English, Bengali.</span> </h5>
                                            <h5 style={{ fontFamily: 'Nunito', fontWeight: '600', lineHeight: '25px' }}>Email:  <span style={{ fontFamily: 'Nunito', fontWeight: '500', color: 'gray', fontSize: '20px' }}>govindbiswas079@gmail.com.</span> </h5>
                                            <h5 style={{ fontFamily: 'Nunito', fontWeight: '600', lineHeight: '25px' }}>Mobile: <span style={{ fontFamily: 'Nunito', fontWeight: '500', color: 'gray', fontSize: '20px' }}>+91 9511723507.</span> </h5>
                                            <h5 style={{ fontFamily: 'Nunito', fontWeight: '600', lineHeight: '25px' }}>GitHub: <span style={{ fontFamily: 'Nunito', fontWeight: '500', color: 'gray', fontSize: '20px', cursor: 'pointer' }} onClick={() => githuburl()}>www.github.com/prem-pb</span> </h5>
                                            <h5 style={{ fontFamily: 'Nunito', fontWeight: '600', lineHeight: '25px' }}>Address: <span style={{ fontFamily: 'Nunito', fontWeight: '500', color: 'gray', fontSize: '20px' }}>Chandrapur, Maharashtra, India</span> </h5>

                                        </div>
                                        <div style={{ display: 'flex', marginTop: '40px', justifyContent: 'center' }}>
                                            <Facebook style={{ marginLeft: '7px', cursor: 'pointer', color: 'blue', fontSize: '30px' }} onClick={() => window.open('https://www.facebook.com/govinda.biswas.980')} />
                                            <Instagram style={{ marginLeft: '7px', cursor: 'pointer', color: 'purple', fontSize: '30px' }} onClick={() => window.open('https://www.instagram.com/prembiswas_07/')} />
                                            <Telegram style={{ marginLeft: '7px', cursor: 'pointer', color: 'blue', fontSize: '30px' }} onClick={() => window.open('https://twitter.com/@Govinda_079')} />
                                            <LinkedIn style={{ marginLeft: '7px', cursor: 'pointer', color: 'blue', fontSize: '30px' }} onClick={() => window.open('https://www.linkedin.com/in/govinda-biswas-82b94a1b7')} />
                                            <GitHub style={{ marginLeft: '7px', cursor: 'pointer', fontSize: '30px' }} onClick={() => window.open('https://github.com/prem-pb')} />
                                        </div>
                                    </div>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                {/* <WhatsAppChat /> */}
                <WhatsAppWidget
                    phoneNumber='919511723507'
                    companyName="Prem Biswas"
                    textReplyTime="online"
                />
            </div >
            <br />
            <br />
            <CustomizedSnackbars show={show} showError={showError} error={error} handleClose={handleClose} />
        </div>
    )
}

