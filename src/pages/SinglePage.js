import React, { Component } from 'react';
import { Route } from "react-router-dom";
import { Icon, Image, Container, Divider, Grid, Menu, Segment } from "semantic-ui-react";
import Thumbnail from '../Thumbnail.js'



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

                 <Grid columns={3} centered>
                   <Grid.Column mobile={6} tablet={4} computer={4}>
                    <Image src='topobanana_portrait.png' size='medium' style={{padding:0}}></Image>
                   </Grid.Column>
                   <Grid.Column mobile={6} tablet={4} computer={5}>
                     My work explores the meaning created when a concept is intepreted across disparate modalities in unexpected ways, be it verbal to visual, analog to digital, or historical to present day.
                   </Grid.Column>
                   <Grid.Column mobile={5} tablet={3} computer={3}>
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

               <div id='contact' />
             </Container>
           </div>


          </div>
    );
  }
}

export default SinglePage;
