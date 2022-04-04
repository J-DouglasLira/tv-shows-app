import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import Genres from "./components/Geners";
import Home from "./components/Home";



function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    axios.get("/api").then((res) => {
      setData(res.data);
    });
  }, []);
  console.log(data);
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/generos" element={<Genres />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
