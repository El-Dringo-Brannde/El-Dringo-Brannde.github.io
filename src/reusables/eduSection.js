import Grid from 'material-ui/Grid';
import Icon from 'material-ui/Icon'
import React from 'react';
import Typography from 'material-ui/Typography';


const EduSection = props => {
   return (
      <Grid container>
         <Grid item xs style={{ padding: 20 }}>
            <Typography variant='headline'>{props.title}</Typography>
            <br />
            <span>
               <i> <strong>Summary - </strong> </i>
               {props.description}
            </span>
            <br /><br />
            <i> <strong>Academics -  </strong></i> {props.academics}
            <br /><br />
            <i><strong>Awards - </strong></i> {props.awards}

            <br /><br />
            <i> <strong>Activities -</strong> </i> {props.activities}
         </Grid>
         <Grid item lg={2} style={{ padding: 20 }}>
            <Icon>school</Icon>
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

export default EduSection