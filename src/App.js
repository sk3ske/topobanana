import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";
import Content from "./Content";

import './styles/App.css';
import "./styles/index.css";
import "react-image-gallery/styles/css/image-gallery.css";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Content/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
