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
                built with <a href="https://reactjs.org/">React</a> and <a href="https://semantic-ui.com/">Semantic UI</a> &copy; skeske 2017
                </div>
              </Menu.Item>
          </Menu>
        )
   }
};

 export default Footer;
