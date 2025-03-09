import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar/>
      <Hero />
    </>
  );
}

export default App;
