import About from "./Sections/About";
import Footer from "./Sections/Footer";
import HobbiesAndLikes from "./Sections/HobbiesAndLikes";
import Me from "./Sections/Me";
import Skills from "./Sections/Skills";
import FindMe from "./Sections/FindMe";
import Work from "./Sections/Work";
import "./assets/css/common.css";
import Music from "./Sections/Music";
import LoopingAudioPlayer from "./Sections/LoopingAudioPlayer";

function App() {
  return (
    <div>
      <Me />
      <About />
      <Work />
      <Skills />
      <HobbiesAndLikes />
      <Music />
      <FindMe />
      <Footer />
      <LoopingAudioPlayer />
    </div>
  );
}

export default App;
