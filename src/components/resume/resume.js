import React from 'react';
import SkewedContainer from 'sc-react';
import Grid from 'material-ui/Grid';
import Icon from 'material-ui/Icon'
import ExpSection from './../../reusables/expSection'
import EduSection from './../../reusables/eduSection';
import jobExp from './jobExp'
import eduExp from './eduExp'
import Divider from 'material-ui/Divider';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const Resume = () => {
   return (
      <SkewedContainer
         top='right'
         bottom="right"
         bgColor="white"
         noMargin>
         <Grid container justify='center'>
            <Typography variant='display2' className='text-center'>R&#233;sum&#233;</Typography>

         </Grid>
         <Grid container justify='center'>
            <Button variant='flat' >
               <Icon>get_app</Icon>
               Download
               </Button>
         </Grid>
         <Divider style={{ margin: '5vh 15vw', width: '70vw' }}></Divider>
         <Grid container justify='center'>
            <Grid item lg={2} style={{ padding: 20 }}>
               <Typography variant='display1'>Experience</Typography>
            </Grid>
            <Grid item lg={8} style={{ padding: 20 }}>
               {jobExp.map(job => {
                  return (
                     <ExpSection
                        key={job.start}
                        title={job.title}
                        iconType='work'
                        description={job.description.split('\n').map(i => {
                           return (
                              <div>{i}<br /></div>
                           )
                        })}
                        company={job.company}
                        start={job.start}
                        end={job.end}
                     />
                  )
               })}
               <Divider></Divider>
            </Grid>
         </Grid>
         <Grid container justify='center'>
            <Grid item lg={2} style={{ padding: 20 }}>
               <Typography variant='display1'>Education</Typography>
            </Grid>
            <Grid item lg={8} style={{ padding: 20 }}>
               {eduExp.map(school => {
                  return (
                     <EduSection
                        key={school.start}
                        title={school.title}
                        description={school.description.split('\n').map(i => {
                           return (
                              <span>{i}</span>
                           )
                        })}
                        academics={school.academics}
                        company={school.name}
                        awards={school.awards}
                        activities={school.activities}
                        start={school.start}
                        end={school.end}
                     />
                  )
               })}
            </Grid>
         </Grid>
      </SkewedContainer>
   );
}

export default Resume;
