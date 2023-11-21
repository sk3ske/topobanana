import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Header from "./Header";

import SinglePage from "./pages/SinglePage";

import Inbox from "./projects/Inbox";
import Burritoes from "./projects/Burritoes";
import Moonshine from "./projects/Moonshine";
import Kintsugi from "./projects/Kintsugi";
import Caution from "./projects/Caution";


class Content extends Component {
  render() {
    return (
          <div>
            <Header />
            <div ref='content'>
            <BrowserRouter>
            <Switch>
              <Route
                path= '/'
                exact= {true}
                component= { SinglePage }
              />
              <Route
               path= '/inbox'
               exact= {false}
               component= { Inbox }
             />
             <Route
              path= '/burritoes'
              exact= {false}
              component= { Burritoes }
            />
              <Route
               path= '/moonshine'
               exact= {false}
               component= { Moonshine }
             />
               <Route
                path= '/kintsugi'
                exact= {false}
                component= { Kintsugi }
              />
              <Route
                path= '/caution'
                exact= {false}
                component= { Caution }
              />
              n</Switch>
              </BrowserRouter>
            </div>
          </div>
    );
  }
}

export default Content;
