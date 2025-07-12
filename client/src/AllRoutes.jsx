import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";

const AllRoutes = ({ slideIn, handleSlideIn }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home slideIn={slideIn} handleSlideIn={handleSlideIn} />}
      />
    </Routes>
  );
};

export default AllRoutes;
