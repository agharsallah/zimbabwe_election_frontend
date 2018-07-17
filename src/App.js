import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import RootHome from './components/home/RootHome' ;
import _RootAbout from './components/about/_RootAbout' ;
import _RootData from './components/data/_RootData' ;
import _RootContact from './components/contact-us/_RootContact' ;
/* Presidential */
import _RootPresRes13 from './components/presidential13/results/_RootPresRes13' ;
import _RootPresInvalid13 from './components/presidential13/invalid/_RootPresInvalid13' ;
import _RootPresTurnout13 from './components/presidential13/turnout/_RootPresTurnout13' ;
/* Assembly */
import _RootAssemblyTurnout13 from './components/assembly13/turnout/_RootAssemblyTurnout13' ;
import _RootAssemblyInvalid13 from './components/assembly13/invalid/_RootAssemblyInvalid13' ;
import _RootAssemblyRes13 from './components/assembly13/result/_RootAssemblyRes13' ;

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

      <Route exact path="/assembly-turnout-13" component={_RootAssemblyTurnout13} />
      <Route exact path="/assembly-invalid-13" component={_RootAssemblyInvalid13} />
      <Route exact path="/assembly-res-13" component={_RootAssemblyRes13} />

      </Switch>
    );
  }
}
