import React, { Component } from "react";
import ImageGallery from 'react-image-gallery';
import { Container } from "semantic-ui-react";
import Footer from "../Footer";


class Inbox extends Component {
    render() {

      let images = [
        {
          original: 'inbox.png',
          thumbnail: 'inbox.png',
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
            <p> Inbox, 2018 <br />
            <i>Paper, whiteout fluid, double-sided tape</i></p>
           </Container>
           <Footer />
      </div>
    );
  }
}

export default Inbox;
