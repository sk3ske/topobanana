import React, { Component } from 'react';
import { Route } from "react-router-dom";
import { Icon, Image, Container, Divider, Grid, Menu, Segment } from "semantic-ui-react";
import Thumbnail from '../Thumbnail.js'

const portraits = ['skeske-portrait.png',
                   'skeske-skier.png',
                   'skeske-rocket.png',
                   'skeske-coder.png',
                   'skeske-mud.jpg',
                   'skeske-captain.png']

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

class SinglePage extends Component {
  render() {
    return (

          <div className='spa_background'>
            <div className='spacer' />

            <div id='nonsense'>
              <Container>
                  <div className='thumbnailContainer'>
                    <Thumbnail
                      image='thumb_burritoes.png'
                      title= 'burritoes'
                      link= 'burritoes'/>
                      <Thumbnail
                        image='thumb_inbox.png'
                        title= 'inbox'
                        link= 'inbox'/>
                    <Thumbnail
                       image='thumb_moonshine.png'
                       title= 'moonshine'
                       link= 'moonshine'/>
                     <Thumbnail
                       image='thumb_kintsugi.png'
                       title= 'kintsugiPhone'
                       link= 'kintsugi'/>
                     <Thumbnail
                       image='thumb_caution_kite.jpg'
                       title='throwing caution to the wind'
                       link='caution'/>
                  </div>
              </Container>
              <div className='spacer' />
           </div>

           <div>
             <div className='spacer' />
             <div className='spacer' />

             <Container fluid className='contactContainer'>
               <br />
               <Container className='footerText'>
                 <Grid columns={3} padded centered>
                   <Grid.Column mobile={4} tablet={3} computer={3}>
                     <Image src={ portraits[getRandomInt(0,5)] } circular />
                   </Grid.Column>
                   <Grid.Column mobile={6} tablet={4} computer={5}>
                     Here are things I made that aren't pixels or code. They often
                     recontextualize our digital lives. I like to make things that
                     make me laugh. Sometimes other people laugh too.
                   </Grid.Column>
                   <Grid.Column mobile={5} tablet={3} computer={2}>
                     <a href="https://www.instagram.com/topobanana/" target='_blank' rel="noopener noreferrer">
                         <Icon name="instagram" size="small"/>
                      &nbsp;instagram
                     </a>
                     <br />
                     <a href="mailto:skeske@gmail.com">
                         <Icon name="mail" size="small"/>
                       &nbsp;email
                     </a>
                     <br />
                   </Grid.Column>
                 </Grid>
               </Container>
               <div className='spacer' />
               <div className='spacer' />
               <div className='bottomSpacer' />
               <div className='footer'>
                 built with <a href="https://reactjs.org/">React</a> and <a href="https://semantic-ui.com/">Semantic UI</a> &nbsp;&nbsp;&nbsp; &copy; skeske 2018
               </div>
               <div className='bottomSpacer' />
               <div id='contact' />
             </Container>
           </div>


          </div>
    );
  }
}

export default SinglePage;
