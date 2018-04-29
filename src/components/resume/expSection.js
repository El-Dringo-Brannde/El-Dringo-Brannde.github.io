import Grid from 'material-ui/Grid';
import React from 'react';
import Typography from 'material-ui/Typography';

const ExpSection = props => {
   return (
      <Grid container>
         <Grid item xs style={{ padding: 20, maxWidth: '50vw' }}>
            <Typography variant='headline'>{props.title}</Typography>
            <Typography variant='body2' style={{ fontSize: '1em' }}> {props.description}</Typography>
         </Grid>
         <Grid item lg={2} style={{ padding: 20, maxWidth: '10vw' }}>
            <i className="fas fa-briefcase"></i>
            <Typography variant='body2' style={{ fontSize: '1em' }}>{props.company}</Typography>

            <br /> <br />
            <i className="far fa-clock"></i>
            <br />
            <Typography variant='body2' style={{ fontSize: '1em' }}>{props.start}</Typography>
            <br />
            -
            <br />
            <Typography variant='body2' style={{ fontSize: '1em' }}>{props.end}</Typography>
         </Grid>
      </Grid>
   )
}

export default ExpSection