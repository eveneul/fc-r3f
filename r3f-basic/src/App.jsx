import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MainCanvas from "./components/main-canvas";

function App() {
  return (
    <>
      <div className="canvas-wrapper">
        <MainCanvas />
      </div>
    </>
  );
}

export default App;
