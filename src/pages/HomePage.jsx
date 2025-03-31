import Home from "../componants/Home";
import AboutPage from "./AboutPage";
import Mentor from "./MentorProfile";
import Events from "./EventsPage";
import HallOfFame from "./HallOfFame";
import HowToJoin from "./HowJoin";
import PhotoGallery from "./PhotoGallery";
import ContactUs from "./ContactUs";
import Faq from "./Faq";
import Impact from "./Impact";

import React from 'react'

const HomePage = () => {
  return (
    <div>
      <Home></Home>
      <Impact></Impact>
      <AboutPage></AboutPage>
      <Mentor></Mentor>
      <Events></Events>
      <HallOfFame></HallOfFame>
      <HowToJoin></HowToJoin>
      <PhotoGallery></PhotoGallery>
      <ContactUs></ContactUs>
      <Faq></Faq>
    </div>
  )
}

export default HomePage
