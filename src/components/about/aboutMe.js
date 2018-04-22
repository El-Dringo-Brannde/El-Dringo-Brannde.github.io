import React from 'react';
import SkewedContainer from 'sc-react';
import Card, { CardMedia } from 'material-ui/Card';
import Grid from 'material-ui/Grid';

const AboutMe = () => {
   return (
      <SkewedContainer
         top='left'
         bottom="left"
         bgColor="#f2f2f2"
         className='full-screen'
         noMargin>
         <Grid container justify='center'>
            <h1 className='text-center'>About Me</h1>
         </Grid>
         <Grid container >
            <Grid item xs style={{ padding: 20 }}>
               <Card>
                  <CardMedia>
                     <img src='https://i.imgur.com/yB4EGz1.jpg' style={{ height: '100%', width: '100%' }} />
                  </CardMedia>
               </Card>
            </Grid>
            <Grid item xs style={{ padding: 20 }}>
               <h3>Hi.</h3>
               <p>Thanks for checking out my portfolio page.</p>
            </Grid>
         </Grid>
      </SkewedContainer>
   )
}

export default AboutMe