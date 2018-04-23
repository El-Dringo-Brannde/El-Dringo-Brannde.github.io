import React from 'react';
import SkewedContainer from 'sc-react';
import Grid from 'material-ui/Grid';
import Icon from 'material-ui/Icon'
import ResumeSection from './../../reusables/resumeSection'
import jobExp from './jobExp'
import eduExp from './eduExp'
import Divider from 'material-ui/Divider';

const Resume = () => {
   return (
      <SkewedContainer
         top='right'
         bottom="right"
         bgColor="white"
         noMargin>
         <Grid container justify='center'>
            <h1 className='text-center'>R&#233;sum&#233;</h1>
         </Grid>
         <Grid container justify='center'>
            <Grid item lg={1} style={{ padding: 20 }}>
               <h3>Experience</h3>
            </Grid>
            <Grid item lg={8} style={{ padding: 20 }}>
               {jobExp.map(job => {
                  return (
                     <ResumeSection
                        key={job.start}
                        title={job.title}
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
               <Grid item lg={1} style={{ padding: 20 }}>
               <h3>Education</h3>
            </Grid>

            </Grid>
         </Grid>
      </SkewedContainer>
   );
}

export default Resume;
