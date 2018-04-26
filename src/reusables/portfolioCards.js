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
         <Grid item lg={3} style={{ margin: '25px 35px', maxWidth: '70vw' }} className='portfolio-item'>
            <Card
               style={{ maxHeight: '50vh', maxWidth: '15vw', cursor: 'pointer' }}
               raised={this.state.checked}
               className='portfolio-item-preview'
               href={this.props.link}
               onClick={this.navigateAway}
               onMouseEnter={this.handleChange}
               onMouseLeave={this.handleChange}>
               <CardMedia
                  image={process.env.PUBLIC_URL + '/brewsterLogo.png'}
                  style={{ paddingTop: '56.25%', backgroundSize: "contain", maxHeight: '15vh', }}
               />
               <CardContent>
                  <Typography gutterBottom variant="headline" component="h2">
                     {this.props.title}
                  </Typography>
                  <Typography gutterBottom variant="body2" component="h2" style={{ fontSize: '1em' }}>
                     {this.props.description}
                  </Typography>
                  <Typography gutterBottom variant="body2" component="h2" style={{ fontSize: '1em' }} className='portfolio-item-description'>
                     Woooooooooooooo
                     <br />
                     <br />
                     <br />
                     Woooooooooooooo
                  </Typography>
               </CardContent>
            </Card>
         </Grid>
      )
   }
}

export default PortfolioCards