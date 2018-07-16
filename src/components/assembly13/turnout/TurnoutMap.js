import React, { Component } from 'react';
import { Map, TileLayer, GeoJSON, Tooltip } from 'react-leaflet';
import ReactLoading from 'react-loading';
import axios from 'axios';
import config from '../../config'
import Control from 'react-leaflet-control';
import MapKey from './MapKey';

import Translate from 'react-translate-component';

export default class PartyMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shapeIsLoaded: false, shapeProvince: config.initShape, key: 1,
      keyTitle: 'Voter turnout',
      ProvinceName: '', districtName: '', resultsPercentage: '', resultsNumber: '',registeredNumber:'', percentageSign: ' %',
      maxFilter: 100, minFilter: 0, activeFilter: 'none', grades: [0, 50, 60]
    }
  }

  componentWillMount() {
    let qString = `${config.apiUrl}/api/shape/zim_presidential2013_province`;
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
        this.setState({ shapeProvince: JSON.parse(response.data.data),shapeIsLoaded:true });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  getColorRegElg(d, c1, grades) {
    //if active filter is true then user has changed values in the input so we do special Style

    //if filter is "result" then we filter according to the min and max filter values
    if (this.state.activeFilter == 'result') {
      if (d < this.state.minFilter || d > this.state.maxFilter) { return '#F2F2F0' }
      else if (d > grades[2]) { return (c1[3]); }
      else if (d > grades[1]) { return (c1[2]); }
      else if (d > grades[0]) { return (c1[0]); }
      else { return '#F2F2F0' }
    }
    else {
      if (d > grades[2]) { return (c1[3]); }
      else if (d > grades[1]) { return (c1[2]); }
      else if (d > grades[0]) { return (c1[0]); }
      else { return '#F2F2F0' }
    }

  }

  style(feature) {
    const property = feature.properties;
    // if the radio button filter is per result paint the map selon a certain prop Sinon paint selon another property
    /* if (this.state.filter == 'perDistrict') { */
    let PROPERTY = (parseInt(property.total_votes) * 100) / parseInt(property.registration_number);

    return {
      fillColor: this.getColorRegElg(PROPERTY, ["#ffff9c", "#c2e699", "#78c679", "#238443"], this.state.grades),
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

    let resultsPercentage = ((parseInt(property.total_votes) * 100) / parseInt(property.registration_number)).toFixed(2);
    this.setState({
      districtName: property.NAME1 !== undefined ? property.NAME1 + ' - ' : '',
      destroy: false,
      provinceName: property.NAME2 !== undefined ? property.NAME2 : '',
      resultsPercentage,
      resultsNumber: property.total_votes,
      registeredNumber: property.registration_number
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

  //if active filter is true then user has changed values in the input and then style should be adapted accordingly 
  handleMaxFilter(e) {
    this.setState({ maxFilter: e.target.value, activeFilter: 'result' });
  }

  handleMinFilter(e) {
    this.setState({ minFilter: e.target.value, activeFilter: 'result' });
  }

  render() {
    // console.log(dataSport);
    const VOTES_TURNOUT = <Translate type='text' content='pres13Turnout.VOTES_turn' />//Voters turnout
    const VOTES_NUMBER = <Translate type='text' content='pres13Turnout.Votes_Number' />//Total votes number
    const REGISTERED_NUMBER = <Translate type='text' content='pres13Turnout.Registered_Number' />//Registered number

    const FILTER_RES = <Translate type='text' content='partySheet.filter_Result' />//Filter result between :
    const CONTROL = <Translate type='text' content='partySheet.control_map' />//Control the map

    const HOVER = <Translate type='text' content='map.hover' />//Hover Over the map for more info
    const LOADING = <Translate type='text' content='map.loading' />//Loading Map
    return (
      <div className="topMap">
        {this.state.shapeIsLoaded ? <Map maxZoom={8} center={[-18.9, 28]} keyboard={false} scrollWheelZoom={false} zoom={7} minZoom={5} style={{ height: "100vh", width: "100%", position: "relative" }}>
          <TileLayer
            url='https://api.mapbox.com/styles/v1/hunter-x/cixhpey8700q12pnwg584603g/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaHVudGVyLXgiLCJhIjoiY2l2OXhqMHJrMDAxcDJ1cGd5YzM2bHlydSJ9.jJxP2PKCIUrgdIXjf-RzlA'
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> '
          />
          <GeoJSON
            key={this.state.filter}
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
                <h4>{VOTES_TURNOUT} : {this.state.resultsPercentage} % </h4>
                <h4>{VOTES_NUMBER} : {numberWithCommas(this.state.resultsNumber)} votes </h4>
                <h4>{REGISTERED_NUMBER} : {numberWithCommas(this.state.registeredNumber)} voters </h4>
              </div>
            </Tooltip>

          </GeoJSON>

          }
          <GeoJSON
            key={'b' + this.state.filter}
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
            <div className="col-lg-12 col-sm-2 col-sm-offset-2 col-lg-offset-1"  >
              <div className="well MenuShadow SideMenuePosition info-card-font" style={{ height: 'auto' }}>
                <h6 className='center'>{CONTROL}</h6>

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
  if (x != undefined) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}
