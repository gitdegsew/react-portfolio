import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import NavBar from "./scenes/NavBar";
import DotGroup from "./scenes/DotGroup";
import Landing from "./scenes/Landing";
import MySkills from "./scenes/MySkills";
import Projects from "./scenes/Projects";

import LineGradient from "./components/LineGradient";
import Contact from "./scenes/Contact";
import Footer from "./scenes/Footer";
import About from "./scenes/About";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const isAboveMediumScreen = useMediaQuery("(min-width:1060px)");
  const [isTopPage, setIsTopPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopPage(true);
      if (window.scrollY !== 0) setIsTopPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-deep-blue ">
      <NavBar
        isTopPage={isTopPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreen && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <Landing setSelectedPage={setSelectedPage} />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full">
        <About />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full">
        <MySkills />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto ">
        <Projects />
      </div>
      
      <LineGradient />
      <div className="w-5/6 mx-auto h-full">
        <Contact />
      </div>
      <LineGradient />
      <div className=" mx-auto h-full w-full">
        <Footer />
      </div>
    </div>
  );
}

export default App;
