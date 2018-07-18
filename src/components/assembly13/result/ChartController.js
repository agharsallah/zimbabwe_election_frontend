import React, { Component } from 'react';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import Translate from 'react-translate-component';
export default class ChartController extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: 'result theme',
            SelecteProvince:'All'
        }
    }
    handleThemeChange(e, value) {
        this.setState({ filter: value });
        this.props.sendThemeFilterValue(value)
    }
    handleProvinceSelection(e){
        this.setState({SelecteProvince:e.target.value});
        this.props.sendProvinceFilterWaffle(e.target.value)

    }
    render() {
        const SELECT_THEME = <Translate type='text' content='resultsHouse13.select_theme' />//Select theme
        const RESULT_THEME = <Translate type='text' content='resultsHouse13.result_theme' />//Result
        const GENDER_THEME = <Translate type='text' content='resultsHouse13.gender_theme' />//Result per gende
        const PROVINCE_THEME = <Translate type='text' content='resultsHouse13.province_theme' />//Result per Province
        const PICK_PROVINCE = <Translate type='text' content='resultsHouse13.pick_province' />//pick_provincee

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
                    <h4 className="subheaderTitle">{PICK_PROVINCE} </h4>
                        <div className='form-group' controlId="typeOfAssoc" onChange={this.handleProvinceSelection.bind(this)}  >
                            <select className='form-control' componentClass="select" placeholder="All" value={this.state.subFilterGender} >
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
                </section>
            </div>
        );
    }
}
