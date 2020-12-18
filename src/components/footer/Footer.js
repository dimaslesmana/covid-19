import React from "react";
import "./Footer.css";
import { AppBar, Toolbar, Switch, Typography, Button } from '@material-ui/core';

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
      <div className="row" style={{textAlign: "center"}}>
        <div>  
          <p className="col-sm" style={{fontWeight: "normal", display: "inline-block"}}>
            &copy;{new Date().getFullYear()} KELOMPOK JERUK
          </p>
          <Button color="inherit" href="/aboutus" style={{fontWeight: "normal", display: "inline-block", marginTop: -2}}>About Us</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;