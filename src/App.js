import React, { useEffect } from 'react';
import { Online, Offline } from 'react-detect-offline';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import PullToRefresh from "pull-to-refresh-react";
// import { NavBar, Home, About, Contact, Technology, Poetfolio, Service, Skills, Education, Experience } from './component/Index';
import NavBar from './component/NavBar';
import Home from './component/Home';
import About from './component/About';
import Education from './component/Education';
import Experience from './component/Experience';
import Technology from './component/Technology';
import Portfolio from './component/Portfolio';
import Service from './component/Service';
import Skills from './component/Skills';
import Contact from './component/Contact';
import MyInterest from './component/MyInterest';
import Object from './component/Object';
import Footer from './component/Footer';
import icon from './img/net.png'


import Aos from 'aos';
import 'aos/dist/aos.css'

function App() {
  const [click, setClick] = React.useState(false);
  const cliskOpenEvent = () => setClick(!click);
  const clickClosEvent = () => setClick(false);
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const onRetry = () => {
    setOpen(true);
    setTimeout(() => {
      window.location.reload();
    }, 2000)
  };

  const onRefresh = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 5000);
    });
  }

  return (
    <>
      <div>
        <PullToRefresh
          options={{ pullDownHeight: 100 }}
          onRefresh={onRefresh}
        >
          {/* <Online> */}
            <NavBar cliskOpenEvent={cliskOpenEvent} clickClosEvent={clickClosEvent} click={click} />
            <Home />
            <About />
            <Education />
            <Experience />
            <Skills />
            <Portfolio />
            <Service />
            <Technology />
            <MyInterest />
            <Object />
            <Contact />
            <Footer />
          {/* </Online> */}

          {/* <Offline>
            <div className='offlineBG'>
              <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
              >
                <CircularProgress />
              </Backdrop>
              <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '40px' }}>
                <img src={icon} alt='' style={{ width: '150px' }} />
              </div>
              <h1 style={{ textAlign: 'center', textTransform: 'uppercase', letterSpacing: '5px', fontWeight: '700', fontFamily: 'Nunito', color: 'blue', paddingTop: '40px' }}>no internet</h1>
              <p style={{ textAlign: 'center', textTransform: 'uppercase', fontWeight: '500', fontFamily: 'Nunito', color: '#FFFFFF', paddingTop: '10px' }}>You're offline right now. Check your connection.</p>
              <div style={{ width: '100%', position: 'absolute', bottom: '0', justifyContent: 'center', alignItems: 'center', }}>
                <div style={{ margin: '20px' }}>
                  <button type='button' onClick={() => onRetry()} style={{ textTransform: 'uppercase', fontWeight: '500', fontFamily: 'Nunito', color: '#FFFFFF', backgroundColor: '#1fde1f82', width: '100%', border: 'none', borderRadius: '0.25rem', }} className='btn-lg'>retry</button>
                </div>
              </div>
            </div>
          </Offline> */}
        </PullToRefresh>
      </div>
    </>
  );
}

export default App;
