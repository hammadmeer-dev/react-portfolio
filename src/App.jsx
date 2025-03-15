import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Aboutme from "./Components/About-Me";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
function App() {
  const [count, setCount] = useState(0);
  const [nightMode, setNightMode] = useState(false);

  useEffect(() => {
    if (nightMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("nightMode", nightMode);
  }, [nightMode]);
  const handleNightMode = () =>{
    setNightMode(!nightMode)
    console.log(nightMode)
  }
  return (
    <>
      <Navbar handleNightMode={handleNightMode} nightMode={nightMode}/>
      <Hero />
      <Aboutme/>
      <Skills/>
      <Contact />
    </>
  );
}

export default App;
