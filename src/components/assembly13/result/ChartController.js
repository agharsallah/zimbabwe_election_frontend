import React, { Component } from 'react';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import Translate from 'react-translate-component';
export default class ChartController extends Component {

    handleRadioChange(){}
    render() {
        const SELECT_THEME = <Translate type='text' content='resultsHouse13.select_theme' />//Select theme
        const RESULT_THEME = <Translate type='text' content='resultsHouse13.result_theme' />//Result
        const GENDER_THEME = <Translate type='text' content='resultsHouse13.gender_theme' />//Result per gende
        const PROVINCE_THEME = <Translate type='text' content='resultsHouse13.province_theme' />//Result per Province

        return (
            <div>
                <section   >
                    <h4 className="subheaderTitle">{SELECT_THEME} </h4>
                    <RadioButtonGroup name="theme" defaultSelected="result theme" onChange={this.handleRadioChange.bind(this)} >
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
                </section>
            </div>
        );
    }
}
