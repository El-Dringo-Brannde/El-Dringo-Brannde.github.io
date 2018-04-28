import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button/'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


const NavBar = props => {
   return (
      <AppBar position='sticky' color='white' style={{ padding: 10 }}>
         <Grid container spacing={46}>
            <Grid item sm={8}>
               <Typography
                  variant="title"
                  color="inherit"
                  style={{ cursor: 'pointer' }}
                  onClick={() => scroller.scrollTo('intro', {
                     offset: -100,
                     duration: 1000,
                     smooth: 'easeInOutQuart'
                  })}>
                  Brandon Dring
                  </Typography>
            </Grid>
            <Grid item sm={4}  >
               <Grid container justify='flex-end'>
                  <Grid item style={{ padding: '0px 10px' }}>
                     <Typography
                        variant="subheading"
                        color="inherit"
                        style={{ cursor: 'pointer' }}
                        onClick={() => scroller.scrollTo('about-me', {
                           offset: -100,
                           duration: 1000,
                           smooth: 'easeInOutQuart'
                        })}>
                        About Me
                     </Typography>
                  </Grid>
                  <Grid item style={{ padding: '0px 10px' }}>
                     <Typography
                        variant="subheading"
                        color="inherit"
                        style={{ cursor: 'pointer' }}
                        onClick={() => scroller.scrollTo('resume', {
                           offset: -100,
                           duration: 1000,
                           smooth: 'easeInOutQuart'
                        })}>
                        Resume
                     </Typography>
                  </Grid>
                  <Grid item style={{ padding: '0px 10px' }}>
                     <Typography
                        variant="subheading"
                        color="inherit"
                        style={{ cursor: 'pointer' }}
                        onClick={() => scroller.scrollTo('portfolio', {
                           offset: -100,
                           duration: 1000,
                           smooth: 'easeInOutQuart'
                        })}>
                        Portfolio
                     </Typography>
                  </Grid>
                  <Grid item style={{ padding: '0px 10px' }}>
                     <Typography
                        variant="subheading"
                        color="inherit"
                        style={{ cursor: 'pointer' }}
                        onClick={() => scroller.scrollTo('contact-me', {
                           offset: -100,
                           duration: 1000,
                           smooth: 'easeInOutQuart'
                        })}>
                        Contact Me
                     </Typography>
                  </Grid>
               </Grid>
            </Grid>
         </Grid>
      </AppBar>
   )
}

export default NavBar