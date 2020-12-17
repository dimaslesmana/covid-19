import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import './AboutUs.css'

const About = (props) => {
    return <div className="About-wrap">
        <div>
        <div className="photo" id={props.image}></div>
        <img src={props.image} alt="" />
        <p>{props.nama}</p>
        <p><a href={props.akun}><i><GitHubIcon className="gitIcon" /></i></a></p>
        </div>
        
    </div>
}

export default About;