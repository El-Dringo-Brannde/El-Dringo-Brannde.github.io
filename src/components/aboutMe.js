import React from 'react';
import SkewedContainer from 'sc-react';


const AboutMe = () => {
   return (
      <SkewedContainer
         top='right'
         bottom="left"
         bgColor="#34495e"
         className='full-screen'
         noMargin>
         <h1 style={{ textAlign: "center" }}>Hello World!</h1>
      </SkewedContainer>
   )
}

export default AboutMe