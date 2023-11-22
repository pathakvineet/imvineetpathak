import About from "./Sections/About";
import Footer from "./Sections/Footer";
import HobbiesAndLikes from "./Sections/HobbiesAndLikes";
import Me from "./Sections/Me";
import Skills from "./Sections/Skills";
import FindMe from "./Sections/FindMe";
import Work from "./Sections/Work";

function App() {
  return (
    <div>
      <Me />
      <About />
      <Work />
      <Skills />
      <HobbiesAndLikes />
      <FindMe />
      <Footer />
    </div>
  );
}

export default App;
