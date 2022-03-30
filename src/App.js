import React from "react";
import Header from "./Header";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

const Home = () => {
  return <h1>Home!</h1>
}

const Generos = () => {
  return <h1>Generos!</h1>
}

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route  path="/" exact element={<Home/>} />
          <Route  path="/generos" exact element={<Generos/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
