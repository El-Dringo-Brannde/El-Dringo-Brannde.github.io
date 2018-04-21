import React from 'react';

const Intro = () => {
   return (
      <div className='center-text header-image'>
         <div className='margin-25 thick-characters'>
            <section>
               <div className="cd-headline letters type">
                  <span>Hi, I'm Brandon Dring. </span>
                  <br />
                  <span>Professional Coder. Amateur Beer, & Coffee Drinker</span>
                  <br />
                  <span>I design & build </span>
                  <span className="cd-words-wrapper waiting">
                     <b className="is-visible">Full Stack Websites. &nbsp;</b>
                     <b>React Native mobile apps. &nbsp;</b>
                     <b>Angular Apps. &nbsp;</b>
                     <b>Electron Apps. &nbsp;</b>
                     <b>Node.JS Servers. &nbsp;</b>
                     <b>Python Automation Scripts. &nbsp;</b>
                  </span>
               </div>
            </section>
         </div>

      </div>
   );
}


export default Intro;