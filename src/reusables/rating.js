import React from 'react'
import Rating from 'react-rating';
import Divider from 'material-ui/Divider';

class SkillRating extends React.Component {
   constructor(props) {
      super(props)
   }

   render() {
      return (
         <div style={{ margin: 8 }}>
            {this.props.skill}
            <br />
            <Rating
               emptySymbol={
                  <div style={{ color: 'black', border: '1px solid', height: 8, width: 45, backgroundColor: 'lightgrey', margin: 8 }}>
                  </div>
               }
               fullSymbol={
                  <div style={{ color: 'black', border: '1px solid', height: 8, width: 45, backgroundColor: 'black', margin: 8 }}>
                  </div>
               }
               initialRating={this.props.rating}
               fractions={2}
               readonly
            />
            <Divider style={{ width: 325 }} />
         </div>
      )
   }
}
export default SkillRating