
import React, { Component } from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';
import Navbar from '../../shared/Navbar' ;
import Translate from 'react-translate-component';

import PartyMap from './PartyMap';
import './partySheet.css'
export default class _RootPresRes13 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      VOTES_value: '2,111,181', worstResultValue: '31,773 in Bulawayo', BEST_RES_value: '327,455 in Mashonaland Central', partyName: 'Mugabe Robert Gabriel -ZANU PF-'
      , partyToSelect: 'ZANU_PF', gradesDistrict: [0, 40, 60], gradesProvince: [0, 40, 65],gradesWard: [0, 50, 70], shapeType: 'normalShape'
    }
  }

  handleNgoSector(e) {
    console.log('------------------------------------------', e.target.value);
    /* Each object in the select drawer contains values separated by **  that we parse, pass into state and then consume in the render  */
    /* grades variable contains 2 grades one for the chair results and the other for the results per votes that wee parse in the party map according to the radio button */
    const dataString = e.target.value.split("**");
    //we check if the party is within a mixed shape to color specefically in the map
    /* let shapeType='normalShape';
    dataString[8]=='mixed'?shapeType='mixed':'normalShape'; */
    this.setState({
      //comment is an example of a data
      VOTES_value: dataString[0],//2,111,181
      worstResultValue: dataString[1],//31,773 - 23% in Bulawayo
      BEST_RES_value: dataString[2],//327,455 - 84% in Mashonaland Central
      partyName: dataString[3],//Mugabe Robert -ZANU_PF-
      partyToSelect: dataString[4],//ZANU_PF
      gradesDistrict: JSON.parse(dataString[5]),//[0, 20, 30]
      gradesProvince: JSON.parse(dataString[6]),//[0, 40, 65]
      gradesWard: JSON.parse(dataString[7])//[0, 40, 65]
    });
  }

  render() {
    const TITLE = ' 2013'//2013
    const VOTES = <Translate type='text' content='partySheet.VOTES' />//Total Votes
    const CHAIRS = <Translate type='text' content='partySheet.CHAIRS' />//Total chairs
    const BEST_RES = <Translate type='text' content='partySheet.BEST_RES' />//Highest seats number
    const { VOTES_value, worstResultValue, BEST_RES_value, gradesWard, partyName, partyToSelect, gradesDistrict, gradesProvince } = this.state;
    return (
      <div>
      <Navbar home='' about='' data='' contact='' />
        <div id="content">
          <section >
            <div className="menu-trigger"></div>
            <div className="site-content">
              <h1 className="site-content__headline">{partyName} {TITLE}</h1>
            </div>
            <div className="col-md-offset-2 col-md-10">
              <h4 className="subheaderTitle col-md-4 "> Please select the political party :</h4>
              <div className=" subheaderTitle col-md-5">
                <FormGroup controlId="typeOfAssoc" onChange={this.handleNgoSector.bind(this)}  >
                  <FormControl componentClass="select" placeholder="All" defaultValue={0}>
                    <option value="" disabled >Select</option>
                    <option value="2,111,181**31,773 - 23% in Bulawayo**327,455 - 84% in Mashonaland Central**Mugabe Robert -ZANU_PF-**ZANU_PF**[0, 40, 60]**[0, 40, 65]**[0, 50, 70]">Mugabe Robert Gabriel (ZANU PF)</option>
                    <option value="1,173,287**46,533 - 12% in Mashonaland Central**89,207 - 66% in Bulawyo**Tsvangirai Morgan -MDC_T-**MDC_T**[0, 25, 40]**[0, 25, 40]**[0, 20, 50]">Tsvangirai Morgan (MDCT)</option>
                    <option value="92,701**3,525 - 0.9% in Mashonaland Central**12,726 - 7.9% in Matabeleland South**Ncube Welshman -MDC-**MDC**[0,2.5, 4]**[0,1.5,5]**[0, 2.5, 5]">Ncube Welshman (MDC)</option>
                    <option value="25,427** 843 - 0.18% in Harare**2,776 - 1.7% in Matabeleland South **Dabengwa Dumiso -ZAPU-**ZAPU**[0, 0.5, 1]**[0,0.7,2]**[0, 0.5, 1]">Dabengwa Dumiso (ZAPU) </option>
                    <option value="9,943**159 - 0.08% in Harare**1,166 - 0.7% in Matabeleland South**Mukwazhe Munodei -ZDP-**ZDP**[0, 0.2, 0.5]**[0,0.2,0.5]**[0, 0.5, 1]">Mukwazhe Munodei Kisinoti (ZDP) </option>
                    </FormControl>
                </FormGroup>
              </div>
            </div>

            <div className="light parallax-container center info-card-section" data-overlay="95">
              <div className="container">
                <div className="row m-space">
                  <div className="col-md-2 col-xs-6 info-card-font">
                    <i className="ion-ios-analytics-outline"></i>
                    <h3>{VOTES_value} </h3>
                    <p>{VOTES}</p>
                  </div>
                  <div className="col-md-5 col-xs-6 info-card-font">
                    <i className="ion-ios-lightbulb-outline"></i>
                    <h3>{worstResultValue}</h3>
                    <p>{CHAIRS}</p>
                  </div>
                  <div className="col-md-5 col-xs-6 info-card-font">
                    <i className="ion-ios-camera-outline"></i>
                    <h3>{BEST_RES_value}</h3>
                    <p>{BEST_RES}</p>
                  </div>
                  {/* <div className="col-md-3 col-xs-6 info-card-font">
                    <i className="ion-ios-briefcase-outline"></i>
                    <h3>{RUNNED_MUN_value}</h3>
                    <p> {RUNNED_MUN}</p>
                  </div> */}
                </div>
              </div>
            </div>
            <PartyMap partyToSelect={partyToSelect} gradesWard={gradesWard} gradesDistrict={gradesDistrict} gradesProvince={gradesProvince} partyName={partyName} />
          </section>

        </div>

      </div>
    );
  }
}
