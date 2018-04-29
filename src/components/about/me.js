import React from 'react';
import SkewedContainer from 'sc-react';
import Card, { CardMedia, CardContent } from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import SkillRating from './ratings'
import Skills from './skills';
import Divider from 'material-ui/Divider'
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import ScrollAnimation from "react-animate-on-scroll";




const AboutMe = () => {
   return (
      <SkewedContainer
         top='left'
         bottom="left"
         bgColor="#F44336"
         noMargin
         className='about-me'
         style={{ marginBottom: 100 }}
      >
         <Grid container justify='center'>
            <ScrollAnimation animateOnce animateIn='bounceInDown'>
               <Typography variant='display2' className='text-center'>About Me</Typography>
            </ScrollAnimation>
            <Divider style={{ margin: '5vh 15vw', width: '70vw' }}></Divider>

         </Grid>
         <Grid container justify='center'>
            <Grid item lg={3} style={{ margin: '25px 35px' }}>
               <ScrollAnimation animateOnce animateIn='bounceInLeft'>
                  <Card raised >
                     <div className='image-container-fill'></div>
                  </Card>
               </ScrollAnimation>
            </Grid>
            <Grid item xl={3} style={{ margin: 25 }} className='text-center'>
               <ScrollAnimation animateOnce animateIn='bounceInUp'>
                  <Typography variant='display1' style={{ marginTop: 0 }}>Skills</Typography>
                  {Skills.map(skill => {
                     return (
                        <SkillRating
                           key={skill.name}
                           skill={skill.name}
                           rating={skill.rating} />
                     )
                  })}
               </ScrollAnimation>
            </Grid>
            <Grid item lg={4} style={{ margin: '25px 35px', maxWidth: '80vw' }}>
               <ScrollAnimation animateOnce animateIn='bounceInRight'>
                  <Card raised>
                     <CardContent>
                        <Typography variant='headline'>Hi.</Typography>
                        <br />
                        <Typography variant='body2' style={{ fontSize: '1em', lineHeight: '1.15em' }}>
                           Thanks for checking out my portfolio page. My name is Brandon,
                           I'm a big fan of travelling on my motorcycle when I can, eating all
                           the food I can find, and tasting local beers. I also pretty religiously
                           follow the NBA, College Football, NFL, NHL.. really any sports.
                        </Typography>
                        <br />
                        <Typography variant='body2' style={{ fontSize: '1em', lineHeight: '1.15em' }}>
                           Currently I'm attending Oregon State University as a Computer Science
                           student, with a focus in Human Computer Interaction, and UX design
                           as I saw it was one of my weakest qualities. I'm just about done too! I
                           only need to take a few underwater basket weaving classes then I'm done
                           by December 2018!
                           </Typography>
                        <br />
                        <Typography variant='body2' style={{ fontSize: '1em', lineHeight: '1.15em' }}>
                           Outside of school I like to poke around different disciplines, and
                           programming languages or frameworks. Right now I have a mobile/ cloud
                           design bug, and have been exploring technologies in those areas.
                           </Typography>
                        <br />
                        <Typography variant='headline'>Social.</Typography>
                        <IconButton href='https://github.com/El-Dringo-Brannde'>
                           <i className="fab fa-github fa-lg"></i>
                        </IconButton>
                        <IconButton href='https://www.linkedin.com/in/brandon-dring/'>
                           <i className="fab fa-linkedin fa-lg"></i>
                        </IconButton>

                     </CardContent>
                  </Card>
               </ScrollAnimation>
            </Grid>
         </Grid>
      </SkewedContainer >
   )
}

export default AboutMe