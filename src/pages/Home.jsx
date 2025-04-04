import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome to Our Survey</h1>
      <Link to="/SurveyPage">Go to Survey</Link>
    </div>
  );
}

export default Home;
