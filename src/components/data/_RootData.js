import React, { Component } from 'react';
import Translate from 'react-translate-component';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import './DownloadButton.css'
export default class RootData extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const TITLE = <Translate type='text' content='data.title' />//Zimbabwe election

        return (
            <div>
                <Navbar home='' about='' data='active' contact='' />

                <section className="main-services">
                    <div className="container">
                        <div className="row">
                            <div className="flat-title style1">
                                <h2>{TITLE}</h2>
                            </div>

                            <div className='article-text-style'>
                                <p>* Download maps shapefiles : </p>
                                <div style={{marginBottom:'5vh'}} className='col-md-12' >
                                    <a className='col-md-4' href="https://github.com/hunter-x/Zimbabwe_election_raw_data/blob/master/data/shapes%2Bdata/presidential2013_province.geojson" target='blank' >
                                        <RaisedButton style={{width:'18vw'}} label="Province Level" labelPosition="before" icon={<FontIcon className="fas fa-download" />} />
                                    </a>
                                    <a className='col-md-4' href="https://github.com/hunter-x/Zimbabwe_election_raw_data/blob/master/data/shapes%2Bdata/presidential2013_district.geojson" target='blank' >
                                        <RaisedButton style={{width:'18vw'}} label="District Level" labelPosition="before" icon={<FontIcon className="fas fa-download" />} />
                                    </a>

                                    <a className='col-md-4' href="https://github.com/hunter-x/Zimbabwe_election_raw_data/blob/master/data/shapes%2Bdata/presidential2013_ward.geojson" target='blank' >
                                        <RaisedButton style={{width:'18vw'}} label="Ward Level" labelPosition="before" icon={<FontIcon className="fas fa-download" />} />
                                    </a>

                                </div>

                                <p >* Download 2013 Presidential results : </p>
                                <div style={{marginBottom:'5vh'}} className='col-md-12' >
                                    <a className='col-md-3' href="https://github.com/hunter-x/Zimbabwe_election_raw_data/blob/master/data/old_results/2013_presidential/2013Bulawayol_Presidential_Results_Formatted_13-08-2013.pdf" target='blank' >
                                        <RaisedButton  label="Bulawayo " className='download-button' labelPosition="before" icon={<FontIcon className="fas fa-download" />} />
                                    </a>
                                    <a className='col-md-3' href="https://github.com/hunter-x/Zimbabwe_election_raw_data/blob/master/data/old_results/2013_presidential/2013Harare_Presidential_Results_Formatted_13-08-2013.pdf" target='blank' >
                                        <RaisedButton  label="Harare" className='download-button' labelPosition="before" icon={<FontIcon className="fas fa-download" />} />
                                    </a>
                                    <a className='col-md-3' href="https://github.com/hunter-x/Zimbabwe_election_raw_data/blob/master/data/old_results/2013_presidential/2013Manicaland_Presidential_Results_Formatted_13-08-2013.pdf" target='blank' >
                                        <RaisedButton  label="Manicaland" className='download-button' labelPosition="before" icon={<FontIcon className="fas fa-download" />} />
                                    </a>
                                    <a className='col-md-3' href="https://github.com/hunter-x/Zimbabwe_election_raw_data/blob/master/data/old_results/2013_presidential/2013Mash_Central_Presidential_Results_Formatted_13-08-2013.pdf" target='blank' >
                                        <RaisedButton  label="Mashonaland Central" className='download-button' labelPosition="before" icon={<FontIcon className="fas fa-download" />} />
                                    </a>
                                    <a className='col-md-3' href="https://github.com/hunter-x/Zimbabwe_election_raw_data/blob/master/data/old_results/2013_presidential/2013Mash_East_Presidential_Results_Formatted_13-08-2013.pdf" target='blank' >
                                        <RaisedButton  label="Mashonaland East" className='download-button' labelPosition="before" icon={<FontIcon className="fas fa-download" />} />
                                    </a>
                                    <a className='col-md-3' href="https://github.com/hunter-x/Zimbabwe_election_raw_data/blob/master/data/old_results/2013_presidential/2013Mash_West_Presidential_Results_Formatted_13-08-2013.pdf" target='blank' >
                                        <RaisedButton  label="Mashonaland West" className='download-button' labelPosition="before" icon={<FontIcon className="fas fa-download" />} />
                                    </a>
                                    <a className='col-md-3' href="https://github.com/hunter-x/Zimbabwe_election_raw_data/blob/master/data/old_results/2013_presidential/2013Masvingo_Presidential_Results_Formatted_13-08-2013.pdf" target='blank' >
                                        <RaisedButton  label="Masvingo" className='download-button' labelPosition="before" icon={<FontIcon className="fas fa-download" />} />
                                    </a>
                                    <a className='col-md-3' href="https://github.com/hunter-x/Zimbabwe_election_raw_data/blob/master/data/old_results/2013_presidential/2013MatNorthl_Presidential_Results_Formatted_13-08-2013.pdf" target='blank' >
                                        <RaisedButton  label="Matabeleland North" className='download-button' labelPosition="before" icon={<FontIcon className="fas fa-download" />} />
                                    </a>
                                    <a className='col-md-3' href="https://github.com/hunter-x/Zimbabwe_election_raw_data/blob/master/data/old_results/2013_presidential/2013MatSouth_Presidential_Results_Formatted_13-08-2013.pdf" target='blank' >
                                        <RaisedButton  label="Matabeleland South" className='download-button' labelPosition="before" icon={<FontIcon className="fas fa-download" />} />
                                    </a>
                                    <a className='col-md-3' href="https://github.com/hunter-x/Zimbabwe_election_raw_data/blob/master/data/old_results/2013_presidential/2013Midlands_Presidential_Results_Formatted_13-08-2013.pdf" target='blank' >
                                        <RaisedButton  label="Midlands" className='download-button' labelPosition="before" icon={<FontIcon className="fas fa-download" />} />
                                    </a>
                                </div>

                                <p >* Download report that contained registration per province (used in 2013 pres. turnout map) : </p>
                                <div style={{marginBottom:'5vh'}} className='col-md-12' >
                                <a className='col-md-8' href="https://github.com/hunter-x/Zimbabwe_election_raw_data/blob/master/data/reports/Key-Statistics-from-the-2013-Voters-Roll-Audit-final-copy-5-July-2013.pdf" target='blank' >
                                        <RaisedButton style={{marginTop:'2vh'}}  label=" Key Statistics from the 2013 Voters Roll Audit"  labelPosition="before" icon={<FontIcon className="fas fa-download" />} />
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>


                <Footer />
            </div>
        );
    }
}
