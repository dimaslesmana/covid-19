import React, { Fragment } from 'react';
import { Grid, Typography, Divider } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';

import './AboutUs.css';

const AboutUs = () => {
  const About = (props) => {
    return (
      <Fragment>
        <div className="photo" id={props.image}></div>
        <Typography variant="subtitle1">{props.nama}</Typography>
        <Typography variant="subtitle1" gutterBottom>{props.nim}</Typography>
        <Typography>
          <a href={props.akun} target="_blank" rel="noreferrer">
            <i><GitHubIcon className="gitIcon" /></i>
          </a>
        </Typography>
      </Fragment>
    )
  }
  
  return (
    <div className="About-Us">
      <div className="Root">
          <Typography variant="h2" gutterBottom>Kelompok Jeruk</Typography>
          <Typography variant="h6" gutterBottom>IF300-C/CL</Typography>
          <Divider />
          <Grid container spacing={2}>
            <Grid item sm={3} xs={12}>
              <About 
                image="photoProfil1"
                nama="Christian Andreas Siagian"
                nim="00000038106"
                akun="https://github.com/christiansiagiann"
              />
            </Grid>
            <Grid item sm={3} xs={12}>
              <About 
                image="photoProfil2"
                nama="Dimas Lesmana"
                nim="00000041281"
                akun="https://github.com/dimaslesmana"
              />
            </Grid>
            <Grid item sm={3} xs={12}>
              <About 
                image="photoProfil3"
                nama="Fahmi Ihsan"
                nim="00000041084"
                akun="https://github.com/fahmiihsan00"
              />
            </Grid>
            <Grid item sm={3} xs={12}>
              <About 
                image="photoProfil4"
                nama="Muhammad Akmal Hisyam"
                nim="00000040027"
                akun="https://github.com/akmalhisyammm"
              />
            </Grid>
          </Grid>
      </div>
    </div>
  )
}

export default AboutUs;