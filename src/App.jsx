import NavBar from "./components/NavBar";
import { useState } from "react";
import "./App.css";
import CartMemes from "./components/CardMemes/CardMemes.jsx";
import CardContainer from "./components/CardContainer/CardContainer.jsx";

function App() {
  return (
    <div>
      <NavBar />
      <CardContainer />
    </div>
  );
}

export default App;
