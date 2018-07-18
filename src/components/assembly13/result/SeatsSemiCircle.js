import React, { Component } from 'react';
import HighchartInit from '../../shared/HighchartInit';
export default class SeatsSemiCircle extends Component {
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
                    spacingBottom: 0
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
                        y: 1,
                        color: '#F7B62C'
                    }, {
                        name: 'MDC-T',
                        y: 48,
                        color: '#EB4948'
                    },
                    {
                        name: 'ZANU-PF',
                        y: 161,
                        color: '#7ECF68'
                    }
                    ]
                }]
            }
        }

        )
    }
    render() {
        return (
            <div className='col-md-12' >
                <HighchartInit options={this.state.options} />
            </div>
        );
    }
}