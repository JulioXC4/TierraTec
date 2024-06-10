import React from "react";
import LandingPage from "./components/LandingPage/LandingPage";
import Navbar from "./components/LandingPage/Navbar";

const page = async () => {
  return (
    <div className="w-full h-full">
      <Navbar />
      <LandingPage />
    </div>
  );
};

export default page;
