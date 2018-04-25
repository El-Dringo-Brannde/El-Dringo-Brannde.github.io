import Grid from 'material-ui/Grid';
import React from 'react';
import Typography from 'material-ui/Typography';

const ExpSection = props => {
   return (
      <Grid container>
         <Grid item xs style={{ padding: 20, maxWidth: '50vw' }}>
            <Typography variant='headline'>{props.title}</Typography>
            {props.description}
         </Grid>
         <Grid item lg={2} style={{ padding: 20, maxWidth: '10vw' }}>
            <i class="fas fa-briefcase"></i>

            <div>{props.company}</div>
            <br /> <br />
            <i class="far fa-clock"></i>
            <br />
            {props.start}
            <br />
            -
            <br />
            {props.end}
         </Grid>
      </Grid>
   )
}

export default ExpSection