import React, { Component } from 'react';
import HighchartInit from '../../shared/HighchartInit';
export default class SeatsSemiCircle extends Component {
    constructor(props) {
        super(props);
        this.state = { option: {} }
    }
    componentWillReceiveProps(nextProps) {
        let seatsSum = 0, zanu = 161, mdct = 48, indep = 1;
        nextProps.SelecteProvince != 'All' ? (seatsSum = nextProps.indepSeatsNum + nextProps.mdcSeatsNum + nextProps.zanuSeatsNum, zanu = nextProps.zanuSeatsNum, mdct = nextProps.mdcSeatsNum, indep = nextProps.indepSeatsNum) : (seatsSum = 210, zanu = 161, mdct = 48, indep = 1)

        this.setState({
            options: {
                chart: {
                    backgroundColor: 'rgba(255, 255, 255, 0.0)',
                    spacingTop: 1,
                    spacingBottom: 1,
                },
                credits: false,
                title: {
                    text: seatsSum + ' seats',
                    align: 'center',
                    verticalAlign: 'middle',
                    y: 40
                },
                tooltip: {
                    headerFormat: '',
                    pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>'
                },
                plotOptions: {
                    pie: {
                        dataLabels: {
                            enabled: true,
                            distance: -50,
                            style: {

                                color: 'white'
                            },
                            formatter: function () {
                                console.log(this);
                                return this.point.name + ' : ' + this.y + 'seat';
                            }
                        },
                        size: 400,
                        startAngle: -90,
                        endAngle: 90,
                        center: ['50%', '75%']
                    }
                },
                series: [{
                    type: 'pie',
                    name: 'Browser share',
                    innerSize: '50%',
                    data: [{
                        name: 'Independent',
                        y: indep,
                        color: '#F7B62C'
                    }, {
                        name: 'MDC-T',
                        y: mdct,
                        color: '#EB4948'
                    },

                    {
                        name: 'ZANU-PF',
                        y: zanu,
                        color: '#7ECF68'
                    }
                    ]
                }]
            }
        });
    }

    componentWillMount() {
        this.setState({
            options: {
                chart: {
                    backgroundColor: 'rgba(255, 255, 255, 0.0)',
                    spacingTop: 1,
                    spacingBottom: 1,
                },
                credits: false,
                title: {
                    text: '210<br>House of Assembly<br>Seats',
                    align: 'center',
                    verticalAlign: 'middle',
                    y: 40
                },
                tooltip: {
                    headerFormat: '',
                    pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>'
                },
                plotOptions: {
                    pie: {
                        dataLabels: {
                            enabled: true,
                            distance: -50,
                            style: {

                                color: 'white'
                            },
                            formatter: function () {
                                console.log(this);
                                return this.point.name + ' : ' + this.y + 'seat';
                            }
                        },
                        size: 400,
                        startAngle: -90,
                        endAngle: 90,
                        center: ['50%', '75%']
                    }
                },
                series: [{
                    type: 'pie',
                    name: 'Browser share',
                    innerSize: '50%',
                    data: [{
                        name: 'Independent',
                        y: this.props.indepSeatsNum,
                        color: '#F7B62C'
                    }, {
                        name: 'MDC-T',
                        y: this.props.mdcSeatsNum,
                        color: '#EB4948'
                    },

                    {
                        name: 'ZANU-PF',
                        y: this.props.zanuSeatsNum,
                        color: '#7ECF68'
                    }
                    ]
                }]
            }
        }

        )
    }
    render() {
        console.log(this.props.zanuSeatsNum, this.props.mdcSeatsNum, this.props.indepSeatsNum, );
        return (
            <div className='col-md-12' >
                <HighchartInit key={this.props.SelecteProvince} options={this.state.options} styles={{ height: '350px' }} />
            </div>
        );
    }
}