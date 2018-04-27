import React from 'react';
import Card, { CardMedia, CardContent } from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider'
import Button from 'material-ui/Button';
import Fade from 'material-ui/transitions/Fade';
let self;




class PortfolioCards extends React.Component {
   state = {
      checked: false
   }
   constructor(props) {
      super(props)
      self = this;
   }

   handleChange() {
      self.setState({ checked: !self.state.checked })
   }

   navigateAway() {
      window.location.href = self.props.link
   }

   render() {
      return (
         <Grid item lg={3} style={{ margin: '50px 35px', minHeight: '30vh', height: '50vh', width: '70vw' }} >
            <p className='portfolio-item'>
               <Card
                  style={{ maxHeight: '100%', maxWidth: '100%', cursor: 'pointer' }}
                  raised={this.state.checked}
                  className='portfolio-item-preview'
                  href={this.props.link}
                  onClick={this.navigateAway}
                  onMouseEnter={this.handleChange}
                  onMouseLeave={this.handleChange}>
                  <CardMedia
                     image={process.env.PUBLIC_URL + this.props.image}
                     style={{ paddingTop: '25%', backgroundSize: "contain", maxHeight: '15vh' }}
                  />
                  <CardContent>
                     <Typography gutterBottom variant="headline" component="h2">
                        {this.props.title}
                     </Typography>
                     <Typography gutterBottom variant="body2" component="h2" style={{ fontSize: '1em' }}>
                        {this.props.description}
                     </Typography>
                     <Typography variant='body2' className='portfolio-item-description'>
                        Tech Used.
                        <Divider style={{ marginBottom: '5px' }} />
                        {
                           this.props.tech.map(el => {
                              return (
                                 <i class={el} style={{ fontSize: '3.2rem', margin: '0px 5px' }} ></i>
                              )
                           })
                        }
                        <br />
                        <br />
                        <br />
                        <Button href={this.props.link}>
                           <i class="fab fa-github fa-lg"></i>
                           &nbsp;View on Github
                        </Button>
                     </Typography>
                  </CardContent>
               </Card>
            </p >
            <br /><br /><br />
         </Grid >
      )
   }
}

export default PortfolioCards