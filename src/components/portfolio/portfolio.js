import React from 'react';
import SkewedContainer from 'sc-react';
import Card, { CardMedia, CardContent } from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider'
import projects from "./projects";
import ScrollAnimation from 'react-animate-on-scroll'
import PortfolioCards from "./cards";
import './portfolio.css'


const Portfolio = () => {
   return (
      <SkewedContainer
         top='left'
         bgColor="#00B0FF"
         noMargin
         className='portfolio'
         style={{ paddingBottom: 100 }}
      >
         <Grid container justify='center'>
            <ScrollAnimation animateOnce animateIn='bounceInUp'>
               <Typography variant='display2' className='text-center'>Portfolio</Typography>
               <Divider style={{ margin: '5vh 15vw', width: '70vw' }}></Divider>
            </ScrollAnimation>
         </Grid>
         <Grid container justify='center' style={{ marginBottom: '5vh' }} >
            {
               projects.map((element, idx) => {

                  return (
                     <PortfolioCards
                        title={element.title}
                        description={element.description}
                        image={element.image}
                        tech={element.tech}
                        link={element.link}
                        idx={idx}
                        key={idx}
                     />
                  )
               })
            }
         </Grid>
      </SkewedContainer>
   )
}

export default Portfolio
