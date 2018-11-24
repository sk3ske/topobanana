import React, { Component } from "react";
import ImageGallery from 'react-image-gallery';
import { Container } from "semantic-ui-react";
import Footer from "../Footer";


class Burritoes extends Component {
    render() {

      let images = [
        {
          original: 'burritoes.png',
          thumbnail: 'burritoes.png',
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
            <p> Burritoes, 2018 <br />
            <i>Toes, aluminum foil</i></p>
           </Container>
           <Footer />
      </div>
    );
  }
}

export default Burritoes;
