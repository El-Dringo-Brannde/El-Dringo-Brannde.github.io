import React from 'react';
import SkewedContainer from 'sc-react';
import Card, { CardMedia, CardContent } from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import SkillRating from './../../reusables/rating'
import Skills from './skills';


const AboutMe = () => {
   return (
      <SkewedContainer
         top='left'
         bottom="left"
         bgColor="#f2f2f2"
         noMargin
         style={{ marginBottom: 100 }}
      >
         <Grid container justify='center'>
            <h1 className='text-center'>About Me</h1>
         </Grid>
         <Grid container justify='center'>
            <Grid item lg={3} style={{ margin: '25px 35px' }}>
               <Card raised >
                  <div className='image-container-fill'></div>
               </Card>
            </Grid>
            <Grid item xl={3} style={{ margin: 25 }} className='text-center'>
               <h2 style={{ marginTop: 0 }}>Skills</h2>

               {Skills.map(skill => {
                  return (
                     <SkillRating
                        key={skill.name}
                        skill={skill.name}
                        rating={skill.rating} />
                  )
               })}

            </Grid>
            <Grid item lg={4} style={{ margin: '25px 35px' }}>
               <Card raised>
                  <CardContent>
                     <h3>Hi.</h3>
                     <p style={{ lineHeight: '1.2' }}>
                        Thanks for checking out my portfolio page. My name is Brandon,
                        I'm a big fan of travelling on my motorcycle when I can, eating all
                        the food I can find, and tasting local beers. I also pretty religiously
                        follow the NBA, College Football, NFL, NHL.. really any sports.
                              </p>
                     <p style={{ lineHeight: '1.2' }}>
                        Currently I'm attending Oregon State University as a Computer Science
                        student, with a focus in Human Computer Interaction, and UX design
                        as I saw it was one of my weakest qualities. I'm just about done too! I
                        only need to take a few underwater basket weaving classes then I'm done
                        by December 2018!
                           </p>
                     <p style={{ lineHeight: '1.2' }}>
                        Outside of school I like to poke around different disciplines, and
                        programming languages or frameworks. Right now I have a mobile/ cloud
                        design bug, and have been exploring technologies in those areas.
                           </p>
                     <h3>
                        Social
                     </h3>
                  </CardContent>
               </Card>
            </Grid>
         </Grid>
      </SkewedContainer >
   )
}

export default AboutMe