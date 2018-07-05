import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import RootHome from './components/home/RootHome' ;
import _RootAbout from './components/about/_RootAbout' ;
import _RootData from './components/data/_RootData' ;
import _RootContact from './components/contact-us/_RootContact' ;
import _RootPresRes13 from './components/presidential13/results/_RootPresRes13' ;
import _RootPresInvalid13 from './components/presidential13/invalid/_RootPresInvalid13' ;
import _RootPresTurnout13 from './components/presidential13/turnout/_RootPresTurnout13' ;

import counterpart  from 'counterpart';
counterpart.registerTranslations('en',require('./../locales/en'));
counterpart.registerTranslations('fr',require('./../locales/fr'));
export default class App extends Component {
  
  render() {
    return (
      <Switch>
      <Route exact path="/" component={RootHome} />
      <Route exact path="/about" component={_RootAbout} />
      <Route exact path="/data" component={_RootData} />
      <Route exact path="/contact-us" component={_RootContact} />
      <Route exact path="/pres-res-13" component={_RootPresRes13} />
      <Route exact path="/pres-invalid-13" component={_RootPresInvalid13} />
      <Route exact path="/pres-turnout-13" component={_RootPresTurnout13} />

      </Switch>
    );
  }
}
