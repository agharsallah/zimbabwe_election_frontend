import React, { Component } from 'react';
import HighchartInit from '../../shared/HighchartInit';
export default class SeatsSemiCircleGender extends Component {
    constructor(props) {
        super(props);
        this.state = { option: {} }
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
                        name: 'Male',
                        y: 185,
                        color: '#22A8DB'
                    }, {
                        name: 'Female',
                        y: 25,
                        color: '#FC0F3A'
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