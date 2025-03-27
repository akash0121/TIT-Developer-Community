import "./App.css";
import Navbar from "./componants/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Mentor from "./pages/MentorProfile";
import Events from "./pages/EventsPage";
import HallOfFame from "./pages/HallOfFame";
import HowToJoin from "./pages/HowJoin";
import PhotoGallery from "./pages/PhotoGallery";
import ContactUs from "./pages/ContactUs";
import Faq from "./pages/Faq";
import Footer from "./componants/Footer";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <HomePage></HomePage>
      <AboutPage></AboutPage>
      <Mentor></Mentor>
      <Events></Events>
      <HallOfFame></HallOfFame>
      <HowToJoin></HowToJoin>
      <PhotoGallery></PhotoGallery>
      <ContactUs></ContactUs>
      <Faq></Faq>
      <Footer></Footer>
    </>
  );
}

export default App;
