import React, { Component } from "react";
import { Image, Dimmer } from "semantic-ui-react";

class Thumbnail extends Component {

  state = {}
  handleShow = () => this.setState({ active: true })
  handleHide = () => this.setState({ active: false })

  render() {
    let titleStyle = 'thumbNoSubtitle';
    if (this.props.subtitle){
      titleStyle = 'thumbTitle';
    }
    const { active } = this.state
    return ( <Dimmer.Dimmable
                  as={Image}
                  onMouseEnter={this.handleShow}
                  onMouseLeave={this.handleHide}>

                  <Dimmer active={active}>
                    <a href={this.props.link}>
                      <div>
                        <Image
                        src={ this.props.image }
                        size='medium'
                        />
                        <div className='fadeOverlay'>
                          <p className={ titleStyle }>
                           { this.props.title }
                         </p>
                           <p className='thumbSubtitle'>
                            { this.props.subtitle }
                          </p>
                        </div>
                      </div>
                    </a>
                  </Dimmer>

                  <Image
                    src={ this.props.image }
                    size='medium'
                    />

               </Dimmer.Dimmable>

    );
  }
}

export default Thumbnail
