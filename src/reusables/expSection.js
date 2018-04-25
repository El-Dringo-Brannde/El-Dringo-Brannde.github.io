import Grid from 'material-ui/Grid';
import Icon from 'material-ui/Icon'
import React from 'react';
import Typography from 'material-ui/Typography';

const ExpSection = props => {
   return (
      <Grid container>
         <Grid item xs style={{ padding: 20, maxWidth: '58vw' }}>
            <Typography variant = 'headline'>{props.title}</Typography>
            {props.description}
         </Grid>
         <Grid item lg={2} style={{ padding: 20, maxWidth: '7vw' }}>
            <Icon>work</Icon>
            <div>{props.company}</div>
            <br /> <br />
            <Icon>access_time</Icon>
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