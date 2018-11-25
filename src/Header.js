import React, { Component } from 'react';
import { Menu, Sticky } from "semantic-ui-react";
import NavLink from "./NavLink";

class Header extends Component {
  render() {
    return (
        <Menu
          size='huge'
          fluid
          fixed='top'
          borderless>
          <Menu.Item>
              <NavLink to="/#top">artworks by Stephanie Keske</NavLink>
          </Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item position='right'>
    			      <NavLink to="/#contact">About</NavLink>
    			      &nbsp;&nbsp;&nbsp;
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      )
   }
};

 export default Header;
