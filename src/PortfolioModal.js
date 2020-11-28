import React from 'react'

const PortfolioModal = ({modal__title = 'LearnCodeOnline One', description__num = '1'}) => (
    // <!-- Portfolio Modal 1-->
    <div className="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-labelledby="portfolioModal1Label" aria-hidden="true">
    <div className="modal-dialog modal-xl" role="document">
        <div className="modal-content">
            <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true"><i className="fas fa-times"></i></span>
            </button>
            <div className="modal-body text-center">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0" id="portfolioModal1Label">{modal__title}</h2>
                            <div className="divider-custom">
                                <div className="divider-custom-line"></div>
                                <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                <div className="divider-custom-line"></div>
                            </div>
                            <img className="img-fluid rounded mb-5" src="assets/img/portfolio/cabin.png" alt="" />
                            <p className="mb-5">This is Description {description__num}</p>
                            <button className="btn btn-primary" data-dismiss="modal">
                                <i className="fas fa-times fa-fw"></i>
                                Close Window
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
)

export default PortfolioModal;