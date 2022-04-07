import React from "react";
import Header from "./components/Header";
import Geners from "./components/Geners";
import Home from "./components/Home";
import NewGeners from "./components/NewGeners";
import EditGeners from "./components/EditGeners";
import Series from "./components/Series";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NewSerie from "./components/NewSeries";
;



function App() {

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/genres/:id" exact element={<EditGeners />} />
          <Route path="/genres/new" exact element={<NewGeners />} />
          <Route path="/genres" exact element={<Geners />} />
          <Route path="/series" exact element={<Series />} />
          <Route path="/series/new" exact element={<NewSerie />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
