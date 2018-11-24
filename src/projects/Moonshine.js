import React, { Component } from "react";
import ImageGallery from 'react-image-gallery';
import { Container } from "semantic-ui-react";
import Footer from "../Footer";


class Moonshine extends Component {
    render() {

      let images = [
        {
          original: 'moonshine_hero.jpg',
          thumbnail: 'moonshine_hero.jpg',
        },
        {
          original: 'moonshine_drink.jpg',
          thumbnail: 'moonshine_drink.jpg',
        },
        {
          original: 'moonshine_turnaround.gif',
          thumbnail: 'moonshine_turnaround.gif',
        },
        {
          original: 'moonshine_process1.png',
          thumbnail: 'moonshine_process1.png',
        },
        {
          original: 'moonshine_process2.png',
          thumbnail: 'moonshine_process2.png',
        },
        {
          original: 'moonshine_pour.jpg',
          thumbnail: 'moonshine_pour.jpg',
        },
        {
          original: 'moonshine_insitu.png',
          thumbnail: 'moonshine_insitu.png',
        }
      ];


    return (
      <div className='gallery'>
         <ImageGallery
          items={images}
          showPlayButton={false}
          showThumbnails={false}
          showFullscreenButton={false}
           />
          <Container text>
            <p> Moonshine, 2017 <br />
            <i>Hammered copper, tin cladding, cork</i>
            </p>
          </Container>
        <Footer />
      </div>
    );
  }
}

export default Moonshine;
