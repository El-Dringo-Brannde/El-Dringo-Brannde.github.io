import React from 'react';
import SkewedContainer from 'sc-react';
import Card, { CardMedia, CardContent } from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider'

import './footer.css'

const Foot = () => {
   return (
      <SkewedContainer
         top='left'
         bgColor="#E64A19"
         noMargin>
         <Grid container justify='center'>
            <Typography variant='display2' className='text-center'>Contact Me</Typography>
            <Divider style={{ margin: '5vh 15vw', width: '70vw' }}></Divider>
         </Grid>

         <Grid container justify='center' style={{ marginBottom: '5vh' }} >
            <Grid item lg={3} style={{ margin: '25px 35px', maxWidth: '70vw' }}>
               <Typography variant='body2' style={{ fontSize: '1rem' }}>
                  I'd love to answer any questions you may have about my availability, skills, any of the work I have done, or just to get to know me better.
               </Typography>
               <br />
               <Typography variant='body2' style={{ fontSize: '1rem' }}>
                  Please feel free to contact me through any of the methods below, or take a look at some more work of mine as well, check back regularly because I'm always building or learning something cool.
                  </Typography>

               <div style={{ margin: 25 }}>
                  <i class='fas fa-phone fa-lg' style={{ marginRight: 25 }}></i>
                  541 510 5034
               </div>
               <div style={{ margin: 25 }}>
                  <Button href="mailto:Brandondring31@gmail.com?Subject=Github%20Portfolio" style={{ paddingLeft: 0 }}>
                     <i class="fas fa-envelope fa-lg" style={{ marginRight: 25 }}></i>
                     Email
                  </Button>
               </div>
               <div style={{ margin: 25 }}>
                  <Button href='https://www.linkedin.com/in/brandon-dring/' style={{ paddingLeft: 0 }}>
                     <i class="fab fa-linkedin fa-lg" style={{ marginRight: 25 }}></i>
                     Linked In
                  </Button>
               </div>
               <div style={{ margin: 25 }}>
                  <Button href='https://github.com/El-Dringo-Brannde' style={{ paddingLeft: 0 }}>
                     <i class="fab fa-github fa-lg" style={{ marginRight: 25 }}></i>
                     Github
                  </Button>

               </div>
            </Grid>
            <Grid item lg={3} style={{ margin: '25px 35px', maxWidth: '40vw' }}>
               <Card raised >
                  <div className='contact-photo'></div>
               </Card>
            </Grid>
         </Grid>
         <footer style={{ background: '#00B0FF' }} >
            <Grid container justify='center'>
               <Grid item>
                  <div>
                     Made with ❤️ in Portland by El-Dringo-Brannde
               </div>
               </Grid>
            </Grid>
         </footer>
      </SkewedContainer >
   );
}

export default Foot;
