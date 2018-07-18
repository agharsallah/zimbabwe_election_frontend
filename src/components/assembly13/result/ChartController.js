import React, { Component } from 'react';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import Translate from 'react-translate-component';
var _ = require('lodash');

export default class ChartController extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shapeIsLoaded: false, SelecteProvince: 'All',
            filter: 'result theme',
            SelecteProvince: 'All',
            subFilterGender: 'all gender',
            minFilter:0,
maxFilter:100,
        }
    }

    handleThemeChange(e, value) {
        this.setState({ filter: value });
        this.props.sendThemeFilterValue(value)
    }
    handleProvinceSelection(e) {
        this.setState({ SelecteProvince: e.target.value });
        this.props.sendProvinceFilterWaffle(e.target.value)
        if (e.target.value != 'All') {
            let assembly_house_res13 = _.filter(this.props.all_assembly_house_res13, function (o) {
                if (o.province == e.target.value) return o;
            });
            //send the count to the _root to push it afterward to the semipie
            this.props.sendPartyNumCount(assembly_house_res13);
        } else {
            //this.setState({ assembly_house_res13: this.state.all_assembly_house_res13 });
            this.props.sendPartyNumCount(this.props.all_assembly_house_res13);
        }
    }
    /* handleGenderSelection(e) {
        this.setState({ subFilterGender: e.target.value });
        this.props.sendGenderFilterValue(e.target.value)
        if (e.target.value == 'male') {

            let assembly_house_res13 = _.filter(this.props.all_assembly_house_res13, function (o) {
                if (o.winner_m == "1") return o;
            });
            console.log(assembly_house_res13);
            if (this.state.SelecteProvince != 'All') {
                assembly_house_res13 = _.filter(assembly_house_res13, function (o) {
                    if (o.province == this.state.SelecteProvince) return o;
                }, this);
                console.log('1a', assembly_house_res13);
            }

            this.props.sendGenderArray(assembly_house_res13);
        } else if (e.target.value == 'female') {

            let assembly_house_res13 = _.filter(this.props.all_assembly_house_res13, function (o) {
                if (o.winner_f == "1") return o;
            });
            if (this.state.SelecteProvince != 'All') {
                assembly_house_res13 = _.filter(assembly_house_res13, function (o) {
                    console.log(this.state.SelecteProvince);
                    if (o.province == this.state.SelecteProvince) return o;
                }, this);
                console.log('2', assembly_house_res13);
            }
            this.props.sendGenderArray(assembly_house_res13);
        } else {
           
            console.log('3', this.props.all_assembly_house_res13);
            this.props.sendGenderArray(this.props.assembly_house_res13);
        }

    } */
    handleGenderSelection(e) {
        this.setState({ subFilterGender: e.target.value });
        this.props.sendGenderFilterValue(e.target.value)
        if (e.target.value == 'male') {

            let assembly_house_res13 = _.filter(this.props.all_assembly_house_res13, function (o) {
                if (o.winner_m == "1") return o;
            });
            console.log(assembly_house_res13);

            this.props.sendGenderArray(assembly_house_res13);
        } else if (e.target.value == 'female') {
            let assembly_house_res13 = _.filter(this.props.all_assembly_house_res13, function (o) {
                if (o.winner_f == "1") return o;
            });

            this.props.sendGenderArray(assembly_house_res13);
        } else {
            this.props.sendGenderArray(this.props.all_assembly_house_res13);
        }
    }
    handleMinFilter(e){
    this.setState({ minFilter: parseInt(e.target.value) });
    this.props.sendVotePercObject({minFilter:parseInt(e.target.value),maxFilter:this.state.maxFilter})
    }
    handleMaxFilter(e){
        this.setState({ maxFilter: parseInt(e.target.value)});
        this.props.sendVotePercObject({minFilter:this.state.minFilter,maxFilter:parseInt(e.target.value)})
    }
    render() {
        const SELECT_THEME = <Translate type='text' content='resultsHouse13.select_theme' />//Select theme
        const RESULT_THEME = <Translate type='text' content='resultsHouse13.result_theme' />//Result
        const GENDER_THEME = <Translate type='text' content='resultsHouse13.gender_theme' />//Result per gende
        const PROVINCE_THEME = <Translate type='text' content='resultsHouse13.province_theme' />//Result per Province
        const PICK_PROVINCE = <Translate type='text' content='resultsHouse13.pick_province' />//pick_provincee
        const PICK_GENDER = <Translate type='text' content='resultsHouse13.pick_gender' />//pick_gender

        return (
            <div>
                <section   >
                    <h4 className="subheaderTitle">{SELECT_THEME} </h4>
                    <RadioButtonGroup name="theme" defaultSelected="result theme" onChange={this.handleThemeChange.bind(this)} >
                        <RadioButton
                            value="result theme"
                            label={RESULT_THEME}
                            style={{ marginBottom: '8px' }}
                        />
                        <RadioButton
                            value="per gender theme"
                            label={GENDER_THEME}
                            style={{ marginBottom: '8px' }}
                        />
                        <RadioButton
                            value="province map theme"
                            label={PROVINCE_THEME}
                        />

                    </RadioButtonGroup>
                    <hr />
                    {this.state.filter == 'result theme' ?
                        (<div>
                            <h4 className="subheaderTitle">{PICK_PROVINCE} </h4>
                            <div className='form-group' controlId="typeOfAssoc" onChange={this.handleProvinceSelection.bind(this)}  >
                                <select className='form-control' componentClass="select" placeholder="All" value={this.state.SelecteProvince} >
                                    <option value="" disabled >Select</option>
                                    <option value="All">All</option>
                                    <option value="Bulawayo">Bulawayo</option>
                                    <option value="Harare">Harare </option>
                                    <option value="Manicaland"> Manicaland</option>
                                    <option value="Mashonaland Central"> Mashonaland Central</option>
                                    <option value="Mashonaland East"> Mashonaland East</option>
                                    <option value="Mashonaland West"> Mashonaland West</option>
                                    <option value="Masvingo"> Masvingo</option>
                                    <option value="Matabeleland North"> Matabeleland North</option>
                                    <option value="Matabeleland South"> Matabeleland South</option>
                                    <option value="Midlands"> Midlands</option>
                                </select>
                            </div>
                            <hr/>
                            <section className='row col-md-12 ' style={{marginBottom:'25px'}} >
                            <h4 className="subheaderTitle">Filter per vote perc. </h4>
                                <input type="number" onChange={this.handleMinFilter.bind(this)} value={this.state.minFilter} min={0} className='filterResultInput' />%
                                &nbsp;&nbsp; <span style={{ color: 'red' }}> -</span> &nbsp;
                            <input type="number" onChange={this.handleMaxFilter.bind(this)} value={this.state.maxFilter} min={1} className='filterResultInput' />%
                            </section>

                        </div>)
                        : this.state.filter == 'per gender theme' ?
                            <div>
                                <h4 className="subheaderTitle">{PICK_GENDER} </h4>
                                <div className='form-group' controlId="typeOfAssoc" onChange={this.handleGenderSelection.bind(this)}  >
                                    <select className='form-control' componentClass="select" placeholder="All" value={this.state.subFilterGender} >
                                        <option value="" disabled >Select</option>
                                        <option value="all gender">All</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female </option>
                                    </select>
                                </div>
                            </div>
                            :
                            null
                    }
                </section>
            </div>
        );
    }
}
