import React, { Fragment } from 'react';
import './AboutUs.css'
import About from './About';

const AboutUs = () => {  
    return(
        <Fragment>
            <h1>ABOUT US</h1>
            <h2>Kelompok Jeruk</h2>
            <h2>Kelas: IF300-C/CL</h2>
            <About 
              image="photoProfil1"
              nama="Dimas Lesmana - (00000041281)"
              akun="https://github.com/dimaslesmana"
            />
            <About 
              image="photoProfil2"
              nama="M. Akmal Hisyam - (00000040027)"
              akun="https://github.com/akmalhisyammm"
            />
            <About 
              image="photoProfil3"
              nama="Christian Siagian - (00000038106)"
              akun="https://github.com/christiansiagiann"
            />
            <About 
              image="photoProfil4"
              nama="Fahmi Ihsan - (00000041084)"
              akun="https://github.com/fahmiihsan00"
            />
        </Fragment>
    )
}

export default AboutUs;