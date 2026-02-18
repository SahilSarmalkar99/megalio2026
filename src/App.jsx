import React, { useState } from "react";
import MainLayout from "./layouts/MainLayout";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Schedule } from "./pages/Schedule";
import Team from "./pages/Team";
import ContactUs from "./pages/ContactUs";
import Event from "./pages/Event";
import { useSmoothScroll } from "./hook/useSmoothScroll";

const App = () => {
  useSmoothScroll()
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/Event" element={<Event />} />
        <Route path="/Schedule" element={<Schedule />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Route>
    </Routes>
  );
};

export default App;
