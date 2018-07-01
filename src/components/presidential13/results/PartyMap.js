import React, { Component } from 'react';
import { Map, TileLayer, GeoJSON, Tooltip } from 'react-leaflet';
import ReactLoading from 'react-loading';
import axios from 'axios';
import config from '../../config'
import Control from 'react-leaflet-control';
import MapKey from './MapKey';
import { FormGroup, FormControl, Form, Radio } from 'react-bootstrap';

import Translate from 'react-translate-component';

export default class PartyMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shapeIsLoaded: false, shape: config.initShape, shapeDistrict: config.initShape, shapeProvince: config.initShape, key: 1,
      filter: 'perDistrict', checked: [true, false],
      keyTitle: 'ZANU_PF per votes percentage', partyName: 'ZANU PF',partyToSelect:'ZANU_PF',
      ProvinceName: '', districtName: '', resultsPercentage: '', resultsNumber: '', percentageSign: ' %',
      maxFilter: 100, minFilter: 0, activeFilter: 'none', grades: []
    }
  }

  componentWillMount() {
    let qString = `${config.apiUrl}/api/shape/zim_presidential2013_district`;
    console.log(qString);
    axios({
      method: 'get',
      url: qString,
      headers: {
        'name': 'Isie',
        'password': 'Isie@ndDi',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/x-www-form-urlencoded'
      },

    })
      .then(response => {
        console.log(response);
        this.setState({ shapeDistrict: JSON.parse(response.data.data), shape: JSON.parse(response.data.data), shapeIsLoaded: true });
      })
      .catch(function (error) {
        console.log(error);
      });
    let qString2 = `${config.apiUrl}/api/shape/zim_presidential2013_province`;
    axios({
      method: 'get',
      url: qString2,
      headers: {
        'name': 'Isie',
        'password': 'Isie@ndDi',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/x-www-form-urlencoded'
      },

    })
      .then(response => {
        console.log(response);
        this.setState({ shapeProvince: JSON.parse(response.data.data) });
      })
      .catch(function (error) {
        console.log(error);
      });
    //don't know why did this cause u can use props directly ????- it's a sort of initialization
    if (this.state.filter == 'perDistrict') {
      this.setState({ grades: this.props.gradesDistrict, partyName: this.props.partyName,partyToSelect:this.props.partyToSelect });
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log('nextProps', nextProps, 'this.state.partyName: ', this.state.partyName);
    // this is done so that  whenever user changes the select option We reset all properties to initial
    //we also set back the filter values to default 
    /* if (nextProps.partyToSelect != this.state.partyToSelect) { */
      console.log('nnnnextProps.gradesDistrict', nextProps.gradesDistrict);
      this.setState({
        partyName: nextProps.partyName, keyTitle: nextProps.partyToSelect+' per votes percentage', filter: 'perDistrict',
        partyToSelect:nextProps.partyToSelect,
        grades: nextProps.gradesDistrict, checked: [true, false], minFilter: 0, maxFilter: 100, activeFilter: 'none'

      });
   /*  } */

  }

  getColorRegElg(d, c1, grades, state, AssociatedParty) {
    //if active filter is true then user has changed values in the input so we do special Style

    //if filter is "result" then we filter according to the min and max filter values
    if (this.state.activeFilter == 'result') {
      if (AssociatedParty != this.props.partyName) { return '#F2F2F0' }
      else if (d < this.state.minFilter || d > this.state.maxFilter) { return '#F2F2F0' }
      else if (d > grades[2]) { return (c1[3]); }
      else if (d > grades[1]) { return (c1[2]); }
      else if (d > grades[0]) { return (c1[0]); }
      else { return '#F2F2F0' }
    }
    else {
      //console.log(AssociatedParty,' || ',this.props.partyName);
      if (this.props.partyName != AssociatedParty) {
        return '#F2F2F0'
      }

      else if (d > grades[2]) { return (c1[3]); }
      else if (d > grades[1]) { return (c1[2]); }
      else if (d > grades[0]) { return (c1[0]); }
      else { return '#F2F2F0' }
    }

  }

  style(feature) {
    const property = feature.properties;
    // if the radio button filter is per result paint the map selon a certain prop Sinon paint selon another property
    /* if (this.state.filter == 'perDistrict') { */
    let PROPERTY = (parseInt(property[this.state.partyToSelect]) * 100) / parseInt(property.total_votes);
    let STATE = property.state;
    let SHAPE_PARTY;
    (property.nom_liste_fr == undefined) ? SHAPE_PARTY = this.props.partyName : SHAPE_PARTY = property.nom_liste_fr;
    return {
      fillColor: this.getColorRegElg(PROPERTY, ["#ffff9c", "#c2e699", "#78c679", "#238443"], this.state.grades, STATE, SHAPE_PARTY),
      weight: 1.2,
      opacity: 0.9,
      color: 'white',
      dashArray: '1',
      fillOpacity: 0.9
    }
  }

  styleGovLimiter(feature) {
    return {
      fillColor: 'none',
      weight: 2.5,
      opacity: 2,
      color: 'black',
      dashArray: '3',
      fillOpacity: 1
    };
  }

  highlightFeature(e) {
    const layer = e.target;
    const property = e.target.feature.properties;

    let resultsPercentage = ((parseInt(property[this.state.partyToSelect]) * 100) / parseInt(property.total_votes)).toFixed(2);
    this.setState({
      districtName: property.NAME1, destroy: false,
      provinceName: property.NAME2 !== undefined ? ' - ' + property.NAME2 : '',
      resultsPercentage,
      resultsNumber: property[this.state.partyToSelect]
    });
    return layer.setStyle({
      weight: 5,
      color: '#666',
      dashArray: '',
      fillOpacity: 1
    });
  }

  resetFeature(e) {
    var layer = e.target;
    layer.setStyle({
      weight: 5
    });
    this.setState({ destroy: true });
  }

  handleRadioFilter(filter, e) {
    let checked = [false, false];
    checked[parseInt(e.target.value)] = true;
    //when user clicks on the radiobutton we update the mapkey,grades and set back the filter values to default
    this.setState({ filter, checked, activeFilter: 'none' });
    if (filter == 'perDistrict') {
      this.setState({ grades: this.props.gradesDistrict, minFilter: 0, maxFilter: 100, activeFilter: 'none' });
    } else if (filter == 'perProvince') {
      this.setState({ grades: this.props.gradesProvince, minFilter: 0, maxFilter: 100, activeFilter: 'none' });
    }

  }

  //if active filter is true then user has changed values in the input and then style should be adapted accordingly 
  handleMaxFilter(e) {
    this.setState({ maxFilter: e.target.value, activeFilter: 'result' });
  }

  handleMinFilter(e) {
    this.setState({ minFilter: e.target.value, activeFilter: 'result' });
  }

  render() {
    // console.log(dataSport);
    const VOTES_PER = <Translate type='text' content='partySheet.VOTES_PER' />//votes percentage 
    const VOTES_NUMBER = <Translate type='text' content='partySheet.Votes_Number' />//votes number 

    const DISTRICT_RES = <Translate type='text' content='partySheet.district_res' />//Results per district
    const PROVINCE_RES = <Translate type='text' content='partySheet.province_res' />//Results per Province

    const FILTER_RES = <Translate type='text' content='partySheet.filter_Result' />//Filter result between :
    const FILTER_RES_MUN = <Translate type='text' content='partySheet.filter_Result_Mun' />//Filter result per Mun. Type  :
    const CONTROL = <Translate type='text' content='partySheet.control_map' />//Control the map

    const HOVER = <Translate type='text' content='map.hover' />//Hover Over the map for more info
    const LOADING = <Translate type='text' content='map.loading' />//Loading Map
    return (
      <div className="topMap">
        {this.state.shapeIsLoaded ? <Map maxZoom={9} center={[-18.9, 28]} keyboard={false} scrollWheelZoom={false} zoom={7} minZoom={5} style={{ height: "100vh", width: "100%", position: "relative" }}>
          <TileLayer
            url='https://api.mapbox.com/styles/v1/hunter-x/cixhpey8700q12pnwg584603g/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaHVudGVyLXgiLCJhIjoiY2l2OXhqMHJrMDAxcDJ1cGd5YzM2bHlydSJ9.jJxP2PKCIUrgdIXjf-RzlA'
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> '
          />
          {this.state.filter == 'perDistrict' ?
            <GeoJSON
              key={this.state.partyToSelect + this.props.grades + this.state.filter}
              data={this.state.shapeDistrict}
              style={this.style.bind(this)}
              onEachFeature={
                (feature, layer) => {
                  layer.on({ mouseover: this.highlightFeature.bind(this) });
                  layer.on({ mouseout: this.resetFeature.bind(this) });
                }
              }
            >
              <Tooltip direction="bottom" className="leafletTooltip" sticky={true} >
                <div>
                  <h3 style={{ textAlign: 'center' }}>{this.state.districtName} {this.state.provinceName}</h3>
                  <h4>{VOTES_PER} : {this.state.resultsPercentage} % </h4>
                  <h4>{VOTES_NUMBER} : {numberWithCommas(this.state.resultsNumber)} votes </h4>
                </div>
              </Tooltip>

            </GeoJSON>

            :
            <GeoJSON
              key={this.state.partyToSelect + this.props.grades + this.state.filter}
              data={this.state.shapeProvince}
              style={this.style.bind(this)}
              onEachFeature={
                (feature, layer) => {
                  layer.on({ mouseover: this.highlightFeature.bind(this) });
                  layer.on({ mouseout: this.resetFeature.bind(this) });
                }
              }
            >
              <Tooltip direction="bottom" className="leafletTooltip" sticky={true} >
                <div>
                  <h3 style={{ textAlign: 'center' }}>{this.state.districtName} {this.state.provinceName}</h3>
                  <h4>{VOTES_PER} : {this.state.resultsPercentage} % </h4>
                  <h4>{VOTES_NUMBER} : {numberWithCommas(this.state.resultsNumber)} votes </h4>
                </div>
              </Tooltip>

            </GeoJSON>
          }
          <GeoJSON
            key={'b' +this.state.partyToSelect+ this.state.filter}
            data={G_ZIM_PROVINCE_DELIMITATION}
            style={this.styleGovLimiter.bind(this)}
          />
          <Control position="topright" >
            <h5>{HOVER}</h5>
          </Control>
          <Control position="bottomright" >
            <MapKey grades={this.state.grades} percentageSign={this.state.percentageSign} keyTitle={this.state.keyTitle} colorSet={["#ffffcc", "#c2e699", "#78c679", "#238443"]} key={this.state.filter} />
          </Control>

          <Control position="topleft"  >
            <div className="col-lg-12 col-sm-2 col-sm-offset-2 col-lg-offset-1">
              <div className="well MenuShadow SideMenuePosition info-card-font">
                <h6 className='center'>{CONTROL}</h6>
                <section className='row col-md-12' >

                  <div className="md-radio md-radio-inline" style={{ margin: '10px 0' }}>
                    <input id="3" type="radio" name="g2" value={0} onClick={this.handleRadioFilter.bind(this, 'perDistrict')} checked={this.state.checked[0]} />
                    <label htmlFor="3">{DISTRICT_RES}</label>
                  </div>

                  <div className="md-radio md-radio-inline" style={{ margin: '10px 0' }}>
                    <input id="4" type="radio" name="g2" value={1} onClick={this.handleRadioFilter.bind(this, 'perProvince')} checked={this.state.checked[1]} />
                    <label htmlFor="4">{PROVINCE_RES}</label>
                  </div>
                </section>

                <section className='row col-md-12 '  >
                  <p style={{ color: '#000' }} >{FILTER_RES} </p>
                  <input type="number" onChange={this.handleMinFilter.bind(this)} value={this.state.minFilter} min={0} className='filterResultInput' />{this.state.percentageSign}
                  &nbsp;&nbsp; <span style={{ color: 'red' }}> &</span> &nbsp;
                  <input type="number" onChange={this.handleMaxFilter.bind(this)} value={this.state.maxFilter} min={1} className='filterResultInput' />{this.state.percentageSign}
                </section>

              </div>
            </div>
          </Control>

        </Map> :
          <div>
            <div className="col-md-5"></div>
            <div className="col-md-5" style={{ marginTop: "20vh" }}>
              <h2>{LOADING}</h2>
              <div style={{ marginLeft: "70px" }}>
                <ReactLoading type="bars" color="#444" className="react-Loader" delay={0} />
              </div>
            </div>
          </div>

        }
      </div>

    );
  }
}
const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
