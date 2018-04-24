import Grid from 'material-ui/Grid';
import Icon from 'material-ui/Icon'
import React from 'react';

const EduSection = props => {
   return (
      <Grid container>
         <Grid item xs style={{ padding: 20 }}>
            <h4>{props.title}</h4>
            <span>
               <i>Summary - </i>
               {props.description}
            </span>
            <br /><br />
            <i>Academics - </i> {props.academics}
            <br /><br />
            <i>Awards - </i> {props.awards}

            <br /><br />
            <i>Activities - </i> {props.activities}
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

export default EduSection