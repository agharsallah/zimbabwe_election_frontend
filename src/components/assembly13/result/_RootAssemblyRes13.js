import React, { Component } from 'react';
import Navbar from '../../shared/Navbar';
import Translate from 'react-translate-component';
import './styleBox.css'
import config from '../../config'
import axios from 'axios';

class _RootAssemblyRes13 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shapeIsLoaded: false, assembly_house_res13: []
        }
    }
    componentWillMount() {

        let qString = `${config.apiUrl}/api/shape/zim_assemblyhouse_res_13`;
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
                this.setState({ assembly_house_res13: JSON.parse(response.data.data), shapeIsLoaded: true });
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    render() {
        const TITLE = <Translate type='text' content='pres13Invalid.title' />//You can select rejected or unacounted from the list
        let colorBox;
        return (
            <div>
                <Navbar home='' about='' data='' contact='' />
                <div id="content">
                    <div className="menu-trigger"></div>
                    <div className="site-content">
                        <h1 className="site-content__headline"> House of Assembly results  </h1>
                    </div>
                    <div className="col-md-2 card info-card-font" >
                        <h6 className='center '>Controlers</h6>

                    </div>
                    <div className="col-md-10 col-sm-12">
                    <div className="content-inner">
                        {
                            this.state.assembly_house_res13.map(function (constituencyElm) {
                                constituencyElm.party_winner=='mdc_t' ?colorBox='#EB4948':constituencyElm.party_winner=='indep'?colorBox='#F7B62C': colorBox='#7ECF68';
                                return(<div key={constituencyElm.winner_name}
                            
                                className="box col-md-1 " style={{background:colorBox}} >
                                    <div className="inner"></div>
                            </div> )
                            })
                           
                        }
                        
                          
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default _RootAssemblyRes13;