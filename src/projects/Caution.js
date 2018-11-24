import React, { Component } from "react";
import ImageGallery from 'react-image-gallery';
import { Container } from "semantic-ui-react";
import Footer from "../Footer";


class Caution extends Component {
    render() {

      let images = [
        {
          original: 'caution_kite.jpg',
          thumbnail: 'caution_kite.jpg',
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
            <p> Throwing Caution to the Wind, 2011 <br />
            <i>Caution tape, packing tape, string</i></p>
           </Container>
           <Footer />
      </div>
    );
  }
}

export default Caution;
