import React, { Component } from "react";
import { Image } from "semantic-ui-react";

class BackgroundImage extends Component {

  render() {
    return ( <div className='bgImage'>
                <Image
                  style={{ 'opacity': (this.props.opacity) }}
                  src={ this.props.src }
                  size='large'/>
              </div>

    );
  }
}

export default BackgroundImage
