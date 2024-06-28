// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Facilities from './Pages/Facilities';
import News from './Pages/News';
import ZagaConstruction from './Pages/ZagaConstruction';
import AboutHomepark from './Pages/AboutHomePark';
import HomeParkBlock from './Pages/HomeParkBlock';
import SalesTeam from './Pages/SalesTeam';
import SalesOffices from './Pages/SalesOffices';
import PressReleases from './Pages/PressReleases';
import PhotoGallery from './Pages/PhotoGallery';
import IntroVideo from './Pages/IntroVideo';
import Certificates from './Pages/Certificates';
import Faq from './Pages/Faq';
import NotFound from './Pages/NotFound';
import Contact from './Pages/Contact';
import ApartmentOneRoom from './Pages/ApartmentOneRoom';
import ApartmentTwoRooms from './Pages/ApartmentTwoRooms';
import ApartmentThreeRooms from './Pages/ApartmentThreeRooms';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/news" element={<News/>} />
        <Route path="/zagaconstruction" element={<ZagaConstruction/>} />
        <Route path="/abouthomepark" element={<AboutHomepark/>} />
        <Route path="/homeparkblock" element={<HomeParkBlock/>} />
        <Route path="/salesteam" element={<SalesTeam/>} />
        <Route path="/salesoffices" element={<SalesOffices/>} />
        <Route path="/pressreleases" element={<PressReleases/>} />
        <Route path="/photogallery" element={<PhotoGallery/>} />
        <Route path="/introvideo" element={<IntroVideo/>} />
        <Route path="/certificates" element={<Certificates/>} />
        <Route path="/faq" element={<Faq/>} />
        <Route path="/notfound" element={<NotFound/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/apartmentoneroom" element={<ApartmentOneRoom/>} />
        <Route path="/apartmenttworooms" element={<ApartmentTwoRooms/>} />
        <Route path="/apartmentthreerooms" element={<ApartmentThreeRooms/>} />

        {/* Add more routes as needed */}

      </Routes>
    </Router>
  );
}

export default App;
