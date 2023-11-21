import React, { Component } from 'react';
import { Menu } from "semantic-ui-react";
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
              <NavLink to="/#top"><i>/ artworks by Stephanie Keske</i></NavLink>
          </Menu.Item>
          <Menu.Menu position='right'>
          </Menu.Menu>
        </Menu>
      )
   }
};

 export default Header;
