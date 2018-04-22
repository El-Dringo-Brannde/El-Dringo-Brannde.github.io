import React from 'react';
import SkewedContainer from 'sc-react';
import Grid from 'material-ui/Grid';

const Resume = () => {
   return (
      <SkewedContainer
         top='right'
         bottom="right"
         bgColor="white"
         className='full-screen'
         noMargin>
         <Grid container justify='center'>
            <h1 className='text-center'>About Me</h1>
         </Grid>
         <Grid container >
            <Grid item xs style={{ padding: 20 }}>
               <h3>Hi.</h3>
               <p>Thanks for checking out my portfolio page.</p>
            </Grid>
         </Grid>
      </SkewedContainer>
   );
}

export default Resume;
