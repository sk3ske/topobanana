import React, { Component } from "react";
import ImageGallery from 'react-image-gallery';
import { Container } from "semantic-ui-react";
import Footer from "../Footer";


class Kintsugi extends Component {
    render() {

      let images = [
        {
          original: 'kintsugi.png',
          thumbnail: 'kintsugi.png',
        },
      ]

    return (
      <div className='gallery'>
         <ImageGallery
          items={images}
          showPlayButton={false}
          showThumbnails={false}
          showNav={false}
          showFullscreenButton={false}
           />
          <Container text>
            <p> kintsugiPhone, 2016 <br />
            <i>iPhone 4, gold leaf</i></p>
           </Container>
           <Footer />
      </div>
    );
  }
}

export default Kintsugi;
