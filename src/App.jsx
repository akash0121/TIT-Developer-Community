import "./App.css";
import Navbar from "./componants/Navbar"; // Corrected typo
import Footer from "./componants/Footer"; // Corrected typo

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Mentor from "./pages/MentorProfile";
import Events from "./pages/EventsPage";
import HallOfFame from "./pages/HallOfFame";
import HowToJoin from "./pages/HowJoin";
import PhotoGallery from "./pages/PhotoGallery";
import ContactUs from "./pages/ContactUs";
import Faq from "./pages/Faq";
import Impact from "./pages/Impact";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutpage" element={<AboutPage />} />
        <Route path="/mentor" element={<Mentor />} />
        <Route path="/events" element={<Events />} />
        {/* Note: No matching navItem for /halloffame or /howtojoin in Navbar */}
        <Route path="/halloffame" element={<HallOfFame />} />
        <Route path="/howtojoin" element={<HowToJoin />} />
        <Route path="/photogallery" element={<PhotoGallery />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/impact" element={<Impact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;