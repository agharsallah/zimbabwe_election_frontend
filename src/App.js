import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import RootHome from './components/home/RootHome' ;
import _RootPresRes13 from './components/presidential13/results/_RootPresRes13' ;
import _RootPresInvalid13 from './components/presidential13/invalid/_RootPresInvalid13' ;

import counterpart  from 'counterpart';
counterpart.registerTranslations('en',require('./../locales/en'));
counterpart.registerTranslations('fr',require('./../locales/fr'));
export default class App extends Component {
  
  render() {
    return (
      <Switch>
      <Route exact path="/" component={RootHome} />
      <Route exact path="/pres-res-13" component={_RootPresRes13} />
      <Route exact path="/pres-invalid-13" component={_RootPresInvalid13} />

      </Switch>
    );
  }
}
