import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import ExperienceDetail from "./Components/ExperienceDetail";
import ScrollToTop from "./Components/ScrollToTop";
import "./App.css";

import SEO from "./Components/SEO/SEO";
import SchemaMarkup from "./Components/SEO/SchemaMarkup";

function App() {
  const [nightMode, setNightMode] = useState(true);

  useEffect(() => {
    if (nightMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("nightMode", nightMode);
  }, [nightMode]);

  const handleNightMode = () => {
    setNightMode(!nightMode)
    console.log(nightMode)
  }
  return (
    <Router>
      <ScrollToTop />
      <SEO />
      <SchemaMarkup />
      <Routes>
        <Route path="/" element={<Home handleNightMode={handleNightMode} nightMode={nightMode} />} />
        <Route path="/experience/:id" element={<ExperienceDetail handleNightMode={handleNightMode} nightMode={nightMode} />} />
      </Routes>
    </Router>
  );
}

export default App;
