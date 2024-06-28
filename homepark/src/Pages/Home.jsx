import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Facilities from './Facilities';
import Navbar from '../components/Navbar';
import Preloader from '../components/Preloader';
import SideNavigation from '../components/SideNavigation';
import Slider from '../components/Slider';
import IntroSection from '../components/IntroSection';
import LogoSection from '../components/LogoSection';
import BenefitsSection from '../components/BenefitsSection';
import RecentGallery from '../components/RecentGallery';
import PropertyCalculatorSection from '../components/PropertyCalculatorSection';
import PropertyPlans from '../components/PropertyPlansSection';
import GetConsultation from '../components/GetConsultationSection';
import RecentPosts from '../components/RecentPostsSection';
import PropertyCustomization from '../components/PropertyCustomizationSection';
import Certificates from '../components/CertificatesSection';
import FooterBar from '../components/FooterBar';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="Home">
      <Navbar />
      <Preloader />
   
      <Slider />
      <IntroSection />                                                                                                                                                                                                   
      <LogoSection />
      <BenefitsSection />
      <RecentGallery />
      <PropertyCalculatorSection />
      <PropertyPlans />
      <GetConsultation />
      <RecentPosts />
      <PropertyCustomization />
      <Certificates />
      <FooterBar />
      <Footer />

    </div>
  );
}

export default Home;
