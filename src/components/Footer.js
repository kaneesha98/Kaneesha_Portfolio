import React from 'react';
import MailIcon from '@material-ui/icons/Mail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import {Typography, Box} from '@material-ui/core';

const Footer=()=>{
    return(<div style={{"backgroundColor":"#00100B", "padding":"0px"}}>
    <br />
    <h3 style={{"font-family": "'Pattaya', 'sans-serif'","color":"white","textAlign":"center"}}>Contact Details</h3>
    <br />
    <div className="row">
    <div className="col-md-3 center">
        <Box>
    <Typography variant="h6" align="center">
       <MailIcon style={{"color":"white"}}/> <p style={{"font-family": "'Montserrat', 'sans-serif'","color":"white" ,"textAlign":"center", "fontSize":"14px"}}>kaneesha98@gmail.com</p>
    </Typography>
  </Box>
    </div>
    <div className="col-md-6">
        
        
        <Box>
    <Typography variant="h6" align="center">
       <LinkedInIcon style={{"color":"white"}}/> <a href="https://www.linkedin.com/in/kaneesha-gandhi/"><p style={{"font-family": "'Montserrat', 'sans-serif'","color":"white" ,"textAlign":"center", "fontSize":"14px"}}>https://www.linkedin.com/in/kaneesha-gandhi/</p></a>
    </Typography>
  </Box>

    </div>
    <div className="col-md-3">
        
        
        
        <Box>
    <Typography variant="h6" align="center">
       <GitHubIcon style={{"color":"white"}}/> <a href="https://github.com/kaneesha98"><p style={{"font-family": "'Montserrat', 'sans-serif'","color":"white","textAlign":"center", "fontSize":"14px"}}>https://github.com/kaneesha98</p></a>
    </Typography>
  </Box>
        
    </div>
    </div>
    
    </div>);
}
export default Footer;