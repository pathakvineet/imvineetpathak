import About from "./Sections/About";
import Footer from "./Sections/Footer";
import HobbiesAndLikes from "./Sections/HobbiesAndLikes";
import Me from "./Sections/Me";
import SkillSpectrum from "./Sections/SkillSpectrum";
import DigitalFootprint from "./Sections/DigitalFootprint";
import ProjectOdyssey from "./Sections/ProjectOdyssey";
import "./assets/css/common.css";
import Music from "./Sections/Music";

function App() {
  return (
    <div>
      <Me />
      <About />
      <ProjectOdyssey />
      <SkillSpectrum />
      <HobbiesAndLikes />
      <Music />
      <DigitalFootprint />
      <Footer />
    </div>
  );
}

export default App;
