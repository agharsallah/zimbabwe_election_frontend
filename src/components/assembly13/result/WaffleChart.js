import React, { Component } from 'react';
import Translate from 'react-translate-component';

export default class WaffleChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shapeIsLoaded: false
        }
    }

    render() {
        let colorBox;
        const DEPUTY_NAME = <Translate type='text' content='resultsHouse13.deputy_name' />//Deputy Name
        const VOTES_PERCENTAGE = <Translate type='text' content='resultsHouse13.vote_per' />//Votes Percentage
        const VOTES_NUMBER = <Translate type='text' content='resultsHouse13.vote_num' />//Votes Number

        return (
            <div className="content-inner" key={this.props.SelecteProvince + this.props.subFilterGender + this.props.activeFilter}>
                <h4 className="subheaderHover">Hover on the boxes for more info</h4>
                {
                    this.props.activeFilter == 'none' ?
                        //this block is executed when the user isn't using the percentage filter input -PS: this should be rewriten I feel like a zombie
                        (this.props.SelecteProvince != 'All' ?
                            this.props.assembly_house_res13.map(function (constituencyElm) {
                                constituencyElm.party_winner == 'mdc_t' ? colorBox = '#EB4948' : constituencyElm.party_winner == 'indep' ? colorBox = '#F7B62C' : colorBox = '#7ECF68';
                                return (
                                    <a key={constituencyElm.winner_name}

                                        className="box col-md-1 tooltipRectangle" style={{ background: colorBox }} >
                                        <div className="inner"></div>
                                        <div className="tooltiptext">
                                            <h5 style={{ textAlign: 'center' }}>{constituencyElm.constituency} / {constituencyElm.province}</h5>
                                            <h5 style={{ color: '#FE9187' }}>{DEPUTY_NAME}: <span style={{ color: '#fff' }} > {constituencyElm.winner_name} </span> </h5>
                                            <h5 style={{ color: '#FE9187' }}>{VOTES_PERCENTAGE}: <span style={{ color: '#fff' }} >  {(parseInt((constituencyElm.winner_votes).replace(/,/g, '')) * 100 / parseInt((constituencyElm.total_votes).replace(/,/g, ''))).toFixed(2) + ' %'} </span> </h5>
                                            <h5 style={{ color: '#FE9187' }}>{VOTES_NUMBER}: <span style={{ color: '#fff' }} >  {commaNum((constituencyElm.winner_votes).replace(/,/g, '')) + ' votes'} </span> </h5>

                                        </div>
                                    </a>
                                )
                            })
                            :

                            this.props.all_assembly_house_res13.map(function (constituencyElm) {
                                constituencyElm.party_winner == 'mdc_t' ? colorBox = '#EB4948' : constituencyElm.party_winner == 'indep' ? colorBox = '#F7B62C' : colorBox = '#7ECF68';

                                return (
                                    <a key={constituencyElm.winner_name}

                                        className="box col-md-1 tooltipRectangle" style={{ background: colorBox }} >
                                        <div className="inner"></div>
                                        <div className="tooltiptext">
                                            <h5 style={{ textAlign: 'center' }}>{constituencyElm.constituency} / {constituencyElm.province}</h5>
                                            <h5 style={{ color: '#FE9187' }}>{DEPUTY_NAME}: <span style={{ color: '#fff' }} > {constituencyElm.winner_name} </span> </h5>
                                            <h5 style={{ color: '#FE9187' }}>{VOTES_PERCENTAGE}: <span style={{ color: '#fff' }} >  {(parseInt((constituencyElm.winner_votes).replace(/,/g, '')) * 100 / parseInt((constituencyElm.total_votes).replace(/,/g, ''))).toFixed(2) + ' %'} </span> </h5>
                                            <h5 style={{ color: '#FE9187' }}>{VOTES_NUMBER}: <span style={{ color: '#fff' }} >  {commaNum((constituencyElm.winner_votes).replace(/,/g, '')) + ' votes'} </span> </h5>

                                        </div>
                                    </a>
                                )
                            })
                        )
                        :
                        //this block is exceuted with percentage filter taken into concideration
                        (this.props.SelecteProvince != 'All' ?
                            this.props.assembly_house_res13.map(function (constituencyElm) {
                                let percentage = parseInt((constituencyElm.winner_votes).replace(/,/g, '')) * 100 / parseInt((constituencyElm.total_votes).replace(/,/g, ''));
                                (percentage >= (this.props.minMaxObj).minFilter && percentage <= (this.props.minMaxObj).maxFilter) ?
                                    constituencyElm.party_winner == 'mdc_t' ? colorBox = '#EB4948' : constituencyElm.party_winner == 'indep' ? colorBox = '#F7B62C' : colorBox = '#7ECF68'
                                    : colorBox = '#fff'
                                return (
                                    <a key={constituencyElm.winner_name}

                                        className="box col-md-1 tooltipRectangle" style={{ background: colorBox }} >
                                        <div className="inner"></div>
                                        <div className="tooltiptext">
                                            <h5 style={{ textAlign: 'center' }}>{constituencyElm.constituency} / {constituencyElm.province}</h5>
                                            <h5 style={{ color: '#FE9187' }}>{DEPUTY_NAME}: <span style={{ color: '#fff' }} > {constituencyElm.winner_name} </span> </h5>
                                            <h5 style={{ color: '#FE9187' }}>{VOTES_PERCENTAGE}: <span style={{ color: '#fff' }} >  {(parseInt((constituencyElm.winner_votes).replace(/,/g, '')) * 100 / parseInt((constituencyElm.total_votes).replace(/,/g, ''))).toFixed(2) + ' %'} </span> </h5>
                                            <h5 style={{ color: '#FE9187' }}>{VOTES_NUMBER}: <span style={{ color: '#fff' }} >  {commaNum((constituencyElm.winner_votes).replace(/,/g, '')) + ' votes'} </span> </h5>

                                        </div>
                                    </a>
                                )
                            },this)
                            :

                            this.props.all_assembly_house_res13.map(function (constituencyElm) {
                                let percentage = parseInt((constituencyElm.winner_votes).replace(/,/g, '')) * 100 / parseInt((constituencyElm.total_votes).replace(/,/g, ''));
                                (percentage >= (this.props.minMaxObj).minFilter && percentage <= (this.props.minMaxObj).maxFilter) ?
                                    constituencyElm.party_winner == 'mdc_t' ? colorBox = '#EB4948' : constituencyElm.party_winner == 'indep' ? colorBox = '#F7B62C' : colorBox = '#7ECF68'
                                    : colorBox = '#fff'
                                return (
                                    <a key={constituencyElm.winner_name}

                                        className="box col-md-1 tooltipRectangle" style={{ background: colorBox }} >
                                        <div className="inner"></div>
                                        <div className="tooltiptext">
                                            <h5 style={{ textAlign: 'center' }}>{constituencyElm.constituency} / {constituencyElm.province}</h5>
                                            <h5 style={{ color: '#FE9187' }}>{DEPUTY_NAME}: <span style={{ color: '#fff' }} > {constituencyElm.winner_name} </span> </h5>
                                            <h5 style={{ color: '#FE9187' }}>{VOTES_PERCENTAGE}: <span style={{ color: '#fff' }} >  {(parseInt((constituencyElm.winner_votes).replace(/,/g, '')) * 100 / parseInt((constituencyElm.total_votes).replace(/,/g, ''))).toFixed(2) + ' %'} </span> </h5>
                                            <h5 style={{ color: '#FE9187' }}>{VOTES_NUMBER}: <span style={{ color: '#fff' }} >  {commaNum((constituencyElm.winner_votes).replace(/,/g, '')) + ' votes'} </span> </h5>

                                        </div>
                                    </a>
                                )
                            },this)
                        )
                }
            </div>
        );
    }
}

