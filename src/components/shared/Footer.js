import React from 'react';
const handleScroll=()=>{
    console.log('Go to top');
    $('.go-top').on('click', function() {            
        $("html, body").animate({ scrollTop: 0 }, 1000 , 'easeInOutExpo');
        return false;
    });
}
const Footer = ({}) => (
    <div >
        <div className="footer-bottom" >
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="copyright">
                            <p>Checkout the project on <a href="https://github.com/hunter-x/zimbabwe_election_frontend" title="">Github</a>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section className="button-go-top" onClick={handleScroll}>
            <div href="#" title="" className="go-top">
                <i className="fa fa-chevron-up"></i>
            </div>
        </section>
    </div>
);

export default Footer;
