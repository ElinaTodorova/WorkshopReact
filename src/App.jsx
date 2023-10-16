import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CompteurLike from "./assets/components/compteur_likes/compteur";

function App() {
  return (
    <div>
      <CompteurLike />
    </div>
  );
}

export default App;