const commaNum = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
/* plotWaffle=(colorBox,data)=>{
    console.log('gggg');
    data.map(function (constituencyElm) {
        constituencyElm.party_winner == 'mdc_t' ? colorBox = '#EB4948' : constituencyElm.party_winner == 'indep' ? colorBox = '#F7B62C' : colorBox = '#7ECF68';
        return (
            <a key={constituencyElm.winner_name}

                className="box col-md-1 tooltipRectangle" style={{ background: colorBox }} >
                <div className="inner"></div>
                <div className="tooltiptext">
                    <h5 style={{ textAlign: 'center' }}>{constituencyElm.constituency} / {constituencyElm.province}</h5>
                    <h5 style={{ color: '#FE9187' }}>{DEPUTY_NAME}: <span style={{ color: '#fff' }} > {constituencyElm.winner_name} </span> </h5>
                    <h5 style={{ color: '#FE9187' }}>{VOTES_PERCENTAGE}: <span style={{ color: '#fff' }} >  {(parseInt((constituencyElm.winner_votes).replace(/,/g, '')) * 100 / parseInt((constituencyElm.total_votes).replace(/,/g, ''))).toFixed(2) + ' %'} </span> </h5>
                    <h5 style={{ color: '#FE9187' }}>{VOTES_NUMBER}: <span style={{ color: '#fff' }} >  {commaNum((constituencyElm.winner_votes).replace(/,/g, '')) + ' votes'} </span> </h5>

                </div>
            </a>
        )
    })
} */