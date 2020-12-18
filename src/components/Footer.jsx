import React, { Fragment } from 'react';
import { Typography } from '@material-ui/core';

const Footer = () => {
  return (
    <Fragment>
      <div className="Sub-Footer">
        <Typography variant="h6">
          Repo GitHub
        </Typography>
        <Typography variant="subtitle1">
          <a href="https://github.com/dimaslesmana/covid-19" target="_blank" rel="noreferrer">https://github.com/dimaslesmana/covid-19</a>
        </Typography>
      </div>
      <div className="Footer">
        <Typography variant="subtitle1">
          &copy; {new Date().getFullYear()} · Kelompok Jeruk · All rights reserved
        </Typography>
      </div>
    </Fragment>
  );
}

export default Footer;