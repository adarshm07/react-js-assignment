import React from "react";
import PortfolioCard from './PortfolioCard'
// import PortfolioModal from "./PortfolioModal";
import cake from "./img/portfolio/cake.png";
import circus from "./img/portfolio/circus.png";
import game from "./img/portfolio/game.png";
import safe from "./img/portfolio/safe.png";
import submarine from "./img/portfolio/submarine.png";


const PortfolioSection = () => (
  <div>
    <section className="page-section portfolio" id="portfolio">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
          Portfolio
        </h2>
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>
        <div className="row justify-content-center">
          <PortfolioCard />
          <PortfolioCard imgURL = {cake} />
          <PortfolioCard imgURL = {circus} />
          <PortfolioCard imgURL = {game} />
          <PortfolioCard imgURL = {safe} />
          <PortfolioCard imgURL = {submarine} />
        </div>
      </div>
    </section>
    {/* <PortfolioModal />
    <PortfolioModal modal__title = 'LearnCodeOnline 2' description__num = '2' />
    <PortfolioModal />
    <PortfolioModal />
    <PortfolioModal /> */}
    {/* <PortfolioModal /> */}
  </div>
);

export default PortfolioSection;
