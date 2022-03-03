import React from "react";
import { Announcments } from "../components/Announcements";
import { NavBar } from "../components/NavBar";
import { Slider } from "../components/Slider";

export const Home = () => {
  return (
    <div>
      <Announcments />
      <NavBar />
      <Slider />
    </div>
  );
};
