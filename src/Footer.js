import React, { Component } from 'react';
import { Menu } from "semantic-ui-react";

class Footer extends Component {
  render() {
        return (
          <Menu
            fixed='bottom'
            size='tiny'
            fluid
            borderless
            text>
              <Menu.Item>
                <div className='footer'>
                &copy; skeske 2023
                </div>
              </Menu.Item>
          </Menu>
        )
   }
};

 export default Footer;
