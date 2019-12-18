import React from "react";
import "./App.css";
import Header from "./Components/Header/header.js";
import Home from "./Views/Home/home.js";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
    </div>
  );
}

export default App;
