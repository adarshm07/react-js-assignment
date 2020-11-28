import React from 'react'
import './css/Style.css'

import NavBar from './NavBar'
import HeroSection from './HeroSection'
import PortfolioSection from './PortfolioSection'
import AboutSection from './AboutSection'
import ContactSection from './ContactSection'
import FooterSection from './FooterSection'
import CopyrightSection from './CopyrightSection'
import ScrollToTop from './ScrollToTop'
import PortfolioModal from './PortfolioModal'

const App = () => (
    <div>
    <NavBar />
    <HeroSection />
    <PortfolioSection />
    <AboutSection />
    <ContactSection />
    <FooterSection />
    <CopyrightSection />
    <ScrollToTop />
    </div>
)

export default App;