import React from 'react';
import * as $ from 'jquery';
import * as animatedHeadline from 'jquery-animated-headlines'


const Intro = () => {
   return (
      <div class='full-screen-height center-text header-image'>
         <div class='margin-25 font-size-10'>
            <section>
               <h1 class="cd-headline letters type">
                  <span>Hi, I'm Brandon Dring. </span>
                  <br />
                  <span>Professional Coder. Amateur Beer, & Coffee Drinker</span>
                  <br />
                  <span>I design & build </span>
                  <span class="cd-words-wrapper waiting">
                     <b class="is-visible">Full Stack Websites. &nbsp;</b>
                     <b>React Native mobile apps. &nbsp;</b>
                     <b>Angular Apps. &nbsp;</b>
                     <b>Electron Apps. &nbsp;</b>
                     <b>Node.JS Servers. &nbsp;</b>
                     <b>Python Automation Scripts. &nbsp;</b>
                  </span>
               </h1>
            </section>
         </div>

      </div>
   );
}


export default Intro;