import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Compound from "./pages/compound-components-pattern";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/compound" element={<Compound />} />
    </Routes>
  );
}

export default App;
