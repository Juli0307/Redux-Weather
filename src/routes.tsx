import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Clima from "./pages/Clima";
import Home from "./pages/Home";

export const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/clima" element={<Clima />} />
    </Routes>
  </BrowserRouter>
);
