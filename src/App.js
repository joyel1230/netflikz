import "./App.css";
import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import Banner from "./Components/Banner/Banner";
import Rowpost from "./Components/RowPost/Rowpost";
import { comedy, horror, trending } from "./urls";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Rowpost url={trending} title="Trendings" />
      <Rowpost url={horror} title="Horror" isSmall />
      <Rowpost url={comedy} title="Comedy" isSmall />
    </div>
  );
}

export default App;
