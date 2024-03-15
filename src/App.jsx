//App.jsx

//Imports
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import CarMake from "./pages/CarMake";
import CarType from "./pages/CarType";
import CarYear from "./pages/CarYear";
import NavBar from "./components/NavBar";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <div>
        <h1>Car Gallery</h1>
        <div className="categories">
          <button onClick={() => handleCategoryClick("CarMake")}>Make</button>
          <button onClick={() => handleCategoryClick("CarType")}>Type</button>
          <button onClick={() => handleCategoryClick("CarYear")}>Year</button>
        </div>
        {selectedCategory === "CarMake" && <CarMake />}
        {selectedCategory === "CarType" && <CarType />}
        {selectedCategory === "CarYear" && <CarYear />}
      </div>
    </>
  );
}

export default App;
