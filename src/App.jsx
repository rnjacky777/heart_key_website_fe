import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SurveyPage from "./pages/SurveyPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SurveyPage" element={<SurveyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
