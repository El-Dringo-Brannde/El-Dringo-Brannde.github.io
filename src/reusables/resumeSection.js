import Grid from 'material-ui/Grid';
import Icon from 'material-ui/Icon'
import React from 'react';

const ResumeSection = props => {
   return (
      <Grid container>
         <Grid item xs style={{ padding: 20 }}>
            <strong>{props.title}</strong>
            {props.description}
         </Grid>
         <Grid item lg={2} style={{ padding: 20 }}>
            <Icon>work</Icon> {props.company}
            <br /> <br />
            {props.start}
            <br />
            -
            <br />
            {props.end}
         </Grid>
      </Grid>
   )
}

export default ResumeSection