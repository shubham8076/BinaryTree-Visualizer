import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Footer from "./components/Footer";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("white");
  const toggleMode = () => {
    const elt = document.querySelector("#base-container");
    if (mode === "white") {
      setMode("black");
      elt.classList.add("app-dark");
      elt.classList.remove("app-light");
    } else {
      setMode("white");
      elt.classList.add("app-light");
      elt.classList.remove("app-dark");
    }
  };
  return (
    <>
      <div id = "base-container" className="App app-light" >
        <Navbar title="Tree visualiser" toggle={toggleMode} mode={mode} />
        <div className={`container `}>
          <TextForm mode={mode}/>
        </div>
        <Footer mode={mode}/>
      </div>

    </>
  );
}

export default App;
